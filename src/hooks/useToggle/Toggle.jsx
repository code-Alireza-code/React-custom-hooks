import useToggle from "./useToggle";

function Toggle({ defaultValue }) {
  const [value, toggleValue] = useToggle(defaultValue);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}

export default Toggle;
