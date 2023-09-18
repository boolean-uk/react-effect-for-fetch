import React from "react"

function SubjectList(props) {

  return (
    <>
    <h4>Artisic Subjects:</h4>
    <ul>
       {props.list.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
    </ul>
    </>
  )
}

export default SubjectList