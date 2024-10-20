import useArray from "./useArray";

function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div>
      <div>{array.length ? array.join(", ") : "[ ]"}</div>
      <button onClick={() => push(7)}>push 7</button>
      <button onClick={() => update(1, 9)}>change second element to 9</button>
      <button onClick={() => remove(1)}>remove second element</button>
      <button onClick={() => filter((n) => n < 3)}>
        keep nummbers less than 4
      </button>
      <button onClick={() => set([1, 2])}>set to 1,2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default ArrayComponent;
