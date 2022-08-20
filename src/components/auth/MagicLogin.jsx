import { WorldIDWidget } from "@worldcoin/id";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { web3 } from "../../services/web3"
import { useNavigate } from "react-router-dom";

const MagicLogin = () => {
    const {account, setAccount} = useContext(userContext)
    const navigate = useNavigate()


    const checkWorldID = () => {
        //api call to backend check if worldID hash exists in databse
        return false;
    }

    const login = async () => {
        web3.eth
        .getAccounts()
        .then((accounts) => {
            setAccount(accounts?.[0]);
            let isVerfified = checkWorldID()
            if(isVerfified){
                navigate(`/home`)
            }
            else {
                navigate(`/verify`)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (
        <>
            
            <button onClick={login} className="button-row">
                Enter Woosh
            </button>
        </>
    )

}

export default MagicLogin; 