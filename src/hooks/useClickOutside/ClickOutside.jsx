import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

function ClickOutside() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useClickOutside(
    modalRef,
    (e) => {
      console.log(e.target.name);
      if (open) setOpen(false);
    },
    "exception-btn"
  );

  return (
    <>
      <button name="exception-btn" onClick={() => setOpen(true)}>
        Open
      </button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}

export default ClickOutside;
