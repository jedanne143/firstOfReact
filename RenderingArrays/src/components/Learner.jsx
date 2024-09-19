import React from 'react'
import Score from './Score'

function Learner({name, bio, scores}) {
  return (
    <div className="learnerInfo">
        <h2 className="learnerName">{name}</h2>
        <p>{bio}</p>
        <h4>Records:</h4>
        <ul className="scoreContainer">
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
        </ul>
    </div>
  )
}

export default Learner