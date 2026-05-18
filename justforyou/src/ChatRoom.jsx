import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChatRoom = () => {

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.fromTo('.chatroom_box', {
      y: 550,
      duration: 1.5, 
      opacity: 0,
      ease: 'power1.inOut'
    },
    {
      y: 10,
      opacity: 1,
      duration: 1.5,
      ease: 'power1.inOut',
    })

    tl.fromTo('.me', {
      opacity: 0,
      ease: 'power1.inOut',
      duration: 1.5,
      delay: 1,
    },
    {
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1.5,
    })

    tl.fromTo('.my_status', {
      opacity: 0,
      ease: 'power1.inOut',
      duration: .5,
    },
    {
      opacity: 1,
      duration: .5,
    })

    tl.fromTo('.input_message', {
      opacity: 0,
      ease: 'back.inOut',
      duration: .5
    }, {
      opacity: 1,
      duration: .5
    })

  }, [])
  


  const [message, setMessage] = useState(null);

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

        <footer className="input_message">
          <input className="chat_input" placeholder="type your message here" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button className={message ? "chat_send" : "chat_send_disabled"} type="submit">↑</button>
        </footer>
    </div>
  )
}

export default ChatRoom