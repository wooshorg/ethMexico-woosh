import { WorldIDWidget } from "@worldcoin/id"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"


const Verify = () => {
    const navigate = useNavigate()
    const {account} = useContext(userContext)

    useEffect(() => {
        console.log(account)
    }, [])


    const completeVerification = (verificationResponse) => {
        console.log(verificationResponse)
        navigate(`/home`)
    }

    return (
        <>
            <h1>Looks your new here. Please verify your a hooman</h1>
            <WorldIDWidget
                actionId="wid_staging_1f0e5ad29850c3b9bdbb20a74476e547" // obtain this from developer.worldcoin.org
                signal={account}
                enableTelemetry
                onSuccess={(verificationResponse) => completeVerification(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
            />
        </>
    )
}

export default Verify;