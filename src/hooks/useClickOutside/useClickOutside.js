import useEventListener from "../useEventLiistener/useEventListener";

export default function useClickOutside(ref, cb, exceptionName) {
  useEventListener(
    "click",
    (e) => {
      if (
        ref.current == null ||
        ref.current.contains(e.target) ||
        e.target.name == exceptionName
      )
        return;
      cb(e);
    },
    document
  );
}
