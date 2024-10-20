import useGeolocation from "./useGeolocation";

function Geolocation() {
  const {
    loading,
    error,
    data: { longitude, latitude },
  } = useGeolocation();

  return (
    <>
      <div>Loading : {loading.toString()}</div>
      <div>Error : {error?.message}</div>
      <div>
        {latitude} × {longitude}
      </div>
    </>
  );
}

export default Geolocation;
