/*
 * -------------------------EJERCICIO LOGIN-------------------
 * index
        -formulario
        -submit del -formulario
        -el evento submit lo capturo desde javascript
        -usuario por defecto : coco,
        -password : 1234,
        -log in,
        /debo crear un css y html para crear el login, de ahi
        debo crearle funciones o funcionabilidad osea, que se pueda 
        interactuar, ingresando un nombre y contraseña del login y creo 
        que debe guardarlo en alguna informacion.
        -Como hacer que aparezca un mensaje en la pagina, que indique
        si el usuario o el password son correctos o no.
        - evaluar si los valores del login son correctos con el form
 ----------------------------------------------------------------------------------
        PARTE 1
        -Como evaluar el usuario y el password.               
 ----------------------------------------------------------------------------------
        PARTE 2
        - idea de como mostrar la pagina principal cuando el login es correcto
          -le puedo dar un id al index.html, para que lo pueda llamar
          desde javascript con una funcion, y me redireccione a la pagina index
          osea.
          -si se cumple las condiciones del login, osea el usuario y password son correctos
          entonces al hacer click al login me redirecciona a la pagina
          Index.
          -kiza capturar el index en una funcion, osea cuando se cumpla las condiciones debe 
-----------------------------------------------------------------------------------
                            EJERCICIO VALIDACION
        1.Pensar como evaluar el usuario y el password
        2.Buscar como redireccionar al usuario desde Javascript a otra pagina (solo si el usuario/password son correctos)
        3.Buscar como mostrar un mensaje de error en el html, que anteriormente estaba oculto (solo si el usuario/password no encajan)

        Extra
        La pagina de login debe ser responsive. Piensa en Mobile primero, y luego a pantallas más grandes.
        * <footer>    
            <a href="index.html"></a>    
            <button onclick="vincular()">Hello World</button>      
            <button onclick="forgotPassword()">Olvidaste tu contraseña</button>
            <button onclick="aqui()">Has click aquí</button>
        </footer>  
-----------------------------------------------------------------------------------
                             EJERCICIO AGREGAR / SIGN UP

        <button id="form-action" onclick=executeAction()">

        var isSigningUp = true;

        function executeAction (){
          if(isSigningUp){
            signUp();
            return;
          }else{
            login(); 
            retun;
          }
        }
        function signUp(){}
        fucntion login(){}
        -----------------------------------------------

        function changeToSignUp(){
          isSigningUp = true;
          title = "Sign Up" // pseudo codigo
          buttonText = "Sign Up" // pseudo codigo
        }
          1. Primero estoy en la pagina inicial del login.
          2. Le doy click a signup y me manda a la pagina para 
          registrame, en este caso seria la misma del login
          solo con lo valores cambiados.
          3. Al poner mis datos, debo volver a apretar o dar click a 
          sign up para que se guarde el usuario.
          4.Al guardarse debe aparecer un mensaje , de usuario ingresado
          correctamente
          5. al hacerlo por ahora la pagina debe deberia redireccionarme
          al login , o kiza darle click a boton de ir a login

        -----------------------------------------------

        function changeTo Login(){
          isSigningUp = false;
          title = "Log in" // pseudo codigo
          buttonText = "Log in" // pseudo codigo
        }
          1. Esta funcion primero debe de ingresar a la pagina por medio
          del usuario ingresado, osea esta funcion es la principal
          2. La segunda funcion es que cuando este el registrarse,
          al darle click al link de abajo esta nos debe de redireccionar
          a esta misma pagina, y luego le damos login.
          3. Para eso cuando nos resgistramos y la pagina se cambia al 
          login, estaran por defecto coco y 1234 aaaaayaaa jeje, entonces
          solo se cambia noma :D
        /* ESTAS 2 funciones deben estar o tener un boton para cada una
        osea los link de abajo deben ser un boton pero que no se vean 
        como boton.
        -----------------------------------------------
        


-----------------------------------------------------------------------------------*/
/*1. Un array para los usuarios */
const usuariosValidos = [
  { usuario: "Coco", password: "1234" },
  { usuario: "Coco2", password: "2345" },
];
console.log(usuariosValidos);

/*2. La variable para cambiar entre login y sign up */
var isSigningUp = true;

/*3. La funcion executeAction ejecuta o el login o el sign up*/
function executeAction() {
  if (isSigningUp == true) {
    signUp();
    return;
  } else {
    login();
    return;
  }
}
/*3.1 La funcion para cambiar el texto y boton login por sign up*/
function changeToSignUp() {
  isSigningUp = true;
  /*1.Cambio el titulo Login por Sign up */
  const cambiarASignUp = document.getElementById("cambiarLogin");
  cambiarASignUp.innerText = "Sign up";

  /*2.Capturo el Loggin para ocultarlo al hacer click a esta funcion */
  const capturoLoggin = document.getElementById("Loggin");

  /*3.Cambio el texto de formAction a Sign up */
  const cambioAsignup = document.getElementById("formAction");
  cambioAsignup.innerText = "SIGN UP💪"; // Cambia el texto del botón principal

  /*3.1 Aplico Css al Sign up */
  cambioAsignup.style.color = "white";
  cambioAsignup.style.fontWeight = "bold";
  cambioAsignup.style.cursor = "pointer";
  cambioAsignup.style.transform = "scale(0.95)";

  /*4.Oculto el Loggin inicial y aparezco el Login del formAction */
  capturoLoggin.classList.add("hiddenSignup");
  cambioAsignup.classList.remove("hiddenSignup");

  console.log("cambia a sign up");
}
/*3.2 La funcion para cambiar el texto y boton signup a login*/
function changeToLogin() {
  isSigningUp = false;
  const cambiarALogin = document.getElementById("cambiarLogin");
  cambiarALogin.innerText = "Login";

  const capturandoFormact = document.getElementById("formAction");
  capturandoFormact.innerText = "LOGIN💪"; // Cambia el texto del botón principal

  capturandoFormact.style.color = "white";
  capturandoFormact.style.fontWeight = "bold";
  capturandoFormact.style.cursor = "pointer";

  console.log("cambia a login");
}
/*4. La funcion para registrar usuario , Sign up */
function signUp() {
  const capturarUsuario = document.getElementById("usuario").value;
  const capturarPassword = document.getElementById("password").value;

  usuariosValidos.push({
    usuario: capturarUsuario,
    password: capturarPassword,
  });
  console.log("se agregó");
}

/*5. La funcion login que verifica si el usuario es correcto */
function login() {
  const password = document.getElementById("password").value;
  const usuario = document.getElementById("usuario").value;
  const errorMessage = document.getElementById("error-message");

  for (let i = 0; i < usuariosValidos.length; i++) {
    if (
      usuariosValidos[i].usuario == usuario &&
      usuariosValidos[i].password == password
    ) {
      console.log("Es correcto");
      window.location.replace("index.html");
      return;
    }
  }
  errorMessage.classList.remove("hidden");
  console.log("Es incorrecto");

  /*alert("usuario / password incorrectos");  
  console.log("Usuario capturado : " + usuario.type);*/
}
