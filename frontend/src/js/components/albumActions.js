import requestHandler from "../../requestHandler";
const contentDiv = document.getElementById("app");
import { ALBUM_CONTROLLER } from "../constants";
import { ARTIST_CONTROLLER } from "../constants";

import albumdetails from "./albumdetails";

import { CoverFlow } from "./cover-flow";

import populateSelect from "./populate-select";

export default{
    GetAlbums
}

function GetAlbums(){

    requestHandler.allRequest(ALBUM_CONTROLLER, Process);

}

function DeleteAlbum(id){
    requestHandler.allRequest(ALBUM_CONTROLLER + id, Process, "DELETE");

}

function Process(albums){

    contentDiv.innerHTML = `
        <div class="flow-container">
        

            <cover-flow>
            
                ${albums.map(album => {
                    return `
                        <div class="album" data-cover=${album.image}>
                            <div class="album-target" >
                            </div>
                            
                            <div class="delete-control">
                                <img src="./static/delete-icon.svg" />
                            </div>
                            <div class="detail-control" id=${album.id} ">
                                <div>${album.artist.name}</div>
                                <div>${album.title}</div>
                            </div>
                        </div> 
                `;
                }).join('')}    
                
            </cover-flow>
            <button id="create-control"> + </button>  
            
        </div>
    `;
    addEventListeners();
}

function CreateAlbum(){

    contentDiv.innerHTML = `

    <h2>Create Album</h2>
    <div id="artist-container">
    <section class="form">
        <input id="CreateTitle" placeholder="Title" />

        

        <input id="CreateArtistId" placeholder="Artist Id" />
        <input id="CreateImage" placeholder="ImageUrl" />
        <input id="CreaterecordLabel" placeholder="Record Label" />

        <button id="CreateButton" class="CreateButton" >Add Album</button>
        </section>
        <select id="create-select">
            <option selected disabled>---SELECT ARTIST---</option>
        </select>
    </div>
    
    `;
    let select = document.getElementById('create-select');
    populateSelect.PopulateArtists(select);

    let CreateButton = document.getElementsByClassName("CreateButton")[0];

    CreateButton.addEventListener('click', function(){

       let newAlbum = {
         Image: document.getElementById("CreateImage").value,
         ArtistId: document.getElementById("CreateArtistId").value,
         Title: document.getElementById("CreateTitle").value,
         RecordLabel: document.getElementById("CreaterecordLabel").value
       }

       requestHandler.allRequest(ALBUM_CONTROLLER, Process, "POST", newAlbum);

    })



}

function addEventListeners(){
    console.log('adding event listeners to album controls')
    let albumDetailControls = Array.from(document.getElementsByClassName("detail-control"));


     let createAlbum = document.getElementById("create-control");    

     createAlbum.addEventListener('click',()=>{

         requestHandler.allRequest(ARTIST_CONTROLLER,CreateAlbum);
        });

        albumDetailControls.forEach(detailControl => {

        detailControl.addEventListener('click', function(){
                albumdetails.GetAlbum(detailControl.id);
            });


        let deleteButton = detailControl.previousElementSibling;
        deleteButton.addEventListener('click', function(){
            DeleteAlbum(detailControl.id);
        });
    });
    console.log('event listeners added');
}