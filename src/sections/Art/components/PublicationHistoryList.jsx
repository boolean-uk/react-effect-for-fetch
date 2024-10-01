
const publicationData = []


export default function PublicationHistoryList({ list }) {
    return (
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};