import ArtListItem from './ArtListItem'
export default function ArtList({
    artList
  }) {
    return (
        <li>
            
            {artList.map((artListItem, index) => (
                    <ArtListItem
                    artListItem={artListItem}
                    key={index}
                />
            ))}
                
            
      </li>
    );
}