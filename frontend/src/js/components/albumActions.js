import requestHandler from "../../requestHandler";
const contentDiv = document.getElementById("app");
import { ALBUM_CONTROLLER } from "../constants";
import { ARTIST_CONTROLLER } from "../constants";

import albumdetails from "./albumdetails";

import { CoverFlow } from "./cover-flow";

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
            <div id="create-control">
                <img id="AddArtistBtn" src="https://th.bing.com/th/id/R.4322fbefdf38880b4deaa6194d2cf766?rik=Ur7CikGkX7MuSA&riu=http%3a%2f%2fwww.langlo.no%2fsite%2ficons%2flanglo-symboler-21.png&ehk=xEHgkecbFrZGB80ai4k35nN7zcJcqDrQBkkh94zaLZI%3d&risl=&pid=ImgRaw&r=0"> 
            </div>
        </div>
    `;
    addEventListeners();
}

function CreateAlbum(artists){
    console.log("works");
    contentDiv.innerHTML = `

    <h2>Create Album</h2>
    <div id="artist-container">
    <section class="form">
        <input id="CreateTitle" placeholder="Title" />

        <select>
            <option selected disabled>---SELECT ARTIST---</option>
            ${artists.map(artist=>{
                return `
                    <option value="${artist.id}">${artist.name}</option>
                `
            }).join('')}
        </select>

        <input id="CreateArtistId" placeholder="Artist Id" />
        <input id="CreateImage" placeholder="ImageUrl" />
        <input id="CreaterecordLabel" placeholder="Record Label" />

        <button id="CreateButton" class="CreateButton" >Add Album</button>
    </section>
    </div>
    
    `;
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
    
    let albumDetailControls = Array.from(document.getElementsByClassName("detail-control"));
    console.log(albumDetailControls);

     let createAlbum = document.getElementById("create-control");    

     createAlbum.addEventListener('click',()=>{
         console.log('clicked CREATE album.');
         requestHandler.allRequest(ARTIST_CONTROLLER,CreateAlbum)
        });

        albumDetailControls.forEach(detailControl => {
        console.log('iterating albumItems',detailControl);
        detailControl.addEventListener('click', function(){
                GetAlbums(detailControl.id);
            });

        console.log(detailControl,detailControl.previousElementSibling);
        let deleteButton = detailControl.previousElementSibling;
        deleteButton.addEventListener('click', function(){
            DeleteAlbum(detailControl.id);
        });
    });
}