export default function FavourtieSlipsList({favourties}) {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favourties.map((e, index)=>{
                    return (<li key={index}>{e}</li>)
                })}
            </ul>
        </section>
    )
}
