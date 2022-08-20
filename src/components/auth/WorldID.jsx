import { WorldIDWidget, WidgetProps } from "@worldcoin/id";


const WorldId = () => {
    return (
        <>
            <WorldIDWidget
            actionId="wid_staging_PN8fFL7V2N" // obtain this from developer.worldcoin.org
            signal="my_signal"
            enableTelemetry
            onSuccess={(proof) => console.log(proof)}
            onError={(error) => console.error(error)}
            />;
        </>
    )

}

export default WorldId; 