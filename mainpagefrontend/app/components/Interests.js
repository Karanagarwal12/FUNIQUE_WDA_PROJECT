import { useState, useEffect } from "react"
import Posts from "./Posts"
import '../styles/interests.css'

export default function Interests({data}) {
    const [posts, setPosts] = useState([]);
    const [interests, setInterests] = useState([
        {
            id: "j2348fj30rer",
            title: "Foot Ball",
        },
        {
            id: "j2348fj30rer",
            title: "Volleyball",
        },
        {
            id: "j2348fj30rer",
            title: "Web Dev",
        },
        {
            id: "j2348fj30rer",
            title: "Music",
        }


    ]);
    useEffect(() => {
        // Filter posts when data.interest changes
        const filteredPosts = data.posts.filter(post =>
          post.tags.some(tag => tag.includes(data.interest))
        );
        setPosts(filteredPosts);
      }, [data.interest, data.posts]);
    console.log(data.interest);
    return (
        <div className="interestInfo">
            <div className="header">
                {interests.map((interest,i) =><span onClick={(e)=>{
                    data.setInterest(e.target.innerHTML);
                    setPosts(posts.filter((post)=>post.tags.some(tag => tag.includes(data.interest))));
                    console.log(posts);
                    }} key={i} className={data.interest==interest.title && (`interest select`) || "interest"}>{interest.title}</span>)}
            </div>
            {posts[0] && 
                <Posts data={{ posts }} />
            }
        </div>
    )
}