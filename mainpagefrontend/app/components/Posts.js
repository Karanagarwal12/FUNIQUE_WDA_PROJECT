import { useState } from "react"
import "../styles/posts.css"

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: "slfwoli4342",
      userId: "sifi423idsf",
      userName: "lwef34wf4weklf",
      userProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVHHSss-5eSaTjCiGboKtIp-mHJgitz5hSt4ax_QlBhFg=s80-p-k-rw-no",
      likes: [
        {
          userId: "et34t34tt3ert",
          time: "now"
        },
        {
          userId: "243dfgrthr8fwk",
          time: "1 day"
        },
        {
          userId: "34t34tt3e4rt",
          time: "2 days"
        },
        {
          userId: "2rw34t34t8fwk",
          time: "6 min"
        },
        {
          userId: "rterteryedr5",
          time: "2 min"
        },
        {
          userId: "dgh5y547uy4",
          time: "10 hrs"
        },
        {
          userId: "4h56y567u8irf",
          time: "45 min"
        },
        {
          userId: "243f2w8hyfwk",
          time: "4 weeks"
        },
        {
          userId: "43t4t34t53e",
          time: "8 hrs"
        },
      ],
      comments : [
        {
          userId: "et34t34tt3ert",
          content: "fghrht",
          time: "now"
        },
        {
          userId: "243dfgrthr8fwk",
          content: "",
          time: "1 day"
        },
        {
          userId: "34t34tt3e4rt",
          content: "fghrtht5",
          time: "2 days"
        },
        {
          userId: "2rw34t34t8fwk",
          content: "",
          time: "6 min"
        },
        {
          userId: "rterteryedr5",
          content: "",
          time: "2 min"
        },
        {
          userId: "dgh5y547uy4",
          content: "",
          time: "10 hrs"
        },
        {
          userId: "4h56y567u8irf",
          content: "",
          time: "45 min"
        },
        {
          userId: "243f2w8hyfwk",
          content: "",
          time: "4 weeks"
        },
        {
          userId: "43t4t34t53e",
          content: "",
          time: "8 hrs"
        },
      ],
      description: "something something something something",

    }
  ])
    return (
     <div className="posts">
        
     </div>
    )
  }