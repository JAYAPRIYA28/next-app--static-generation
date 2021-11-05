import Link from "next/dist/client/link"
function Navbar(){
    return(
        <div>
            <ul>
             <li><Link href="/" ><a>Home</a></Link></li>
             <li><Link href="/NewPage"><a>NewPage</a></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;