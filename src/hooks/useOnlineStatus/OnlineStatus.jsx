import useOnlineStatus from "./useOnlineStatus";

function OnlineStatus() {
  const online = useOnlineStatus();
  return <div>{online.toString()}</div>;
}

export default OnlineStatus;
