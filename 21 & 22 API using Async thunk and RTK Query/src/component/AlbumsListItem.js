import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import {GoTrash} from 'react-icons/go';
import { useRemvoeAlbumMutation } from "../store";
import PhotosList from "./PhotosList";



function AlbumsListItem ({album}){
const [remvoeAlbum, results] = useRemvoeAlbumMutation();

const handleRemoveAlbum = ()=>{
   remvoeAlbum(album);
}

   const header = <>
      <Button className = 'mr-2' loading={results.isLoading} onClick={handleRemoveAlbum} ><GoTrash/></Button>
      {album.title}</>;

   return (
      <ExpandablePanel key={album.id} header={header}>
         <PhotosList album={album}/>
      </ExpandablePanel>
   )
}


export default AlbumsListItem;