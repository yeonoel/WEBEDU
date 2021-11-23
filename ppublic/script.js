let navbar = document.querySelector('header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
} 
window.onscroll=()=>{
    navbar.classList.remove('active');
}


// fonctionement de base de la video lorque on clique sur l'une d'entre elle.
let mainVid = document.querySelector('.main-video');

// ON RECUPERE un tableau qui contient toutes les videos
let video = document.querySelectorAll('.vid video');
console.log(video)

// on fait une boucle pour recuperer chaque video puis on ajoute l'evenement "onclick" a travaers la quel on va recuperer
// la src de la video et la transmettre a la vedeo qui s'affiche;
video.forEach((vid)=>{
    vid.onclick = ()=>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
})

// EN CLIQUANT SUR LA CROIX EN  ON SUPPRIME LA VIDEO ACTIVé
document.querySelector('#close-vid').onclick = ()=>{
    mainVid.classList.remove('active');
}
console.log('test')


