import SubjectList from "./SubjectList";

export default function ArtListItem ({artist, src, title, subjects}) {
  
  return (
    <li>
      <div className="frame">
        <img
          src={"https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"}
        />
      </div>
      {/* TODO: replace */}
      <h3>{"Some title"}</h3>
      <p>Artist: {"Some Artist"}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {/* TODO: replace */}
        <SubjectList subjects={["subject1", "subject2"]}/>
      </ul>
    </li>
  )
}