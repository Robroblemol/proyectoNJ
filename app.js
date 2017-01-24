var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express
var bodyParser = require("body-parser");

//se agrega path virtualprefijo a los archivos estaticos
app.use("/estatico",express.static('public')); //uso de middlewares
app.use(bodyParser.json());//para peticiones appllication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

app.set("view engine","jade");

app.get("/",function(req,res) {
  res.render ("index");
});

app.get("/login",function(req,res) {
  res.render ("login");
});

app.post("/users",function (req,res) {
  console.log ("Contraseña: "+req.body.password);//solicitamos lo paramenteor
  console.log ("Email: "+req.body.email);
  res.send("se recibio los datos");
});


app.listen(8080);// escuchamos peticiones
