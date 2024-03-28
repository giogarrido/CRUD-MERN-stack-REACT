import React, {useEffect, useState} from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import axios from 'axios';
function ListaUsuarios() {
  
  const [datausuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    axios.get('/api/usuario/obtenerusuarios').then((res) => {
      console.log(res.data);
      setDataUsuarios(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  //Mapear lista de usuarios en objeto usuario
  const listaUsuarios = datausuarios.map(usuario => {
    return <UsuarioIndividual usuario={usuario}/>
  });




  return ( 
    <div>
      <h1>Lista de Usuarios</h1>
      {listaUsuarios}
    </div>
  );
}

export default ListaUsuarios;