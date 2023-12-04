'use client'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Posts from "./components/Posts"
import Chatbox from "./components/Chatbox"
import Interests from "./components/Interests"
import { useState } from "react"



function HeroCenter({data}) {

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
          userName: "Karan Agarwal",
          userProfileUrl: "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
          content: "Nicee...!!!👌",
          time: "now"
        },
        {
          userId: "43t4t34t53e",
          userName: "Cultural",
          userProfileUrl: "https://imgs.search.brave.com/cu9Tj1j9X3ikCtsd7VDLKwbzrduMU4kQnzqpbvLIjtU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w",
          content: "Birooooo...🙌",
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
      tags: ["AxiosTechClub", "CyberSecurity", "OnlineSafety","Foot Ball"],
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
      userName: "user 1234",
      userProfileUrl: "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
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
          userName: "Karan Agarwal",
          userProfileUrl: "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
          content: "Nicee...!!!👌",
          time: "now"
        },
        {
          userId: "43t4t34t53e",
          userName: "Cultural",
          userProfileUrl: "https://imgs.search.brave.com/cu9Tj1j9X3ikCtsd7VDLKwbzrduMU4kQnzqpbvLIjtU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w",
          content: "Birooooo...🙌",
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
      tags: ["AxiosTechClub", "CyberSecurity", "OnlineSafety","Music"],
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
          userName: "Karan Agarwal",
          userProfileUrl: "https://imgs.search.brave.com/6yz2O2VMpgQz_QxPjezntKKQCz7JzLGM10nxx8rjT9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2hvbWUvYmx1cmJz/L3Zpc3VhbHMud2Vi/cA",
          content: "Nicee...!!!👌",
          time: "now"
        },
        {
          userId: "43t4t34t53e",
          userName: "Cultural",
          userProfileUrl: "https://imgs.search.brave.com/cu9Tj1j9X3ikCtsd7VDLKwbzrduMU4kQnzqpbvLIjtU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w",
          content: "Birooooo...🙌",
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
      "id": "slfwoli4342",
      "userId": "newuser789",
      "userName": "John Doe",
      "userProfileUrl": "https://imgs.search.brave.com/8Si_AZEDfKmdc3P6BB1Yi0m831lxClEL9I77mwshNHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/MzIwNjY0NC9waG90/by9wb3J0cmFpdC1v/Zi1zbWlsaW5nLWNh/dWNhc2lhbi1tYW4t/cG9zZS1pbi1vZmZp/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTdscGJ4NWpF/VlFrZEcwaUE5VXZz/RVVtZXU3b2VkMkEz/c3V2TXdNUEFlSXM9",
      "likes": [
        {
          "userId": "et34t34tt3ert",
          "time": "now"
        },
        {
          "userId": "243dfgrthr8fwk",
          "time": "3 days"
        },
        {
          "userId": "34t34tt3e4rt",
          "time": "1 week"
        },
        {
          "userId": "2rw34t34t8fwk",
          "time": "15 min"
        },
        {
          "userId": "rterteryedr5",
          "time": "5 min"
        },
        {
          "userId": "dgh5y547uy4",
          "time": "8 hrs"
        },
        {
          "userId": "4h56y567u8irf",
          "time": "30 min"
        },
        {
          "userId": "243f2w8hyfwk",
          "time": "2 weeks"
        },
        {
          "userId": "43t4t34t53e",
          "time": "3 hrs"
        }
      ],
      "comments": [
        {
          "userId": "et34t34tt3ert",
          "userName": "Katherine Smith",
          "userProfileUrl": "https://images.unsplash.com/photo-1622633721982-9f9405915bc9?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "content": "Great post! 👍",
          "time": "now"
        },
        {
          "userId": "43t4t34t53e",
          "userName": "Tech Enthusiast",
          "userProfileUrl": "https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "content": "Interesting topic! 🤔",
          "time": "2 hrs"
        }
      ],
      "description": `🚀 Space Exploration Event! 🌌
    
      Join us for an exciting event on space exploration! 🚀🔭
    
      🌟 Highlights:
      - Guest speakers from NASA 🌠
      - Virtual telescope demo 🪐
      - Q&A with astronauts 👨‍🚀
      - Live streaming of a rocket launch 🚀
    
      📅 Date: December 15th, 2023
      ⏰ Time: 7:00 PM - 9:00 PM
      📍 Location: Virtual (Online)
    
      🚨 Limited spots available. Register now and don't miss the cosmic adventure! 🌌✨
    
      #SpaceEvent #Astronomy #NASA #CosmicAdventure`,
      "img": "https://imgs.search.brave.com/4NRax8COJhe4kKDQZBQw6UMdt4QZhdXInXZTrAllxZE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstc3BhY2Ut/OXcyN2RxbWM0bnJz/M3h3ZC5qcGc",
      "tags": ["SpaceEvent", "Astronomy", "NASA", "CosmicAdventure"],
      "views": [
        {
          "userId": "newuser123",
          "time": "10 min"
        },
        {
          "userId": "newuser456",
          "time": "20 min"
        },
        {
          "userId": "newuser789",
          "time": "5 min"
        },
        {
          "userId": "newuser987",
          "time": "15 min"
        },
        {
          "userId": "newuser654",
          "time": "8 min"
        },
        {
          "userId": "newuser321",
          "time": "12 min"
        },
        {
          "userId": "newuser234",
          "time": "25 min"
        }
      ],
      "time": "5 days"
    },
    
  ])
  const [interests, setInterests] = useState(()=>{

  
    let tags = posts.reduce(((acc,cur)=>{
      return acc.concat(cur.tags);
    }),[]);
    return [...new Set(tags)]
  });

  return (
    data.heroCenter == "posts"
    &&
    <Posts data={{posts}}/>
    ||
    (data.heroCenter == "interest"
      &&
      <Interests data={{interest:data.interest,setInterest:data.setInterest,posts,interests}}/>
    )
  );
}

function MainPage() {
  const [heroCenter, setHeroCenter] = useState("posts");
  const [interest, setInterest] = useState("");
  return (
    <div className="mainPage">
      <Navbar data={{setHeroCenter}}/>
      <div className="hero">
        <div className="bgEffect"></div>
        <Sidebar data={{setHeroCenter,heroCenter,setInterest}} />
        <HeroCenter data={{setHeroCenter,heroCenter,interest,setInterest}}/>
        <Chatbox />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <MainPage />
  )
}
