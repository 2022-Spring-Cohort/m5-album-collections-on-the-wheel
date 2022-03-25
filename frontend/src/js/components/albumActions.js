import requestHandler from "../../requestHandler";
const contentDiv = document.getElementById("app");
import { ALBUM_CONTROLLER } from "../constants";

import albumdetails from "./albumdetails";

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
        <button id="createAlbum">Add Album</button>
        <ul>
            ${albums.map(album => {
                return `
                <li id=${album.id} class="album">${album.title} <button class="deleteAlbum">Delete</button></li>
                `
            }).join('')}
        </ul>
    `;
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
    
    let albumItems = Array.from(document.getElementsByClassName("album"));
    console.log(albumItems);

     let createAlbum = document.getElementById("createAlbum");    

     createAlbum.addEventListener('click',CreateAlbum)
    
    albumItems.forEach(albumItem => {
        console.log('iterating albumItems',albumItem);
        albumItem.addEventListener('click', function(){
                albumdetails.GetAlbum(albumItem.id);
            });
        
        let deleteButton = albumItem.getElementsByClassName('deleteAlbum')[0];
        deleteButton.addEventListener('click', function(){
            DeleteAlbum(albumItem.id);
        });
        
    });
}