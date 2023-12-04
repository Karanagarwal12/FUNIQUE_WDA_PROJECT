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
      "id": "1",
      "senderId": "user123",
      "receiverId": "skjf5tyertere24r8sd",
      "senderName": "Alice",
      "senderProfileUrl": "https://imgs.search.brave.com/YuURFlMn0gTr-E7cpdpEyBrycdj6Q0ZzgF2bKZoKDBY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw",
      "lastSeen": "online",
      "lastMsg": {
        "read": false,
        "content": "Hey!",
        "time": "2 days"
      }
    },    
    {
      "id": "2",
      "senderId": "user456",
      "receiverId": "skjf5tyertere24r8sd",
      "senderName": "Bob",
      "senderProfileUrl": "https://imgs.search.brave.com/jTC1M7a_RYoLyZCEj4Tk5Wi9bQAaa2I1MdIW-pp4nlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlYzdkYWQy/ZTZmNjI5NWE5ZTJh/MjNkZC81ZWRmYTdj/NjYwNGM3N2IxYjRi/ZDY1OGFfcHJvZmls/ZXBob3RvNS5qcGVn",
      "lastSeen": "offline",
      "lastMsg": {
        "read": true,
        "content": "What's up?",
        "time": "1 day"
      }
    },    
    {
      "id": "3",
      "senderId": "user789",
      "receiverId": "skjf5tyertere24r8sd",
      "senderName": "Charlie",
      "senderProfileUrl": "https://imgs.search.brave.com/jLTwrBSRPcoyhBJs1uPbMl500isS1N2O0JlI3BLUQoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc",
      "lastSeen": "online",
      "lastMsg": {
        "read": false,
        "content": "Morning!",
        "time": "4 hrs"
      }
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
      "id": "4",
      "senderId": "user123",
      "receiverId": "skjf5tyertere24r8sd",
      "senderName": "Alice",
      "senderProfileUrl": "https://imgs.search.brave.com/Qmrhq1scPCBh5weOkzTb-HQzEo3L8zp3_9ze3bOlYkE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9leHBl/cnRwaG90b2dyYXBo/eS5iLWNkbi5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDgvcHJvZmlsZS1w/aG90b3MtMi5qcGc",
      "lastSeen": "offline",
      "lastMsg": {
        "read": true,
        "content": "How are you?",
        "time": "3 days"
      }
    },    
    
  ]);
  return (
    <div className="chatBox">
      <div className="header">
        <span>Chats</span>
      </div>
      <div className='chats'>
        {recentChats.map((chat,id)=>(
          <div className='chat' key={id}>
            <div className='left'><img src={chat.senderProfileUrl}/></div>
            <div className={chat.lastMsg.read && `center dim` || `center`}>
              <h1>{chat.senderName}</h1>
              <span>{chat.lastMsg.content}</span>
            </div>
            <div className='right'>
              {chat.lastMsg.read && (
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