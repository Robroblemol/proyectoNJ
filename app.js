var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express

//se agrega path virtualprefijo a los archivos estaticos
app.use("/estatico",express.static('public')); //uso de middlewares
app.use(express.static('assets'));

app.set("view engine","jade");

app.get("/",function(req,res) {
  res.render ("index");
});

app.get("/login",function(req,res) {
  res.render ("login");
});



app.listen(8080);// escuchamos peticiones
