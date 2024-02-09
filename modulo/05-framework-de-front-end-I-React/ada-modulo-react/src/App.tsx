import "./App.scss";
import CaixaRestaurante from "./components/CaixaRestaurante";

function App() {
  const restauranteDonaFlorinda = {
    nome: "Nonna's Trattoria",
    descricao:
      "Um refúgio italiano onde a família se reúne para saborear pratos caseiros.",
    avaliacao: 4.3,
    categoria: "Italiana",
    tempoEntrega: 40,
    valorEntrega: 6,
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div className="shopping-cart">
              carrinho de compras
              <span className="badge">2</span>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Restaurantes</h2>
          <ul className="grid" role="list">
            <CaixaRestaurante restaurante={restauranteDonaFlorinda} />
          </ul>
        </section>
        <section>
          <h2>Itens do Restaurante XYZ</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            <li>
              <h3>Nome do item</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                ipsa.
              </p>
              <div className="counter">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
