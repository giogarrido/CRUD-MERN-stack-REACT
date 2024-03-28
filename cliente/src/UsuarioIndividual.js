import React from "react";
function UsuarioIndividual({ usuario }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">ID: {usuario.idusuario}</li>
            <li className="list-group-item">Nombre: {usuario.nombre}</li>
            <li className="list-group-item">Email: {usuario.email}</li>
            <li className="list-group-item">Teléfono: {usuario.telefono}</li>
          </ul>
          <button className="btn btn-success mt-3">Editar</button>
          &nbsp;
          <button className="btn btn-danger mt-3">Borrar</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
