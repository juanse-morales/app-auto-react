const NuevoAuto = () => {
  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="container">
          <h3 class="my-3">Nuevo auto</h3>

          <form action="#" class="row g-3" method="post" autocomplete="off">
            <div class="col-md-8">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
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
                id="marca"
                name="marca"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="pais" class="form-label">
                País
              </label>
              <select class="form-select" id="pais" name="pais" required>
                <option value="">Seleccionar</option>
              </select>
            </div>

            <div class="col-12">
              <a href="index.html" class="btn btn-secondary">
                Regresar
              </a>
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
