function ArtsSection({artSection}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
        {artSection.map((art) => {
          if (art.subject_titles && art.subject_titles.length > 0) {
            return (
              <li key={art.id}>
                <div className="frame">
                  <img src="https://i.imgur.com/n6Dc0QL.jpeg" alt="Mountain Lake" />
                  </div>
                <h3>Hunted House</h3>
                <p>{`Artist: ${art.title}`}</p>
                <h4>Artistic Subjects</h4>
                <ul>
                  {art.subject_titles.map((subjectTitle) => {
                    return (
                      <li>{subjectTitle}</li>
                    )
                  })}
                </ul>
              </li>
            )
           }
          })}


        </ul>
      </div>      
    </section>
  )
}

export default ArtsSection
