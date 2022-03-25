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
        <section class="artistIndex">
            

            <div>
                <section class="addArtistSign">
                  
               
                    <div class="addArtist">
                        <img id="AddArtistBtn" src="https://th.bing.com/th/id/R.4322fbefdf38880b4deaa6194d2cf766?rik=Ur7CikGkX7MuSA&riu=http%3a%2f%2fwww.langlo.no%2fsite%2ficons%2flanglo-symboler-21.png&ehk=xEHgkecbFrZGB80ai4k35nN7zcJcqDrQBkkh94zaLZI%3d&risl=&pid=ImgRaw&r=0"> 
                    </div>
                    <p>Add an Artist</p>
                              
                </section>
                ${artists.map(artist =>{
                    return `
                        <section id="${artist.id}" class="singleArtist">

                            <i class="fa-solid fa-xmark deleteArtistBtn"></i>
                            
                            <div class="artistItem">
                                <div>
                                    <img src="${artist.heroImage}">
                                </div>
                                <li>${artist.name}</li>
                            </div>
                            
                            
                        </section>
                    `;
                }).join('')}
            </div>
        </section>
    `;
    SetupEventListeners();
}

/* <button class="deleteArtistBtn">Delete Artist</button> */
/* <button id="AddArtistBtn">Add an Artist</button> */

function SetupEventListeners(){
    let artists = document.getElementsByClassName('singleArtist');
    



    Array.from(artists).forEach(artist => {
        let artistItem = artist.getElementsByClassName('artistItem')[0];
        let deleteArtistBtn = artist.getElementsByClassName('deleteArtistBtn')[0];
        let artistId = artist.id;

        artist.addEventListener('mouseover',function(){
            deleteArtistBtn.style.opacity = "1";
        });
        artist.addEventListener('mouseout',function(){
            deleteArtistBtn.style.opacity = "0";
        });

        artistItem.addEventListener('click',function(){            
            Artist.GetArtist(artistId);
            console.log(artistId);
        });

        if (deleteArtistBtn.style.opacity === 1) {
            deleteArtistBtn.addEventListener('click',function(){
                DeleteArtist(artistId);
                console.log(artistId);
            });
        }
        
    });  

    let addArtistBtn = document.getElementById('AddArtistBtn');

    addArtistBtn.addEventListener('click',function(){
        AddArtist();
    });


    
}


function AddArtist(){
    
    appDiv.innerHTML = `
        <h2>Add Artist</h2>
        <section class="form">
            <input type="text" id="artistName" placeholder="Name">
            <input type="text" id="artistGenre" placeholder="Genre">
            <input type="text" id="artistBio" placeholder="Bio">
            <input type="text" id="artistImage" placeholder="Image Url">

            <button id="saveArtistBtn" type="submit">Save</button>
        </section>
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
 

function DeleteArtist(id){
    AllRequest.allRequest(ARTIST_CONTROLLER+id,Index,"DELETE");



}
