import { useRef, useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";

const ChatRoom = () => {

  // Fetching Datas from Database
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/chats");
        console.log(res.data);
        setChats(res.data);
      } catch (error) {
        console.log("Error fetching chats", error);
      } finally {
        setLoading(false);
      }
    }

    fetchChats();
  }, [])

  const [m, setM] = useState([
                  {id: 0, message: "Hi, there!"},
                  {id: 1, message: "What's up?"}, 
                  {id: 0, message: "What are you doing?"}, 
                  {id: 0, message: "Are you free tonight?"}, 
                  {id: 0, message: "I was just asking, haha"},
                ])
  const [msg, setMsg] = useState("");

  // FOR THE MESSAGES TO SCROLL AUTOMATICALLY AT THE BOTTOM TO SHOW LATEST MESSAGES

 // 2. Create a reference for the scrollable body container
  const chatBodyRef = useRef(null);

  // 3. Automatically scroll to the bottom when messages update
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [m]); // Runs every time the 'm' array changes

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".chatroom_box", {
      y: 300,
      opacity: 0,
      duration: 1,
      ease: 'power1'
    })

    tl.from('.msg_container', {
      opacity: 0,
      duration: .5,
      y: 300,
      ease: 'power1'
    })

    tl.from('.input_message', {
      opacity: 0,
      duration: .5,
      ease: 'power1',
      y: 300
    })

  })

  // will receive the message
  // store to the container each with unique var
  // then check if it came from whom, assign ID
  // then add that to the object list

  const handleSendMsg = () => {
    // msg != "" && setMessages(m => [...m, msg])
    msg != "" && setM(m => [...m, {id: 1, message: msg}]);
    setMsg("")
  }

  return (
    <div className="chatroom_box">
      <div className="warning-for-phone-use">
            <h1>Please use the web version to view the actual web page. This site is currently not available to view in small screen devices. Thank you!</h1>
        </div>
      <div className="orbs rem_obs croom_orbs">
            <div className="orb1"></div>
            <div className="orb2"></div>
            <div className="orb3"></div>
            <div className="orb4"></div>

            <div className="orb5"></div>
            <div className="orb6"></div>
        </div>
        <nav>
          <ul className="croom_nav">
            <li className="nav-items">✦</li>
            <li className="nav-items">
              <p className="me">someone you used to call EmEm</p>
              <p className="my_status">• confused girl right here</p>
            </li>
          </ul>
        </nav>

        <div className="body" ref={chatBodyRef}>

          {loading && (
          <div className="text-center text-2xl text-[#f5f5f5] py-4">
            Loading chats...
          </div>
        )}

        {/* 4. Active, uncommented, and fully validated safe mapping array block */}
        {!loading && chats.length > 0 && (
          <ul className="msg_container flex flex-col gap-4">
            {chats.map((chat) => (
              <li 
                className={chat.point_type === 1 ? "his_msg" : "her_msg"} 
                key={chat._id}
              >
                {chat.content}
              </li>
            ))}
          </ul>
        )}

        {!loading && chats.length === 0 && (
          <div className="text-center text-[#f5f5f5]/50 italic mt-10">
            No conversation history found.
          </div>
        )}

          {/* // The test code and should be inside the ul tag */}
          {/* {
              m.map((m, i) => {
                if(m.id == 1) {
                  return <li className="his_msg" key={i}>{m.message}</li>
                } else {
                  return <li className="her_msg" key={i}>{m.message}</li>
                }
              })
            } */}

          {loading && <div className="text-center text-2xl text-[#f5f5f5] text-primary py-1">Loading chats...</div>}
          <div id="anchor"></div>
        </div>

        <footer className="input_message">
          <input className="chat_input" placeholder="type your message here" type="text" value={msg} onChange={(e) => setMsg(e.target.value)}/>
          <button className={msg != "" ? "chat_send" : "chat_send_disabled"} type="submit" onClick={() => handleSendMsg()}
            disabled={msg == ""}
            >↑</button>
        </footer>
    </div>
  )
}

export default ChatRoom