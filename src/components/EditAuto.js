import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pais from "./Paises.json";
import { useParams } from "react-router-dom";

const EditAuto = () => {
  const params = useParams();

  const [auto, setAuto] = useState({
    name: "",
    modelo: "",
    marca: "",
    pais: "",
  });

  const fetchData = () => {
    return axios
      .get("http://localhost:8000/api/autos/" + params.id)
      .then((response) => setAuto(response.data.auto));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [post, setPost] = useState({
    id: "",
    name: "",
    modelo: "",
    marca: "",
    pais: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    axios
      .put("http://localhost:8000/api/autos/" + id, post)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="container">
          <h3 class="my-3">Editar auto</h3>

          <form class="row g-3" autocomplete="off" onSubmit={handleSubmit}>
            <div class="col-md-8">
              <label for="id" class="form-label">
                ID
              </label>
              <input
                type="text"
                class="form-control"
                value={auto.id}
                id="id"
                name="id"
                required
                autofocus
                disabled
              />
            </div>

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
                    <option value={paisObj.shortName}>
                      {paisObj.shortName}
                    </option>
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

export default EditAuto;
