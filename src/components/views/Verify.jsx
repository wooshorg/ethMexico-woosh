import { WorldIDWidget } from "@worldcoin/id"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"
import axios from "axios"


const Verify = () => {
    const navigate = useNavigate()
    const {account} = useContext(userContext)

    useEffect(() => {
        console.log(account)
    }, [])


    const completeVerification = (verificationResponse) => {
        console.log(verificationResponse)
        console.log(account)
        const config = {
            headers: {"Content-Type": "application/json"}
        }
        const data ={
            merkle_root: verificationResponse.merkle_root,
            nullifier_hash: verificationResponse.nullifier_hash,
            action_id: "wid_59c8d7e8f6e04c4dfaa27247f03aa08e",
            signal: account,
            proof: verificationResponse.proof
        }

        axios.post('https://developer.worldcoin.org/api/v1/verify', data, config)
        .then(res =>{ console.log(res)

        
        }
        
        
        
        
        
        
        
        )
        .catch(err => console.log(err))
        

        


        // //add to databaase

        // axios.post('/user/bind', {
        //     address: account,
        //     worldcoin_hash: "hash"
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //         navigate(`/home`)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        }

    return (
        <>
            <h1>Looks your new here. Please verify your a hooman</h1>
            <WorldIDWidget
                actionId="wid_59c8d7e8f6e04c4dfaa27247f03aa08e" // obtain this from developer.worldcoin.org
                signal={account}
                enableTelemetry
                onSuccess={(verificationResponse) => completeVerification(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
            />
        </>
    )
}

export default Verify;