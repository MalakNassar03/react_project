import {useEffect, useState} from "react";
import UserForm from "../components/UserForm";

function Home(){

    const [posts,setPosts] = useState([])// it will be an array

    const [loading,setLoading] = useState(true)

    const [error,setError] = useState(null)
    useEffect(()=>{
    },[])


    useEffect(()=>{
        fetchPosts()
    },[])

    const fetchPosts = async () =>{
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))// to pause the code for 2 seconds
            const mockposts = [
                {id:1,title:"post1",body:"post1 body"},
                {id:2,title:"post2",body:"post2 body"},
                {id:3,title:"post3",body:"post3 body"}
            ]
            setPosts(mockposts)
            setLoading(false)

        }catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    return(
        <div>

            <div className="app">
                <div className="container">
                    <div className="content">
                        <h1>Hello React</h1>
                    </div>


                </div>
                <div className="container">
                    <div className="posts-list">
                        <h2>latest posts</h2>
                        {posts.length === 0?(<div>No posts found</div>):
                            (<ul>
                                    {posts.map(postItem=>(
                                        <li key={postItem.id}>
                                            <h2>
                                                {postItem.title}
                                            </h2>
                                            <p>{postItem.body}</p>
                                            <button>read more</button>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }

                    </div>
                </div>

            </div>
            <UserForm></UserForm>
        </div>
    )
}

export default Home