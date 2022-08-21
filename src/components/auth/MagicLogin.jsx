import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { web3 } from "../../services/web3"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MagicLogin = () => {
    const {setAccount} = useContext(userContext)
    const navigate = useNavigate()


    const checkWorldID = async (address) => {
        // Make a request for a user with a given ID
        console.log('CheckworldId()', address)
        axios.get(`https://woosh-backend.herokuapp.com/user/retrieve/${address}`)
        .then(response =>  {
            console.log("axios get", response);
            if(response.data.worldcoin_hash !== undefined){
                console.log("world coin hash: ", response.worldcoin_hash)
                navigate("/home")
            }
            else{
                navigate("/verify")
            }
        })
        .catch(error => {
        // handle error
            console.log("This is an error", error);
            navigate("/verify")
        })
    }

    const login = async () => {
        web3.eth
        .getAccounts()
        .then((accounts) => {
            setAccount(accounts?.[0]);
            checkWorldID(accounts?.[0])
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