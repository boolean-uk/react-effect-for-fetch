/* eslint-disable react/jsx-key */
function ArtsSection(props) {

  const { artSection } = props

  // const imageUrls = [
  //   'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1698949391~exp=1698949991~hmac=8bcba8d5c2ecd37cbefb22556f81a5e3aa95114b9b312f650b100c67d51b2546',
  //   'https://img.freepik.com/premium-photo/christmas-winter-landscape-with-snow-drifts-3d-illustration_710973-1169.jpg?w=1800'
  // ];

  // const randomIndex = Math.floor(Math.random() * imageUrls.length);

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
                  {/* <img src={art.image_url} alt="" /> */}
                  <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1698949391~exp=1698949991~hmac=8bcba8d5c2ecd37cbefb22556f81a5e3aa95114b9b312f650b100c67d51b2546" alt="Mountain Lake" />
                  {/* <img src={imageUrls[randomIndex]} alt="Random Image" /> */}

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
