var Email = {
  url: "https://xrom.webd.pro/mailer/mail.php"
}

Email.send = function(data) {  
  var req = new XMLHttpRequest()
  req.onreadystatechange = function () {  }
  req.open("POST", this.url,  true)

  req.onreadystatechange = function (aEvt) {
    /*if (req.readyState == 4) {
      if(req.status == 200)
        console.log('Email: ' + req.responseText);
      else
        console.log("Email: Błąd podczas ładowania strony")
    }*/
  };

  req.send(JSON.stringify(data));
}