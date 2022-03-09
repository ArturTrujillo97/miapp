import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="h1">React Router V.6!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

// App.js
function Home() {
  return (
    <>
      <main>
        <h2 className="h2">Bienvenido a la prueba de evaluacion</h2>
        <p className="p">Modulo de evaluacion final.</p>
      </main>
      <nav className="nav">
        <div className="columna"><Link to="/login">Login</Link></div>
        <div className="columna"><Link to="/Register">Registrate</Link></div>
      </nav>
    </>
  );
}

function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Usuario no encontrado",
    pass: "Contraseña invalida"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" placeholder="usuario" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" placeholder="contraseña" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="text-container">
          <br/>
          <Link to="/Register">Registrate</Link>
        </div>
      </form>
    </div>
  );

  return (
    <>
    <nav className="nav">
      <div className="columna"><Link to="/">Inicio</Link></div>
    </nav>
    <div className="app">
      <div className="login-form">
        <div className="title">Iniciar sesión</div>
        {isSubmitted ? 
        <html>
          <div className="text-container">
            Bienvenido usuario nuevo
          </div>
          <div className="text-container">
            Usuario de prueba
          </div>
          <div className="text-container">
          <nav>
            <Link to="/">Salir</Link>
          </nav>
          </div>
        </html> 
        : renderForm}
      </div>
    </div>
  </>
  );
}

function Register() {
  return (
    <>
      <nav className="nav">
          <div className="columna"><Link to="/">Inicio</Link></div>
          <div className="columna"><Link to="/login">Login</Link></div>
      </nav>
      <form className="forms">
        <div className="register">
            <label for="nya">Nombre: 
              <input type="text" name="nya" id="nya" placeholder="Nombre" required/>
            </label>
              <br/>
            <label for="nya">Apellido Paterno: 
              <input type="text" name="nya" id="nya" placeholder="Apellido Paterno" required/>
            </label>
              <br/>
            <label for="nya">Apellido Materno: 
              <input type="text" name="nya" id="nya" placeholder="Apellido Materno" required/>
            </label>
              <br/>
            <label for="edad">Edad:
              <input type="number" name="edad" id="edad" placeholder="Edad" required/>
            </label>
              <br/>
            <label for="direccion">direccion:
              <input type="text" name="direccion" id="direccion" placeholder="Direccion" required/>
            </label>
              <br/>
            <label for="telefono">Telefono:
              <input type="tel" name="telefono" id="telefono" placeholder="Ejem: 123-456-7890" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
            </label>
              <br/>
            <label for="email">E-mail: 
              <input type="email" name="email" id="email" placeholder="Email@example.com" required/>
            </label>
              <br/>
              <div className="button-container">
                <input type="submit" onclick="alert('!Registro exitoso!')" value="Enviar"/>
              </div>
        </div>
      </form>
    </>
  );
}

export default App;