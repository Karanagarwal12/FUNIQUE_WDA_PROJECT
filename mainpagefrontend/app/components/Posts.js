import { useState } from "react"
import gsap from 'gsap';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "../styles/posts.css"
import { toggleButtonClasses } from "@mui/material";


export default function Posts({data}) {
  const [posts, setPosts] = useState(data.posts);
  function PostRight({ post }) {
    // let toggle = "des";
    const [toggle, setToggle] = useState("des");
    const toggleCommentDes = (e) => {
      const box = e.target.parentElement.parentElement.firstChild.firstChild;
      if (toggle === "des") {
        gsap.to(e.target, {
          y: "-82%",
          borderBottomLeftRadius: '35px',
          borderTopLeftRadius: 0,
          ease: 'power2.inOut',
          duration: 0.8,
        });
        gsap.to(e.target.nextSibling, {
          y: '150px',
          ease: 'power2.inOut',
          duration: 0.8,
        });
        gsap.to(e.target.previousSibling, {
          ease: 'power2.inOut',
          y: '200px',
          duration: 0.8,
        });

        gsap.fromTo(box.firstChild, {
          text: 'Description',
          opacity: 1,
        }, {
          opacity: 0,
          text: 'Comments',
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            box.children[0].textContent = 'Comments';
            gsap.to(box.children[0], { opacity: 1, duration: 0.4, ease: 'power2.inOut' });
          },
        });

        gsap.to(box.lastChild, {
          x: '-56%',
          duration: 0.8,
          ease: 'power2.inOut',
        })
        setToggle("com");
        console.dir(box.lastChild);
      }
      else {
        gsap.to(e.target, {
          y: 0,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: '35px',
          ease: 'power2.inOut',
          duration: 0.8,
        });
        gsap.to(e.target.nextSibling, {
          y: '0',
          ease: 'power2.inOut',
          duration: 0.8,
        });
        gsap.to(e.target.previousSibling, {
          y: '0',
          ease: 'power2.inOut',
          duration: 0.8,
        });

        gsap.fromTo(box.children[0], {
          text: 'Comments',
          opacity: 1,
        }, {
          opacity: 0,
          text: 'Description',
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            box.children[0].textContent = 'Description';
            gsap.to(box.children[0], { opacity: 1, duration: 0.4, ease: 'power2.inOut' });
          },
        });

        gsap.to(box.lastChild, {
          x: '0',
          duration: 0.8,
          ease: 'power2.inOut',
        })
        setToggle("des");
      }
    }
    return (
      <div className="right">
        <div className="box">
          <pre>
            <h1>Description</h1>
            <div className="wrapper">
              <div className="desWrapper">
                <p>{post.description}</p>
                <p className="tags">{post.tags.map((tag) => (`#${tag} `))}</p>
              </div>
              <div className="comWrapper">
                {post.comments.map((comment) =>
                (<div className="comment">
                  <img src={comment.userProfileUrl} />
                  <div className="comCenter">
                    <div className="comHeader">
                      <p>{comment.userName}</p>
                      <p>{comment.time}</p>
                    </div>
                    <p>{comment.content}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </pre>
        </div>
        <div className="nav">
          <span className="des">Description</span>
          <div className="highlight" onClick={toggleCommentDes}></div>
          <span className="comments">Comments</span>
        </div>
      </div>
    );
  }

  return (
    <div className="postSection">
      <div className="posts">
        {posts?.map((post,id) => (
          <div key={id} className="post">
            <div className="left">
              <img src={post.img} />
              <div className="imgCover">
                <div className="upper">
                  <div className="Ileft">
                    <img src={post.userProfileUrl} />
                    <h1>{post.userName}</h1>
                    <p>{post.time}</p>
                  </div>
                  <MoreHorizOutlinedIcon />
                </div>
                <div className="lower">
                  <div>
                    <FavoriteBorderRoundedIcon className="like"/>
                  
                  <ModeCommentOutlinedIcon /><ReplyOutlinedIcon className="share" /></div>
                  <TurnedInNotOutlinedIcon />
                </div>
              </div>
            </div>
            <PostRight post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}