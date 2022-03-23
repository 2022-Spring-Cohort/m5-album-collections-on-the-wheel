import { ARTIST_CONTROLLER } from "../constants";
import AllRequest from "../../requestHandler"
import Artist from"./ArtistDetail"
import { appDiv } from "../constants";


export function GetArtists() {
    AllRequest.allRequest(ARTIST_CONTROLLER,Index);

    // fetch(ARTIST_CONTROLLER)
    // .then(reponse => reponse.json())
    // .then(data => Index(data))
    // .catch(error => console.error(error));
}

//return all artists
function Index(artists){
    //return "<div>test</div>";
    appDiv.innerHTML = `
        <button id="AddArtistBtn">Add an Artist</button>

        <div>
            ${artists.map(artist =>{
                return `
                    <section id="${artist.id}" class="singleArtist">
                        <ul class="artistItem">
                            <li>${artist.name}</li>
                            <img src="${artist.heroImage}">
                        </ul>
                        <button class="DeleteArtistBtn">Delete Artist</button>
                        
                    </section>
                    
                `;
            }).join('')}
        </div>
    `;
    SetupEventListeners();
}

function SetupEventListeners(){
    let artists = document.getElementsByClassName('singleArtist');
    

    Array.from(artists).forEach(artist => {
        let artistItem = artist.getElementsByClassName('artistItem')[0];
        artistItem.addEventListener('click',function(){

            console.log("clicked");
            
            let artistId = artist.id;
            Artist.GetArtist(artistId);
            
            let deleteArtistBtn = artist.getElementsByClassName('DeleteArtistBtn')[0];
            deleteArtistBtn.addEventListener('click',function(){
               AllRequest.allRequest(ARTIST_CONTROLLER + artistId,Index,"DELETE");
               console.log('delete');
            });
            console.log(artistId);

        });
     
    });  

    let addArtistBtn = document.getElementById('AddArtistBtn');

    addArtistBtn.addEventListener('click',function(){
        AddArtist();
    });
    
    
}


function AddArtist(){
    
    appDiv.innerHTML = `
        
        <input type="text" id="artistName" placeholder="Name">
        <input type="text" id="artistGenre" placeholder="Genre">
        <input type="text" id="artistBio" placeholder="Bio">
        <input type="text" id="artistImage" placeholder="Image">

        <button id="saveArtistBtn" type="submit">Save</button>

    `;
   


    let saveArtistBtn = document.getElementById('saveArtistBtn');
    saveArtistBtn.addEventListener('click',function(){

        

        let artistName = document.getElementById('artistName').value;
        let artistGenre = document.getElementById('artistGenre').value;
        let artistBio = document.getElementById('artistBio').value;
        let artistImage = document.getElementById('artistImage').value;

        let newArtist = {
            Name: artistName,
            Genre: artistGenre,
            Bio: artistBio,
            HeroImage: artistImage
        }

        console.log(newArtist);

        AllRequest.allRequest(ARTIST_CONTROLLER,Index,"POST",newArtist);

    });
}
 

