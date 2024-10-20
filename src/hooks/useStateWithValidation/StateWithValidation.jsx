import useStateWithValidation from "./useStateWithValidation";

function StateWithValidation() {
  const [username, setUsername, isValid] = useStateWithValidation(
    (name) => name.length > 5
  );

  return (
    <>
      <div>valid : {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}

export default StateWithValidation;
