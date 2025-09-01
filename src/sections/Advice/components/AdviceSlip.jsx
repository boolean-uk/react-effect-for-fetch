function AdviceSlip(props) {

  const { data, fetchData, setFavData } = props
//   console.log(data)
  return (
    <div>
        <h3>Some advice</h3>
        <p>{data.slip?.advice || "Loading advice..."}</p>
        <input
          id="getButton"
          type="button"
          value="New advice"
          onClick={fetchData}
        />
        {data.slip &&
        <input
          id="addButton"
          type="button"
          value="Save to favourites"
          onClick={() =>
            setFavData((prev) => [...prev, data.slip.advice])
          }
        />}
    </div>
  )
}

export default AdviceSlip