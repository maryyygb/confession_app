/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router';

function Reminder() {

    const [isVisible, setIsVisible] = useState(false);
    
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

    const [notes] = useState([
        "SO, HI! Just in case you're wondering...",
        "I've spent the last few weeks building this entire web app from scratch.",
        "I was trying to learn a new backend tech stack (MERN stack, if you're curious, haha)...",
        "And out of all the sample projects I could have chosen to build...",
        "My mind just kept drifting back to you.",
        "So, why a confession app?",
        "Maybe I wasn't thinking straight weeks ago...",
        "Or maybe, deep down, this was the only project I actually cared about finishing.",
        "And now that it's done, there's no turning back.",
        "The next screen has a button that will lead you to a chatroom.",
        "It only appears once and has a timelimit. Click it right away or else you'll need to refresh the page.",
        "So... are you ready?"
    ]);

        useEffect(() => {
            if (currentNoteIndex >= notes.length) return;

            const readingTime = notes[currentNoteIndex].length > 20 ? 5500 : 3500;

            const timer = setTimeout(() => {
                setCurrentNoteIndex((prev) => prev + 1);
            }, readingTime);

            return () => clearTimeout(timer);
        }, [currentNoteIndex, notes])

        const handleEnterRoom = () => {
            console.log("Enter the conversation room.");
        }

        const renderNote = (index) => {
            const isCurrent = currentNoteIndex === index;

            return (
                <div className={`note-fade ${isCurrent ? 'visible' : 'hidden'}`}>
                    {notes[index]}
                </div>
            )
        }

  return (
    
    <div className="reminder_con">
        <div className="warning-for-phone-use">
            <h1>Please use the web version to view the actual web page. This site is currently not available to view in small screen devices. Thank you!</h1>
        </div>
        <div className="orbs rem_obs">
            <div className="orb1"></div>
            <div className="orb2"></div>
            <div className="orb3"></div>
            <div className="orb4"></div>

            <div className="orb5"></div>
            <div className="orb6"></div>
        </div>
        {/* <div className="deco_ag">
                <p>✦</p>
                <p>✦</p>
            </div> */}
            <div className="my_notes">
                <div className="show_first">
                    <h1 className=" header header1">{renderNote(0)}</h1>
                    <h1 className="header header2">{renderNote(1)}</h1>
                    <p className="m1">{renderNote(2)}</p>
                </div>

        <div className="show_sec">
            <p className="pnote1">{renderNote(3)}</p>
            <p className="pnote2">{renderNote(4)}</p>
            <p className="pnote3">{renderNote(5)}</p>
            <p className="ml">{renderNote(6)}</p>
            <p className="note5">{renderNote(7)}</p>
            <p className="note6">{renderNote(8)}</p>
            <p className="note6">{renderNote(9)}</p>
            <p className="note6">{renderNote(10)}</p>


            <Link to={`/chatroom`}>
            <button className={`enter_room note-fade ${currentNoteIndex === 11 ? 'visible' : 'hidden'} `} onClick={handleEnterRoom}>{renderNote(11)}</button>
            </Link>
        </div>
            </div>
        
    </div>
  )
}

export default Reminder