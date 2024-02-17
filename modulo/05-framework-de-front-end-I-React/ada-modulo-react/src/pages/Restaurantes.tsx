import { Link } from "react-router-dom";
import CaixaRestaurante from "../components/CaixaRestaurante";

interface RestaurantesProps {
  restaurantes: Restaurante[];
  escolherRestaurante: (restaurante: Restaurante | null) => void;
}

function Restaurantes({ restaurantes, escolherRestaurante }: RestaurantesProps) {



  return (
    <section>
      <h2>Restaurantes</h2>
      <ul className="grid" role="list">
        {restaurantes.map((restaurante) => (
          <button
            key={restaurante.nome}
            onClick={() => escolherRestaurante(restaurante)}
          >
            <Link to={`/cardapio/${restaurante.nome}`} >
              <CaixaRestaurante restaurante={restaurante} />
            </Link>
          </button>
        ))}
      </ul>
    </section>
  );
}

export default Restaurantes;
