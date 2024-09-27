export default function FavouriteSlipsList({ favouriteSlips }) {
  let index = 0;

  return (
    <ol style={{ listStyleType: "" }} className="">
      {favouriteSlips.map((slip) => (
        <li key={index++}>
          <p>{slip}</p>
        </li>
      ))}
    </ol>
  );
}
