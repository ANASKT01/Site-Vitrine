/* Fonction pour mettre a jour le chat */
function updateChat() 
{
    /* Récupère les messages du chat via une requête JSON */
    $.getJSON("htbin/chatget.py", function (messages) 
    {
        const chatMessages = $("#chat-messages");
        chatMessages.empty();// Vide l'element des messages precedents
         /* Parcourt chaque message recu et les ajoute a l'element des messages du chat */
        messages.forEach(function (message) 
        {
            chatMessages.append(`${message.user} (${message.date} ${message.time} ${message.msg}`);
        });
    });
  }
  
  $("#chat-form").on("submit", function (event) 
  {
    event.preventDefault();// Empeche le comportement par defaut de la soumission du formulaire
  
    const message = $("#chat-input").val();// Recupere la valeur du champ de saisie du chat
  /* Envoie le message via une requete POST et traite la reponse */
    $.post("htbin/chatsend.py", { msg: message }, function (response) 
    {
        if (response.num === 0) 
        {
            $("#chat-error-message").text("");
            updateChat();// Met a jour le chat avec le nouveau message

        } else 
        {
            $("#chat-error-message").text(response.msg);
        }
    }, "json");
  });
  
  updateChat();

  
    