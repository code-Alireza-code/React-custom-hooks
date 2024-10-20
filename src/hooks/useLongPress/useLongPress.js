import useEffectOnce from "../useEffectOnce/useEffectOnce";
import useEventListener from "../useEventLiistener/useEventListener";
import useTimeout from "../useTimeout/useTimeout";

export default function useLongPress(ref, cb, { delay = 1000 } = {}) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}
