import React from "react"

function SubjectList(props) {
//console.log('subjectlist', props.list)

  return (
    <>
    <h4>Artistic Subjects:</h4>
    <ul>
    {props.list.map((subject, index) => (
      <li key={index}>{subject}</li>
    ))}
    </ul>
    </>
  )
}

export default SubjectList

