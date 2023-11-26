import { useState } from 'react';
import '../styles/chatBox.css';

export default function Chatbox() {
  const [recentChats, setRecentChats] = useState([
    {
      id: "sjfo23498ru348uwdf98",
      senderId: "skjfdlfie23r24r8sd",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Hema",
      senderProfileUrl: "https://images.pexels.com/photos/12486282/pexels-photo-12486282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "online",
      lastMsg: {
        read: false,
        content: "Heyyyy...:)",
        time: "now",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "53t45ertge4t",
      senderId: "firwef7y492rh",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Crotonia",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUwh7OlYSEzFENOW7tXhyl4oeknPBeQxSFXNxd9AHfsZ7c=s80-p-k-rw-no",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Hi there!",
        time: "4 days",
      },
    },
    {
      id: "345t3etr",
      senderId: "j0sf8du0w8efhj",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Axios",
      senderProfileUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVHHSss-5eSaTjCiGboKtIp-mHJgitz5hSt4ax_QlBhFg=s80-p-k-rw-no",
      lastSeen: "online",
      lastMsg: {
        read: false,
        content: "How are you?",
        time: "now",
      },
    },
    {
      id: "defrt3434t456",
      senderId: "fw90je8uyw9348ff",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Pranay",
      senderProfileUrl: "https://images.pexels.com/photos/19087202/pexels-photo-19087202/free-photo-of-elegant-woman-in-a-coat-and-beret-holding-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Heyy sexyyy...!!",
        time: "2 min",
      },
    },
    {
      id: "defrt3434t456",
      senderId: "fw90je8uyw9348ff",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Pranay",
      senderProfileUrl: "https://images.pexels.com/photos/19087202/pexels-photo-19087202/free-photo-of-elegant-woman-in-a-coat-and-beret-holding-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Heyy sexyyy...!!",
        time: "2 min",
      },
    },
    {
      id: "defrt3434t456",
      senderId: "fw90je8uyw9348ff",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Pranay",
      senderProfileUrl: "https://images.pexels.com/photos/19087202/pexels-photo-19087202/free-photo-of-elegant-woman-in-a-coat-and-beret-holding-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Heyy sexyyy...!!",
        time: "2 min",
      },
    },
    {
      id: "defrt3434t456",
      senderId: "fw90je8uyw9348ff",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Pranay",
      senderProfileUrl: "https://images.pexels.com/photos/19087202/pexels-photo-19087202/free-photo-of-elegant-woman-in-a-coat-and-beret-holding-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Heyy sexyyy...!!",
        time: "2 min",
      },
    },
    {
      id: "defrt3434t456",
      senderId: "fw90je8uyw9348ff",
      receiverId: "skjf5tyertere24r8sd",
      senderName: "Pranay",
      senderProfileUrl: "https://images.pexels.com/photos/19087202/pexels-photo-19087202/free-photo-of-elegant-woman-in-a-coat-and-beret-holding-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastSeen: "offline",
      lastMsg: {
        read: true,
        content: "Heyy sexyyy...!!",
        time: "2 min",
      },
    },

  ]);
  return (
    <div className="chatBox">
      <div className="header">
        <span>Chats</span>
      </div>
      <div className='chats'>
        {recentChats.map((chat)=>(
          <div className='chat'>
            <div className='left'><img src={chat.senderProfileUrl}/></div>
            <div className='center'>
              <h1>{chat.senderName}</h1>
              <span>{chat.lastMsg.content}</span>
            </div>
            <div className='right'>
              {(chat.lastMsg.read == true) && (
                <div className='time'>{chat.lastMsg.time}</div>
              ) ||
              (
                <div className='dot'></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}