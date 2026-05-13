/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

function Reminder() {

    const [isVisible, setIsVisible] = useState(false);
    
    const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

    const [notes] = useState([
        "SO, HI!", 
        "just in case you're wondering,", 
        "i spent weeks creating this app and i hope this doesn't make you feel uncomfy", 
        "i was actually learning a tech stack which is the backend of this app (MERN STACK) and decided to practice by creating this special app.", 
        "hahahaha, i actually have no plans talaga na gumawa ng ganito kasi bakit nga ba, di ba?", 
        "hmmmm...secret! hahahaha", 
        "malalaman mo rin in...",
        "three...", 
        "two...", 
        "one...", 
        "pindutin mo agad 'yong button kasi mawawala agad 'yan, parang feelings ko lang. charizz",
        "i'm ready"
    ])

        useEffect(() => {
            if (currentNoteIndex >= notes.length) return;

            const readingTime = notes[currentNoteIndex].length > 20 ? 4500 : 2500;

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
            <p className="pnote4">{renderNote(6)}</p>
            <p className="note5">{renderNote(7)}</p>
            <p className="note6">{renderNote(8)}</p>
            <p className="note6">{renderNote(9)}</p>
            <p className="note6">{renderNote(10)}</p>


            <button className={`enter_room note-fade ${currentNoteIndex === 11 ? 'visible' : 'hidden'} `} onClick={handleEnterRoom}>{renderNote(11)}</button>
        </div>
            </div>
        
    </div>
  )
}

export default Reminder