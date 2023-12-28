// il faut recuperer les balises 
let heures = document.querySelector('.heure');
let minutes = document.querySelector('.minute');
let secondes = document.querySelector('.seconde');

 function afficherheure(){
  // recuperons date actuelle
  let datejour = new Date();

  // creons une fonctions qui va mettre de à 1 , ... 9 lorsqu'ils sont inférieur à 10 

  let deuxchiffres = function(element){
    if(element < 10){
      return "0" + element;
    }

    else{
      return element;
    }
  }

  //recuperons l'heure 

  let heure = deuxchiffres(datejour.getHours());
  let min = deuxchiffres(datejour.getMinutes());
  let sec = deuxchiffres(datejour.getSeconds());

  heures.innerHTML = heure;
  minutes.innerHTML = min;
  secondes.innerHTML = sec;
// afficher l'heure toutes les 1000ms
  setTimeout(afficherheure , 1000);

}
// appeler la fonction pour qu'elle s'excute

afficherheure();