import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { web3 } from "../../services/web3"

const Login = () => {
    const {account, setAccount, isLoggedIn, setIsLoggedIn} = useContext(userContext)

    const login = async () => {
        web3.eth
        .getAccounts()
        .then((accounts) => {
            setAccount(accounts?.[0]);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (
        <>
            {!account && (
                <button onClick={login} className="button-row">
                Sign In
            </button>
        )}
        </>
    )

}

export default Login; 