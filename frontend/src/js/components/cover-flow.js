export class CoverFlow extends HTMLElement {
    index = 0;
    albums = [];

    offset = 70;
    rotation = 45;
    baseZIndex = 10;
    maxZIndex = 42;

    constructor(){
        super();
        this.style.perspective = "600px";
        this.style.height = "100%";
        this.style.width = "100%";
        this.style.marginTop = "25%";
        this.style.display = "block";
        
        
        this.albums = Array.from(this.getElementsByClassName('album'));
        for(let i = 0; i < this.albums.length; i++){
            let album = this.albums[i];
            let albumTarget = album.getElementsByClassName("album-target")[0];
            let url = album.getAttribute("data-cover");

            album.style.backgroundImage = `url(${url})`;
            album.style.backgroundSize = "100%";
            
            albumTarget.setAttribute("data-id",i);
            albumTarget.style.position = "absolute";
            albumTarget.style.top = 0;
            albumTarget.style.left = 0;
            albumTarget.style.width = "100%";
            albumTarget.style.height = "100%";

            album.style.transformStyle = 'preserve-3d';
            album.style.transition = "all 300ms ease-in";
            album.style.position = "absolute";
            album.style.top = "50%";
            album.style.left = "50%";
            album.style.width = "20vw";
            album.style.height = "20vw";
            album.style.marginLeft = "-90px";
            album.style.marginTop = "-90px";
            
            // this.addEventListener('click', ()=>{
            //     albumTarget.click();
            // });

            albumTarget.addEventListener('click', this.flowToTarget.bind(this),false);
            this.index = Math.floor( this.albums.length / 2 );
        }
        document.addEventListener('keydown', this.keyDown.bind(this), false);
        this.render();
    }

    flowLeft(){
        if(this.albums.length > (this.index + 1)){
            this.index++;
            this.render();
        }
    }

    flowRight(){
        if(this.index){
            this.index--;
            this.render();
        }
    }

    flowToTarget(clickEvent){
        console.log('click');
        let indexTarget = this.index - clickEvent.target.getAttribute("data-id");
        let flow = null;
        if (indexTarget < 0)
            flow = this.flowLeft.bind(this);
        else if (indexTarget > 0)
            flow = this.flowRight.bind(this);

        let flowCount = Math.abs(indexTarget);
        for (let i = 0; i < flowCount; i++){
            flow();
        }
    }

    keyDown( event ) {
        switch( event.keyCode ) {
            case 37: this.flowRight(); break; 
            case 39: this.flowLeft(); break; 
        }
    };

    render() {
        for( var i = 0; i < this.albums.length; i++ ) {
            let album = this.albums[i];
            let index = this.index;
            let detailControl = album.getElementsByClassName('detail-control')[0];
            let deleteControl = album.getElementsByClassName('delete-control')[0];
            let albumTarget = album.getElementsByClassName('album-target')[0];
            console.log('in flow render body',detailControl,deleteControl);
            if( i < index ) {

                album.style.transform = `translateX(-${(this.offset * (index - i ))}%) rotateY(${this.rotation}deg)`;
                album.style.zIndex = this.baseZIndex + i;
                deleteControl.style.display = "none";

                //detailControl.classList.add('fade');
                detailControl.style.color = "rgba(0,0,0,0)";
                //detailControl.style.textShadow = "0 0 0 transparent";
                // detailControl.style["-webkit-test-stroke-width"] = "0px";
                // detailControl.style["-webkit-test-stroke-color"] = "transparent";
            } 
            else if( i === index ) {
                album.style.transform = "rotateY( 0deg ) translateZ( 140px )";
                album.style.zIndex = this.maxZIndex;  
                deleteControl.style.display = "initial";

                //detailControl.classList.remove('fade');
                detailControl.style.color = "rgba(0,0,0,1)";
                //detailControl.style.textShadow = "1px 20px 5px black";
                // detailControl.style["-webkit-test-stroke-width"] = "2px";
                // detailControl.style["-webkit-test-stroke-color"] = "black";
            } 
            else if( i > index ) {
                album.style.transform = `translateX(${(this.offset * (i - index ))}%) rotateY( -${this.rotation}deg)`;
                album.style.zIndex = this.baseZIndex + ( this.albums.length - i  );
                deleteControl.style.display = "none";

                //detailControl.classList.add('fade');
                detailControl.style.color = "rgba(0,0,0,0)";
                //detailControl.style.textShadow = "0 0 0 transparent";
                // detailControl.style["-webkit-test-stroke-width"] = "0px";
                // detailControl.style["-webkit-test-stroke-color"] = "transparent";
            }         
        }
        
    }
}

customElements.define('cover-flow', CoverFlow);