/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface CardapioRestaurantePorps {
  restauranteEscolhido: Restaurante | null;
}

function CardapioRestaurante({
  restauranteEscolhido,
}: CardapioRestaurantePorps) {
  return (
    <>
      {restauranteEscolhido ? (
        <section>
          <h2>Itens do Restaurante {restauranteEscolhido.nome}</h2>
          <ul
            className="grid"
            role="list"
            style={{ "--max": "200px" } as React.CSSProperties}
          >
            {restauranteEscolhido.cardapio.map((item, index) => {
              return <li key={index}>
                <span>{item.nome}</span>
                <span>{item.descricao}</span>
                <span>{item.preco}</span>
              </li>;
            })}
          </ul>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default CardapioRestaurante;
