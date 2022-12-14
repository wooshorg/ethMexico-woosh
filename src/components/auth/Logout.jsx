import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { magic } from "../../services/magic";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const {account, setAccount} = useContext(userContext)
    const navigate = useNavigate()

    const disconnect = async () => {
        await  magic.user.logout().catch((e) => {
            console.log(e);
        });
        setAccount(null);
        navigate(`/`)
    };
    return (
        <>
            <button onClick={disconnect} className="button-row">
            Disconnect
            </button>
        </>
    )

}

export default Logout; 