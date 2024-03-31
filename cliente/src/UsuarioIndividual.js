import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";


function UsuarioIndividual({ usuario }) {

  const navegar = useNavigate();
  
  //Para animaciones
  useEffect(() => {
    AOS.init({ });
  }, []);



  //funcion para borrar usuario
  function borrarusuario(idusuario) {
    axios.post("/api/usuario/borrarusuario", {idusuario:idusuario}).then((res) => {
      console.log(res.data);
      Swal.fire('Felididades', 'El usuario se borro con éxito')
      navegar(0)
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3" data-aos="flip-right">
          <ul className="list-group">
            <li className="list-group-item">ID: {usuario.idusuario}</li>
            <li className="list-group-item">Nombre: {usuario.nombre}</li>
            <li className="list-group-item">Email: {usuario.email}</li>
            <li className="list-group-item">Teléfono: {usuario.telefono}</li>
          </ul>
          <Link to={`/editarusuario/${usuario.idusuario}`}>
            <li className="btn btn-success mt-3">Editar</li>
          </Link>
          &nbsp;
          <button className="btn btn-danger mt-3" onClick={()=> borrarusuario(usuario.idusuario)}>Borrar</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
