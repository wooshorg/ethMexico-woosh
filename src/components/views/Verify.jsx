import { WorldIDWidget } from "@worldcoin/id"
import { useNavigate } from "react-router-dom"

const Verify = () => {
    const navigate = useNavigate()


    const completeVerification = (verificationResponse) => {
        console.log(verificationResponse)
        navigate(`/home`)
    }

    return (
        <>
            <h1>Looks your new here. Please verify your a hooman</h1>
            <WorldIDWidget
                actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
                signal="my_signal"
                enableTelemetry
                onSuccess={(verificationResponse) => completeVerification(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
                onError={(error) => console.error(error)}
            />
        </>
    )
}

export default Verify;