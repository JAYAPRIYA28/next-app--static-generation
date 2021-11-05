function Post({post}){
    return(
        <div>
         {post.title}
         {console.log(post.title)}
        </div>
    )
}

export default Post;

export async function getStaticPaths(){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()

    const paths = data.map(data => {
        return {
            params : {
                postId : `${data.id}`
            }
        }
    })

    return {
        // paths: [
        //     {
        //         params: { postId : "1"},
        //     },
        //     {
        //         params: { postId: "2"},
        //     },
        //     {
        //         params: { postId: "3"},
        //     },
        // ],
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return {
        props: {
            post : data,
        }
    }

}