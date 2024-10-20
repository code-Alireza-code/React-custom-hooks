import "./App.css";
import ArrayComponent from "./hooks/useArray/Array";
import Async from "./hooks/useAsync/Async";
import Debounce from "./hooks/useDebounce/Debounce";
import Fetch from "./hooks/useFetch/Fetch";
import Previous from "./hooks/usePrevious/Previous";
import StateWithHistory from "./hooks/useStateWithHistory/StateWithHistory";
import Storage from "./hooks/useStorage/Storage";
import Timeout from "./hooks/useTimeout/Timeout";
import Toggle from "./hooks/useToggle/Toggle";
import UpdateEffect from "./hooks/useUpdateEffect/UpdateEffect";

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
      <Fetch />
    </div>
  );
}

export default App;
