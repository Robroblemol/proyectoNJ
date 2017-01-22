var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express

app.set("view engine","jade");

app.get("/",function(req,res) {
  res.render ("index");
});

app.get("/login",function(req,res) {
  res.render ("login");
});



app.listen(8080);// escuchamos peticiones
