'use client'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Posts from "./components/Posts"
import Chatbox from "./components/Chatbox"


function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="hero">
        <Sidebar />
        <Posts />
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
