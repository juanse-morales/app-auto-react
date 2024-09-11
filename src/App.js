import "./App.css";
import Footer from "./components/footer";
import IndexAutos from "./components/IndexAutos";

function App() {
  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <div class="container">
          <h3 class="my-3" id="titulo">
            Autos
          </h3>

          <a href="nuevo.html" class="btn btn-success">
            Agregar
          </a>

          <IndexAutos />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
