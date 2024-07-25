 
  document.getElementById("login-form").addEventListener("login-button", function(event) {
  event.preventDefault();// Empeche le comportement par defaut de la soumission du formulaire
    
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("userpwd").value;
    // Cree un nouvel objet XMLHttpRequest pour envoyer des requetes HTTP et recevoir des reponses
    var xhttp = new XMLHttpRequest();
    // Fonction a executer lorsque l'etat de la requete change
    xhttp.onreadystatechange = function() 
    {
      
      if (this.readyState === 4 && this.status === 200) 
      {   
        document.getElementById("message").innerHTML = this.responseText;
      }
  };
    // Ouvre la connexion pour une requete POST vers "/htbin/login.py"
    xhttp.open("POST", "/htbin/login.py", true);
    // Definit le type de contenu de la requete comme "application/x-www-form-urlencoded"
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     // Envoie la requete avec les valeurs des champs "username" et "userpwd" encodees
    xhttp.send("username=" + encodeURIComponent(Username) + "&userpwd=" + encodeURIComponent(Password));
});