import UserList from "../Components/UserList";

function User({users}){
    return(
        <div>
            {users.map(user =>{
               return(<div>
                   <UserList user={user}/>
               </div> )
            })}
        </div>
    )
}

export default User;

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)

    return {
        props: {
            users : data
        }
    }
}