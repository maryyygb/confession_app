/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react'
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function Agreement() {
    
    let name = "JEFF";
    name = name.toLowerCase();

    const [access, setAccess] = useState(false);

    const [agree, isAgree] = useState({
                                term0: false, 
                                term1: false, 
                                term2: false});

    // FUNCTIONS
    const conditions = ["I will read each message carefully and completely, knowing it was written with true sincerity and courage.",
                        "I will respond with absolute kindness and honesty, no matter what my final answer may be.", 
                        "I understand completely that this is a deeply private space meant strictly between the two of us."
    ];

    const handleConditions = (i) => {

        const key = `term${i}`
        isAgree(p => ({...p, [key]: !p[key]}))
    }

    
    
    useEffect(() => {

        const allChecked = Object.values(agree).every(val => val === true);

        setAccess(allChecked)

                console.log("Updated Agreement State: ", agree);

            }, [agree])

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
    <div className="container ag_con">
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
        <div className="card_ag">
            <div className="deco_ag">
                <p>✦</p>
                <p>✦</p>
            </div>
            <h1 className="agreement_title">a few things first,</h1> 
            <p className="userName">{name}</p>
            <p className="ag_reminder_one">what you're about to read is real.</p>
            <p className="ag_reminder_two">please agree before continuing.</p>

            <ul className="terms">
                {conditions.map((condition, i) => {
                    const isTermAgreed = agree[`term${i}`]

                    return (
                       <li 
                       className={`term ${isTermAgreed ? 'agreed' : 'not_agreed'}`}
 
                       onClick={() => handleConditions(i)} 
                       key={i}>
                    <p className="checkbox">
                        {isTermAgreed ? (<VscHeartFilled className='heart_i'/>) : (<VscHeart className='heart_i'/>) }
                    
                    </p>
                    <p className='conditions'>{condition}</p>
                </li> 
                    )})
                }
                
            </ul>

            <button
                    className={`verify_btn_ag ${access ? 'verified' : 'not_verified'}`}
                    disabled={!access}
                    onClick={just}
                >
                    {access ? "i agree — show me →" : "you must agree to continue"}
                </button>
        </div>
    </div>
  )
}

export default Agreement