import MagicLogin from "../auth/MagicLogin";
import { useEffect } from "react";
import { userContext } from "../../context/userContext";

const Landing = () => {
  const { account } = userContext;
  return <>{!account && <MagicLogin />}</>;
};
export default Landing;
