import { GetArtists } from "./ArtistIndex";
import albumActions from "./albumActions";
import Footer from "./Footer";



const contentDiv = document.getElementById("app");

export default {
    SetupNavBar,
    SetupEventListeners
}


function SetupNavBar(){
    return `

        <div class="header"></div>
        
        <ul>
            <li id='navArtist'>Artist</li>
            <li id='navAlbums'>Contributers</li>
        </ul>
        
    `;
}


function SetupEventListeners(){

    let navArtist = document.getElementById('navArtist');
    let navAlbums = document.getElementById('navAlbums');

    let clickMark = undefined;
    

    navAlbums.addEventListener('click', function(){
        clickMark = "artist";
        contentDiv.innerHTML = Footer.SetupFooter(); 
        if (clickMark != "album") {
            navAlbums.style.borderBottom = "2px solid black"; 
            navAlbums.style.width = "max-content";
            navArtist.style.borderBottom = "none"; 
        }   
    });
    navArtist.addEventListener('click', function(){   
        clickMark = "album";
        GetArtists();   
        if (clickMark != "artist") {
            navArtist.style.borderBottom = "2px solid black"; 
            navArtist.style.width = "max-content";
            navAlbums.style.borderBottom = "none"; 
        }    
    });

}