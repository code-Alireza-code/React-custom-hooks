import { useEffect, useRef } from "react";
import useRenderCount from "../useRenderCount/useRenderCount";

export default function useDebugInformation(componentName, props) {
  const count = useRenderCount();
  const changedProps = useRef({});
  const previousProps = useRef(props);
  const lastRenderTimeStamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, previousProps });

  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});

  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRerender: Date.now() - lastRenderTimeStamp.current,
    lastRenderTimeStamp: lastRenderTimeStamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimeStamp.current = Date.now();
    console.log("[debug-info]", componentName, info);
  });

  return info;
}
