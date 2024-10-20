import { useEffect, useRef, useState } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

function DeepCompareEffect() {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef();
  const useDeepCompareEffectCountRef = useRef();

  const person = { age, name: "Alireza" };

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent =
      parseInt(useDeepCompareEffectCountRef.current.textContent) + 1;
  }, [person]);

  return (
    <div>
      <div>
        useEffect : <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepComapreEffect : <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>other Count : {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        Increment Age
      </button>
      <button onClick={() => setOtherCount((count) => count + 1)}>
        Increment other Count
      </button>
    </div>
  );
}

export default DeepCompareEffect;
