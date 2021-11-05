import { useRouter } from "next/router";

function feacture(){
    const router = useRouter();
    const {product, featureId} = router.query;

    return(
        <div>product: {product} & feacture: {featureId}</div>
    )
}

export default feacture;