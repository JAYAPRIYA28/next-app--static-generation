import router, {useRouter} from "next/router";

function Content(){

  const router = useRouter();

  const content = router.query.content;

    return <h1>{content}</h1>
}

export default Content;