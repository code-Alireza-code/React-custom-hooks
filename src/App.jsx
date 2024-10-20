import "./App.css";
import ArrayComponent from "./hooks/useArray/Array";
import Async from "./hooks/useAsync/Async";
import Debounce from "./hooks/useDebounce/Debounce";
import DeepCompareEffect from "./hooks/useDeepCompareEffect/DeepCompareEffect";
import EventListener from "./hooks/useEventLiistener/EventListener";
import Fetch from "./hooks/useFetch/Fetch";
import OnScreen from "./hooks/useOnScreen/OnScreen";
import Previous from "./hooks/usePrevious/Previous";
import Script from "./hooks/useScript/Script";
import StateWithHistory from "./hooks/useStateWithHistory/StateWithHistory";
import Storage from "./hooks/useStorage/Storage";
import Timeout from "./hooks/useTimeout/Timeout";
import Toggle from "./hooks/useToggle/Toggle";
import UpdateEffect from "./hooks/useUpdateEffect/UpdateEffect";
import WindowSize from "./hooks/useWindowSize/WIndowSize";

function App() {
  return (
    <div>
      {/* <Toggle defaultValue={true} /> */}
      {/* <Timeout /> */}
      {/* <Debounce /> */}
      {/* <UpdateEffect /> */}
      {/* <ArrayComponent /> */}
      {/* <Previous /> */}
      {/* <StateWithHistory /> */}
      {/* <Storage /> */}
      {/* <Async /> */}
      {/* <Fetch /> */}
      {/* <Script /> */}
      {/* <DeepCompareEffect /> */}
      {/* <EventListener /> */}
      {/* <OnScreen /> */}
      <WindowSize />
    </div>
  );
}

export default App;
