import MagicLogin from "../auth/MagicLogin"
import { userContext } from "../../context/userContext"
import { useEffect } from "react";



const Landing = () => {
    const {account} = userContext;
    return (
        <>
            {!account && (
                <MagicLogin />
            ) 
            }
        </>
    )
}
export default Landing