import React from 'react'

function Agreement() {

    const name = "JEFF";
  return (
    <div className="container">
        <div className="card_ag">
            <div className="deco_ag">✦</div>
            <h1 className="agreement_title">a few things first,</h1> 
            <p className="userName">{name}</p>
            <p className="ag_reminder">what you're about to read is real.</p>
            <p className="ag_reminder">please agree before continuing.</p>

            <div className="terms">
                <div className="term_1">
                    <p className="one">I will read each message carefully and completely</p>
                </div>
                <div className="term_2">
                    <p className="two">I understand this was written with sincerity and courage</p>
                </div>
                <div className="term_3">
                    <p className="three">I will respond with kindness and honesty, whatever my answer may be.</p>
                </div>
                <div className="term_4">
                    <p className="four">I understand that this is a private thing between me and the person behind this confession.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agreement