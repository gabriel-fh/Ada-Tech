import { SetStateAction, useState } from "react";
import "./App.scss";
import restaurantes from "./data/restaurantsAndItems.json";
import Restaurantes from "./pages/Restaurantes";
import CardapioRestaurante from "./pages/CardapioRestaurante";
import { Route, Routes } from "react-router-dom";
import ListaDeCompras from "./components/ListaDeCompras";


function App() {
  const [restauranteSelecionado, setRestauranteSelecionado] =
    useState<Restaurante | null>(null);
  const [listaAberta, setListaAberta] = useState<boolean>(false);
  const restaurantesData: Restaurante[] = restaurantes;
  
  const listaDeCompras: ItemCompra[] = [
    { item: "Hamburguer", quantidade: 2, valor: 15.99 },
    { item: "Batata Frita", quantidade: 1, valor: 8.5 },
    { item: "Refrigerante", quantidade: 3, valor: 5 },
    { item: "Pizza", quantidade: 1, valor: 20.5 },
    { item: "Sushi", quantidade: 3, valor: 25.99 },
  ];

  const totalQuantidades:number = listaDeCompras.reduce(
    (total, item) => total + item.quantidade,
    0
  );


  const escolherRestaurante = (restaurante: SetStateAction<Restaurante | null>) => {
    setRestauranteSelecionado(restaurante)
  }
  
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
            <div
              className="shopping-cart"
              onClick={() => setListaAberta(!listaAberta)}
            >
              carrinho de compras
              <span className="badge">{totalQuantidades ?? "0"}</span>
            </div>
          </div>
        </div>
      </header>
      <ListaDeCompras lista={listaDeCompras} estaAberto={listaAberta} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Restaurantes
                restaurantes={restaurantesData}
                escolherRestaurante={escolherRestaurante}
              />
            }
          ></Route>
          <Route
            path="/cardapio/:restauranName"
            element={
              <CardapioRestaurante
                restauranteEscolhido={restauranteSelecionado}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
