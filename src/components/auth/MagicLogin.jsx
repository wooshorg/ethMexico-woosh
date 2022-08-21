import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { web3 } from "../../services/web3"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MagicLogin = () => {
    const {account, setAccount} = useContext(userContext)
    const navigate = useNavigate()


    const checkWorldID = () => {
        // Make a request for a user with a given ID
        axios.get(`/user?address=${account}`)
        .then(function (response) {
            console.log(response);
            if(response.worldcoin_hash != ""){
                return true;
            }
            else {
                return false;
            }
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })

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