import ALBUM_CONTROLLER from "../constants"
import {Render} from "./Render"

export default{
    GetAlbums
}

function GetAlbums(){
    fetch("https://localhost:44368/api/album")//need to reference ALBUM_CONTROLLER after we pushed SONG/REVIEW
    .then(response => response.json())
    .then(data => process(data))
    .catch(err => console.log(err))   
}


function process(data){
    Render(`
        <ul>
            ${data.map(d => {
                return `
                <li>${d.title}</li>
                `
            }).join('')}
        </ul>
    `);
}