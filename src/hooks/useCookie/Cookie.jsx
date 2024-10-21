import useCookie from "./useCookie";

function Cookie() {
  const [value, update, remove] = useCookie("name", "Alireza");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("John")}>Change name to John</button>
      <button onClick={remove}>Remove Name</button>
    </>
  );
}

export default Cookie;
