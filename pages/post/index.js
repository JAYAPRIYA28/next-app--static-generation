import Link from "next/dist/client/link";

function PostList({users}){
    return(
        <div>
        {
            users.map(user =>{
                return(
                    
                    <div key={user.id}>
                    <Link href={`/post/${user.id}`} passHref>{user.title}</Link></div>
                    
                )
                
            })
        }
        </div>
    )
}

export default PostList;

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()

    return {
        props: {
            users : data
        }
    }
}