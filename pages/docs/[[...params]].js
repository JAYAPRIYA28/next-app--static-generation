import { useRouter } from "next/router"

function PageRender(){
   const router = useRouter();

    const {params = []} = router.query

    console.log(params)

    if(params.length == 2){
      return <h1>first content : {params[0]} & second content : {params[1]}</h1>
    }else if(params.length == 1){
      return  <h1>content : {params[0]}</h1>
    }

    return <div>

    PageRender
    </div>
}

export default PageRender;