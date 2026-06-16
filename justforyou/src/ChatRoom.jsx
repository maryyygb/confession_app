import { useRef, useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChatRoom = () => {

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
      duration: 2,
      ease: 'power1'
    })

    tl.from('.msg_container', {
      opacity: 0,
      duration: 1,
      y: 300,
      ease: 'power1'
    })

    tl.from('.input_message', {
      opacity: 0,
      duration: 1,
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
          <ul className="msg_container">
            {
              m.map((m, i) => {
                if(m.id == 1) {
                  return <li className="his_msg" key={i}>{m.message}</li>
                } else {
                  return <li className="her_msg" key={i}>{m.message}</li>
                }
              })
            }
          </ul>
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