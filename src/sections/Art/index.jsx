import { useEffect, useState } from 'react'
import ArtList from './components/ArtList'

export default function ArtsSection() {
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/art')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setArt(data)
            })
    }, [])

    return (
        <section>
            <h2>Arts Section</h2>
            <div className='scroll-container'>
                <ArtList artworks={art} />
            </div>
        </section>
    )
}
