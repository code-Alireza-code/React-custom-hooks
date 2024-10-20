import useMediaQuery from "./useMediaQuery";

function MediaQuery() {
  const isLarge = useMediaQuery(`(min-width:100px)`);
  return <div>Large : {isLarge.toString()}</div>;
}

export default MediaQuery;
