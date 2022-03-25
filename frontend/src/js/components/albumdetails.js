const contentDiv = document.getElementById("app");
import requestHandler from "../../requestHandler";
import { ALBUM_CONTROLLER } from "../constants";
import { ARTIST_CONTROLLER } from "../constants";
import populateSelect from "./populate-select";

export default{
    GetAlbum,
}

function GetAlbum(id){
    console.log('test',id);
    requestHandler.allRequest(ALBUM_CONTROLLER + id, Process);
    
    // fetch(AlbumAPIURL + id)//need to reference ALBUM_CONTROLLER after we pushed SONG/REVIEW
    // .then(response => response.json())
    // .then(data => process(data))
    // .catch(err => console.log(err))   
}

function Edit(album){
    console.log("works");
    contentDiv.innerHTML = `

    <h2>Album Detail </h2>
    <div id="artist-container">
    <input type="hidden" value="${album.id}" id="EditId" />
    <select id="edit-select">
    </select>

    <section class="form">
        <input id="EditTitle" placeholder="Title" value="${album.title}" />
        <input value="${album.image}" placeholder="ImageUrl" id="EditImage" />
        <input id="EditRecordLabel" placeholder="Record Label" value="${album.recordLabel}"/>
        <button id="${album.id}" class="UpdateButton" >Update</button>
    </section>
    </div">
    `;
    let select = document.getElementById('edit-select');
    populateSelect.PopulateArtists(select);

    let UpdateButton = document.getElementsByClassName("UpdateButton")[0];

    UpdateButton.addEventListener('click', function(){

       let EditAlbum = {
         Id: document.getElementById("EditId").value,
         Image: document.getElementById("EditImage").value,
         ArtistId: document.getElementById("EditArtistId").value,
         Title: document.getElementById("EditTitle").value,
         RecordLabel: document.getElementById("EditRecordLabel").value
       }

       requestHandler.allRequest(ALBUM_CONTROLLER, Process, "PUT", EditAlbum);

    })

  

}


// <img class="album-image" src=${album.image} />
function Process(album){
    console.log(album);
    contentDiv.innerHTML = `
        <div class="parent">
            <div class="album-cover">
                <div class="image-wrapper">
                <img class="album-image" src=${album.image} />  
                </div>
            </div>
            <div class="album-details">
                <h2>${album.artist.name}</h3>
                <h1 class="test">${album.title}</h1>
                <h3>${album.recordLabel}</h3>
                <button id=${album.id} class="editButton">Edit</button>
            </div>
            <div class="album-songs">
                <h3>Tracks</h3>
                <ul class="song-list">  
                    ${album.songs.map(song => {
                        return `
                            <li>${song.title}</li>
                        `
                    })}
                </ul>
            </div>
            <div class="album-reviews">
                <h3>Reviews</h3>
                ${album.reviews.map(review => {
                    return `
                        <div class="review">
                            <h2> ${review.reviewerName}</h2>
                            <p>${review.content}</p> 
                        </div>
                    `;
                })}
            </div>        
        </div>
        
    `;
    addEventListeners();
}

function addEventListeners(){
    let editButton = document.getElementsByClassName('editButton')[0];
    editButton.addEventListener('click', function(){
        requestHandler.allRequest(ALBUM_CONTROLLER + this.id, data => {
            Edit(data);
            
        })
    });
}