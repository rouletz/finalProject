//index javascript
var user= [{username:"ricky",password:"hacktiv8"},
           {username:"putra",password:"hacktiv8"},
           {username:"angga",password:"hacktiv8"},
           {username:"andre",password:"hacktiv8"}]

function login(){
 var loginUsername = document.getElementById("username").value;
            window.localStorage.setItem("nama", loginUsername); //<-to save username in local storage
 var loginPassword = document.getElementById("password").value;
 for(var i = 0; i < user.length; i++){
  if (loginUsername == user[i].username && loginPassword == user[i].password){
   window.location.replace("./main.html");
  }else{
   if(loginUsername == '' && loginPassword == ''){
    document.getElementById("warning1").innerHTML="username/password is empty";
   }else{
    document.getElementById("warning1").innerHTML="username/password invalid";
   }
  }
 }
}

function handleEnter(event){
 if(event.keyCode==13){
  login();
 }
}
