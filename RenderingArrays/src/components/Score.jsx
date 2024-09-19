import React from 'react'

function Score({date , score}) {
  return (
    <>
          <li className="score">
            Date: {date}, Score: {score}
          </li>
    </>
  )
}

export default Score