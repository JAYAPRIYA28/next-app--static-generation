import Navbar from "../Components/Navbar";
import {useRouter} from "next/router"
import Link from "next/dist/client/link";




function HomePage(){
   const router = useRouter();

   function handleClick(){
    router.push("/docs");
   }

  return <div>
  <Navbar />
  HomePage
  <button onClick={handleClick}>submit</button>
  <Link href="/post"><a>post</a></Link>
  </div>

}

export default HomePage; 