import ArtListItem from "./ArtListItem";
import { useState, useEffect } from "react";

export default function ArtList()
{
  const [imageList, setImageList] = useState([])
  useEffect(() =>
  {
    fetch("https://boolean-api-server.fly.dev/art")
    .then((response) => response.json())
    .then((data) => {setImageList(data)})},
  [])

    return (
        <>
        <ul className="art-list">
          {imageList.map((image, index) => (
            <ArtListItem key={index} image={image} index={index} />
          ))}
        </ul>
        </>
    )
}