import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pais from "./Paises.json";

const NuevoAuto = () => {
  /*const [pais, setPais] = useState([]);

  const fetchDataPais = () => {
    return axios
      .get(
        "https://country.io/names.json",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        }
        
      )
      .then((response) => {
        console.log("Aqui");
        
        console.log(response);
        
        setPais(response.data);
      });
  };

  useEffect(() => {
    fetchDataPais();
  }, []);*/

  

  const [post, setPost] = useState({
    name: "",
    modelo: "",
    marca: "",
    pais: "",
  });

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://app-auto-backend-production.up.railway.app/api/autos", post)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="container">
          <h3 class="my-3">Nuevo auto</h3>

          <form class="row g-3" autocomplete="off" onSubmit={handleSubmit}>
            <div class="col-md-8">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                onChange={handleInput}
                id="name"
                name="name"
                required
                autofocus
              />
            </div>

            <div class="col-md-6">
              <label for="modelo" class="form-label">
                Modelo
              </label>
              <input
                type="text"
                class="form-control"
                onChange={handleInput}
                id="modelo"
                name="modelo"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="marca" class="form-label">
                Marca
              </label>
              <input
                type="text"
                class="form-control"
                onChange={handleInput}
                id="marca"
                name="marca"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="pais" class="form-label">
                País
              </label>
              <select
                class="form-select"
                onChange={handleInput}
                id="pais"
                name="pais"
                required
              >
                {pais &&
                  pais.length > 0 &&
                  pais.map((paisObj, index) => (
                    <option value={paisObj.shortName}>{paisObj.shortName}</option>
                  ))}
              </select>
            </div>

            <div class="col-12">
              <Link to="/" class="btn btn-secondary">
                Regresar
              </Link>
              <button type="submit" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NuevoAuto;
