/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext} from 'react'

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

    // if(access == true) {
    //         const btn = document.getElementsByClassName(".verify_btn");

    //         btn.style.background = "rgba(99, 61, 61, 0.267)";
    //         btn.style.cursor = "pointer";
    //     }

    const just = () => {
        console.log("This one says it match the name")
    }

  return (
    <div className="container">
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

                <button
                    className={`verify_btn ${access ? 'verified' : ''}`}
                    disabled={!access}
                    onClick={just}
                >
                    continue →
                </button>

                {!access ? <p className="not_error">Type a correct name to be able to click the button.</p> : <p className="yes_error">Great! You are him!</p>}
                
            </div>
        </div>
    </div>
  )
}

export default Home