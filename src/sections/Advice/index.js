import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState()

  useEffect(() => {
    // if (!art) return;
    // console.log("sending fetch request", art)
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice)
      })
  }, [])

  const handleMoreAdvice = async () => {
      console.log("clicked for another adviceIdea")
    // //fetch it again? Didn't work to put in in another usestate
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      setAdvice(data.slip.advice)
      console.log("maybe a new adviceIdea", data.slip.advice)
    })
}
return (
  <section>
    <h2>Advice Section</h2>
    <section className="adivce-slip">
      <p>{advice}</p>
      <button onClick={handleMoreAdvice}>Get More Advice</button>
      <button>Save to Favourties</button>
    </section>

    <section className="favourtite-slips-list"></section>
  </section>
)
}

export default AdviceSection
