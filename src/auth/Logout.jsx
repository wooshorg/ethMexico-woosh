import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { magic } from "../../services/magic";

const Logout = () => {
    const {account, setAccount, isLoggedIn, setIsLoggedIn} = useContext(userContext)

    const disconnect = async () => {
        await magic.connect.disconnect().catch((e) => {
            console.log(e);
        });
        setAccount(null);
        setIsLoggedIn(false);
    };
    return (
        <>
            {account && (
            <>
                <button onClick={disconnect} className="button-row">
                Disconnect
                </button>
            </>
        )}
        </>
    )

}

export default Logout; 