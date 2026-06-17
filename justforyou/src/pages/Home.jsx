/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext} from 'react';
import { Link } from 'react-router';

import { useGSAP } from '@gsap/react';
import gsap from "gsap";


function Home() {

    const ALLOWED_NAMES = ["JEFF", "JEFFREY", "JEFFREY PIMENTEL", "POPOY"]
    const [userName, setUserName] = useState("")
    const [access, isAccess] = useState(false);

    // console.log(userName)
    function handleVerification(e) {
        const uName = e.target.value;
        const cleanInput = uName.toUpperCase();
        setUserName(cleanInput);

        const hasAccess = ALLOWED_NAMES.includes(cleanInput)
        isAccess(hasAccess);
        console.log(access);
    }

    const just = () => {
        console.log("This one says it match the name")
    }


    useGSAP(() => {
        gsap.fromTo(".container", {
            opacity: 0,
            ease: "power1.in",
            duration: 2,
        }, {
            opacity: 1,
            ease: "power1.out",
            duration: 2
        })
    })

  return (
    <div className="container">
        <div className="warning-for-phone-use">
            <h1>Please use the web version to view the actual web page. This site is currently not available to view in small screen devices. Thank you!</h1>
        </div>
        <div className="orbs">
            <div className="orb1"></div>
            <div className="orb2"></div>
            <div className="orb3"></div>
            <div className="orb4"></div>

            <div className="orb5"></div>
            <div className="orb6"></div>
        </div>
        <div className="card">
            <div className="deco">✦ ✦ ✦</div>
            <div className="greetings">
                <h1 className="greeting-message">before you read this...</h1>
                <p className="askingName">let me verify if you are the correct person</p>

                <input className="name_input" type="text" placeholder="type your name here" value={userName} onChange={handleVerification} />

                <Link to={`/agreement`}>
                <button
                    className={`verify_btn ${access ? 'verified' : 'not_verified'}`}
                    disabled={!access}
                    onClick={just}
                >
                    continue →
                </button>
                </Link>
                

                {!access ? <p className="not_error">Type a correct name to be able to click the button.</p> : <p className="yes_error">Great! You are him!</p>}
                
            </div>
        </div>
    </div>
  )
}

export default Home