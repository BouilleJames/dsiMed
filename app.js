// fenetre pop-up

// function ouvrirPopup() {
//     window.open("https://www.example.com", "nom_de_la_fenetre", "height=400,width=400");
//   }
 

// carroussel

// Récupération des éléments HTML
// const carousel = document.querySelector('.carousel');
// const slides = carousel.querySelectorAll('.slide');
// const prevBtn = carousel.querySelector('.prev-btn');
// const nextBtn = carousel.querySelector('.next-btn');

// // Initialisation des variables
// let currentSlide = 0;
// const slideWidth = slides[0].clientWidth;

// // Fonction pour afficher le slide suivant
// function nextSlide() {
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//   carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// // Fonction pour afficher le slide précédent
// function prevSlide() {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   }
//   carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// // Ajout des écouteurs d'événements sur les boutons
// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);


document.body.onload=function(){
    nbr=8;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('image/carroussel"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}
g.onclick=function() {
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
d.onclick=function() {
    if(p<0)
        p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
     if(p==0)
        d.style.visibility="hidden";
     else
        d.style.visibility="visible";
}


