import { Link } from "react-router-dom";

const IndexAutos = () => {
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
          <tr>
            <td>12345</td>
            <td>JUAN PEREZ</td>
            <td>0123456789</td>
            <td>JUANPEREZ@DOMINIO.COM</td>
            <td>RECURSOS HUMANOS</td>
            <td>
              <a href="edita.html" class="btn btn-warning btn-sm me-2">
                Editar
              </a>

              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#eliminaModal"
                data-bs-id="1"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndexAutos;
