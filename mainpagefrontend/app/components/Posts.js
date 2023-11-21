import { useState } from "react"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import "../styles/posts.css"

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: "slfwoli4342",
      userId: "sifi423idsf",
      userName: "Axios",
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
      comments: [
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
      description: `🔐 Cyber Security Alert! 🌐

Axios Tech Club is raising awareness about cyber security! 🚨💻
      
🌐 Why It Matters:
In our digital age, cyber threats are real. Let's stay informed and secure our online presence. 💡
      
🚀 What We'll Cover:
- Strong password creation 🛡️
- Spotting phishing attempts 🎣
- Regular software updates 🔄
- Two-factor authentication 🔐

📅 Join Us:
2nd Dec at 5 pm for a webinar on cyber security tips! Let's build a safer digital community. 💪💬

🔁 Spread the Word:
Share this post to promote cyber security awareness! 👥🌐

Stay safe online! 🛡️✨`,
      img: "https://imgs.search.brave.com/tnsak6oefUoXbIJmnOk7JXHolK1LziGbQjXEoiogfaw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXQtY29tcHV0/ZXJfODE1MDg4LTIz/NC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
      tags: ["AxiosTechClub", "CyberSecurity", "OnlineSafety"],
      views: [
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
      ],
      time: "2 days",
    },
    {
      id: "slfwoli4342",
      userId: "sifi423idsf",
      userName: "Axios",
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
      comments: [
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
      description: `🔐 Cyber Security Alert! 🌐

Axios Tech Club is raising awareness about cyber security! 🚨💻

🌐 Why It Matters:
In our digital age, cyber threats are real. Let's stay informed and secure our online presence. 💡

🚀 What We'll Cover:
- Strong password creation 🛡️
- Spotting phishing attempts 🎣
- Regular software updates 🔄
- Two-factor authentication 🔐

📅 Join Us:
2nd Dec at 5 pm for a webinar on cyber security tips! Let's build a safer digital community. 💪💬

🔁 Spread the Word:
Share this post to promote cyber security awareness! 👥🌐

Stay safe online! 🛡️✨`,
      img: "https://imgs.search.brave.com/8DP5hlegr_krGiMXuYsgq9z_op_P1H8xrT6U6GQ2V1s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jMS53/YWxscGFwZXJmbGFy/ZS5jb20vcHJldmll/dy8xMS8zMTMvNzQv/Y29kZS1jb2Rlci1j/b2RpbmctaHRtbC5q/cGc",
      tags: ["AxiosTechClub", "CyberSecurity", "OnlineSafety"],
      views: [
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
      ],
      time: "2 days",
    },
    {
      id: "slfwoli4342",
      userId: "sifi423idsf",
      userName: "Axios",
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
      comments: [
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
      description: `🔐 Cyber Security Alert! 🌐

Axios Tech Club is raising awareness about cyber security! 🚨💻

🌐 Why It Matters:
In our digital age, cyber threats are real. Let's stay informed and secure our online presence. 💡

🚀 What We'll Cover:
- Strong password creation 🛡️
- Spotting phishing attempts 🎣
- Regular software updates 🔄
- Two-factor authentication 🔐

📅 Join Us:
2nd Dec at 5 pm for a webinar on cyber security tips! Let's build a safer digital community. 💪💬

🔁 Spread the Word:
Share this post to promote cyber security awareness! 👥🌐

Stay safe online! 🛡️✨`,
      img: "https://imgs.search.brave.com/Erzu2ep08I9dCNRC9CjUVg4vtvCw9tLqdKWiir4lTeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2Nzg1NjU5/OTkzMzItMWNkZTQ2/MmY3YjI0P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OGNISnZaM0po/YlcxcGJtZDhaVzU4/TUh4OE1IeDhmREE9",
      tags: ["AxiosTechClub", "CyberSecurity", "OnlineSafety"],
      views: [
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
        {
          userId: "2r4r34834jf",
          time: "4 min",
        },
      ],
      time: "2 days",
    },
  ])
  const [description, setDescription] = useState(true);
  return (
    <div className="postSection">
      <div className="posts">
        {posts.map((post) => (
          <div className="post">
            <div className="left">
              <img src={post.img} />
              <div className="imgCover">
                <div className="upper"></div>
                <div className="lower">
                  <div><FavoriteBorderRoundedIcon/><ModeCommentOutlinedIcon/><ReplyOutlinedIcon className="share"/></div>
                  <TurnedInNotOutlinedIcon/>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="box">
                <pre>
                  <h1>{description && "Description" || "Comments"}</h1>
                  <p>{post.description}</p>
                  <p className="tags">{post.tags.map((tag) => (`#${tag} `))}</p></pre>
              </div>
              <div className="nav">
                <div className="highlight"></div>
                <span className="des">Description</span>
                <span className="comments">Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="topBlur"></div> */}
    </div>
  );
}