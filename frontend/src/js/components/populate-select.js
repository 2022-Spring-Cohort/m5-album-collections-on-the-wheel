import requestHandler from "../../requestHandler";
import { ARTIST_CONTROLLER } from "../constants";

export default {
    PopulateArtists
}

function PopulateArtists(targetSelect,selectedId = null){
    requestHandler.allRequest(ARTIST_CONTROLLER,data=>{
        data.forEach(artist=>{
            let option = document.createElement("option");
            option.value = artist.id;
            option.text = artist.name;
            if(selectedId == null){
                option.selected = selectedId;
            }
            targetSelect.appendChild(option);
        });
    });
}