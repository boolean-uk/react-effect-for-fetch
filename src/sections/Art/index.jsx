// import { useState, useEffect } from "react"
// import ArtList from "./components/ArtList"

// function ArtsSection() {
// 	const [artPiece, setArtPiece] = useState([])

// 	useEffect(() => {
// 		fetch(`https://boolean-uk-api-server.fly.dev/art`)
// 			.then((response) => response.json())
// 			.then(setArtPiece)
// 	}, [])

// 	return (
// 		<section>
// 			<h2>Arts Section</h2>
// 			<div className='scroll-container'>
// 				<ArtList artPiece={artPiece} />
// 			</div>
// 		</section>
// 	)
// }
// useEffect(() => {
//   const getData = async () => {
//     const data = await fetch('https://boolean-uk-api-server.fly.dev/art')
//     const json = await data.json()
//     setArtists(json)
//   }
//   getData()
	// }, [])

// export default ArtsSection
import ArtList from './components/ArtList'
import { useState, useEffect } from 'react'

function ArtsSection() {

const [artPieces, setArtPieces] = useState([])

	
		useEffect(() => {
		fetch(`https://boolean-uk-api-server.fly.dev/art`)
			.then((response) => response.json())
			.then(setArtPieces)
	}, [])



  return (
    <section>
    <h2>Arts Section</h2>
    <div className="scroll-container">
      <ArtList artPieces={artPieces}/>
    </div>
  </section>
  
  )
}

export default ArtsSection