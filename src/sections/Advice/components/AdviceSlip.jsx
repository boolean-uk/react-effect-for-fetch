import React from 'react'

const AdviceSlip = ({adviceData}) => {
  return (
    <div>
        <p>{adviceData.slip.advice}</p>
    </div>
  )
}

export default AdviceSlip
