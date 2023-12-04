import { useState, useEffect } from "react"
import Posts from "./Posts"
import '../styles/interests.css'

export default function Interests({ data }) {
    const [posts, setPosts] = useState([]);
    const [interests, setInterests] = useState(data.interests);
    useEffect(() => {
        const filteredPosts = data.posts.filter(post =>
            post.tags.some(tag => tag.includes(data.interest))
        );
        setPosts(filteredPosts);
    }, [data.interest, data.posts]);

    const handler = (e) => {
        data.setInterest(e.target.innerHTML);
        setPosts(posts.filter((post) => post.tags.some(tag => tag.includes(data.interest))));
    }
    return (
        <div className="interestInfo">
            <div className="header">
                {interests.map((interest, i) => <span onClick={handler} key={i} className={data.interest == interest && (`interest select`) || "interest"}>{interest}</span>)}
            </div>
            {posts[0] &&
                <Posts data={{ posts }} />
            }
        </div>
    )
}