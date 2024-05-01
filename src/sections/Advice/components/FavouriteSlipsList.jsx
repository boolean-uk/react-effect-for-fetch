export default function FavourtieSlipsList({favourites}) {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favourites.map((e, index)=>{
                    return (<li key={index}>{e}</li>)
                })}
            </ul>
        </section>
    )
}
