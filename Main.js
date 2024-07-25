
 // Ajoute des ecouteurs d'evenements 'mouseover' et 'mouseout' sur les elements avec la classe 'cathegorie'
 document.querySelectorAll('.cathegorie').forEach((img) => 
 {

     img.addEventListener('mouseover', (event) => 
     {
      event.target.style.transform = 'scale(1.1)';
     });
  
     img.addEventListener('mouseout', (event) => 
     {
      event.target.style.transform = 'scale(1)';
     });
 });


function validerNomUtilisateur() 
{
  const minLength = 6;

  let nomUtilisateur = document.getElementById("username").value;

  if (nomUtilisateur.length < minLength) 
  {

    console.log("Le nom d'utilisateur doit contenir au moins " + minLength + " caractères ");

  } else 
  {

    console.log("Le nom d'utilisateur est valide ");

  }

  return nomUtilisateur.length >= minLength;
}

function validerEmail() 
{

  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  let email = document.getElementById("email").value;

  if (!regex.test(email)) 
  {

    console.log("Adresse email invalide");

  } else 
  {

    console.log("Adresse email valide");

  }

  return regex.test(email);
}

function validerDate() 
{

   let dateNaissance = document.getElementById("Date").value;
   
   let date = new Date(dateNaissance);

   if (isNaN(date.getTime())) 
   {

     console.log("Date invalide. Veuillez entrer une date au format jj/mm/aaaa.");

   } else 
   {

     console.log("Votre date de naissance est : " + date.toLocaleDateString());

   }
   return !isNaN(date.getTime());
  }

  function validerMotDePasse() 
  {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    let motDePasse = document.getElementById("userpwd").value;
  
    if (!regex.test(motDePasse)) 
    {

      console.log("Mot de passe invalide");

    } else 
    {

      console.log("Mot de passe valide");

    }
  
    return regex.test(motDePasse);
  }
  // Valide le formulaire d'inscription
  function validerFormulaire(event) {
    const namevalider = validerNomUtilisateur();
    const emailvalider = validerEmail();
    const dateValide = validerDate();
    const passwordValide = validerMotDePasse();
    // Empeche la soumission du formulaire si les validations echouent
    if (!namevalider || !emailvalider || !dateValide || !passwordValide) {
      event.preventDefault();
    }
  }

 

    