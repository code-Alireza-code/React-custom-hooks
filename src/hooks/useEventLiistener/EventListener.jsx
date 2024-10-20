import { useState } from "react";
import useEventListener from "./useEventListener";

function EventListener() {
  const [key, setKey] = useState("");
  useEventListener("keydown", (e) => setKey(e.key));

  return <div>Last key : {key}</div>;
}

export default EventListener;
