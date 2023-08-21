const SubjectList = ({ subjects }) => {
	return (
		<>
			<h4>Artistic Subjects:</h4>
			<ul>
				{subjects.map(subject => (
					<li key={subject}>{subject}</li>
				))}
			</ul>
		</>
	)
}

export default SubjectList