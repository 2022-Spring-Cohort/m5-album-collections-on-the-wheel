import requestHandler from "../../requestHandler";
const contentDiv = document.getElementById("app");
import { ALBUM_CONTROLLER } from "../constants";

import albumdetails from "./albumdetails";

import { CoverFlow } from "./cover-flow";

export default{
    GetAlbums
}

function GetAlbums(){
    //console.log(ALBUM_CONTROLLER);
    requestHandler.allRequest(ALBUM_CONTROLLER, Process);
    //addEventListeners();
    // fetch("https://localhost:44368/api/album")//need to reference ALBUM_CONTROLLER after we pushed SONG/REVIEW
    // .then(response => response.json())
    // .then(data => process(data))
    // .catch(err => console.log(err))   
}

function DeleteAlbum(id){
    requestHandler.allRequest(ALBUM_CONTROLLER + id, Process, "DELETE");
    //addEventListeners();
}

function Process(albums){
    //console.log(albums);
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
        </div>
    `;
            //<div data-cover="./static/add-icon.svg" id="create-control"></div>

    //<button id="create-control">Add Album</button>
    //<button class="deleteAlbum">Delete</button>
    addEventListeners();
}

function CreateAlbum(){
    console.log("works");
    contentDiv.innerHTML = `

    <h2>Create Album</h2>

    <section class="form">
        <input id="CreateTitle" placeholder="Title" />
        <input id="CreateArtistId" placeholder="Artist Id" />
        <input id="CreateImage" placeholder="ImageUrl" />
        <input id="CreaterecordLabel" placeholder="Record Label" />

        <button id="CreateButton" class="CreateButton" >Add Album</button>
    </section>
    
    `;
    let CreateButton = document.getElementById("CreateButton");

    CreateButton.addEventListener('click', function(){

       let CreateAlbum = {
         Image: document.getElementById("CreateImage").value,
         ArtistId: document.getElementById("CreateArtistId").value,
         Title: document.getElementById("CreateTitle").value,
         RecordLabel: document.getElementById("CreaterecordLabel").value
       }

       requestHandler.allRequest(ALBUM_CONTROLLER, Process, "POST", CreateAlbum);

    })



}

function addEventListeners(){
    
    let albumDetailControls = Array.from(document.getElementsByClassName("detail-control"));
    console.log(albumDetailControls);

     //let createAlbum = document.getElementById("create-control");    

     //createAlbum.addEventListener('click',CreateAlbum)
    
    albumDetailControls.forEach(detailControl => {
        console.log('iterating albumItems',detailControl);
        detailControl.firstElementChild.addEventListener('click', function(){
                albumdetails.GetAlbum(detailControl.id);
            });
        
        // let deleteButton = albumItem.getElementsByClassName('delete-control')[0];
        // deleteButton.addEventListener('click', function(){
        //     DeleteAlbum(albumItem.id);
        // });
        
    });
}