import React from 'react'

function SubjectList({ subjects }) {
  return (
    <ul>
      {subjects.map((subject, index) => (
        <li key={index}>{subject}</li>
      ))}
    </ul>
  );
}

export default SubjectList;