function notify(type,message){
    (()=>{
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2,10);
      n.setAttribute("id",id);
      n.classList.add("notification",type);
      n.innerText = message;
      document.getElementById("notification-area").appendChild(n);
      setTimeout(()=>{
        var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
        for(let i=0;i<notifications.length;i++){
          if(notifications[i].getAttribute("id") == id){
            notifications[i].remove();
            break;
          }
        }
      },5000);
    })();
  }
  
  function notifyError(){
    notify("error","Feature unavailable.");
  }

  function openDiscord(){
    window.open("https://discord.gg/FrTDJ3nwRY");
  }

  function openPrivacyPolicy(){
    window.open("https://hub.operationsrp.com/privacy");
  }

  function openTrello(){
    window.open("https://content-development.operationsrp.online/us/trello");
  }

  function openStatus(){
    window.open("https://status.operationsrp.online/us");
  }

  function openTOS(){
    window.open("https://policies.operationsrp.online/us/tos");
  }

  function openAcknowledgements(){
    window.open("https://www.operationsrp.online/us/acknowledgements");
  }
