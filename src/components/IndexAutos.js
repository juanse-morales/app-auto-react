import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const IndexAutos = () => {
  
  const [auto, setAuto] = useState([]);

  const fetchData = () => {
    return axios.get("https://app-auto-backend-production.up.railway.app/api/autos")
      .then((response) => setAuto(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDeleteAuto = (id, event) => {
    axios.delete("https://app-auto-backend-production.up.railway.app/api/autos/"+id)
      .then(res => {console.log(res); window.location.replace('');})
      .catch(err => console.log(err));
  };
  
  return (
    <div>
      <h3 class="my-3" id="titulo">
        Autos
      </h3>

      <Link class="btn btn-success" to="/nuevo">
        Agregar
      </Link>

      <table
        class="table table-hover table-bordered my-3"
        aria-describedby="titulo"
      >
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Modelo</th>
            <th scope="col">Marca</th>
            <th scope="col">País</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>

        <tbody>
        {auto && auto.length > 0 && auto.map((autoObj, index) => (
          <tr>
            <td> {autoObj.id} </td>
            <td> {autoObj.name} </td>
            <td> {autoObj.modelo} </td>
            <td> {autoObj.marca} </td>
            <td> {autoObj.pais} </td>
            <td>
              <Link to={'/edit/'+autoObj.id} class="btn btn-warning btn-sm me-2">
                Editar
              </Link>

              <button
                type="button"
                class="btn btn-danger btn-sm"
                onClick={(e) => onDeleteAuto(autoObj.id, e)}
              >
                Eliminar
              </button>
            </td>
          </tr>
          
        ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default IndexAutos;
