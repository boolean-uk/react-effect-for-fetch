import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"
function ArtsSection() {

  const base_url = "https://boolean-uk-api-server.fly.dev"
  const url = base_url + "/art"
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList
          data={data}
          base_url={base_url}/>
      </div>
    </section>
  )
}

export default ArtsSection
