interface ListaDeComprasProps {
  lista: ItemCompra[];
  estaAberto: boolean;
}

function ListaDeCompras({ lista, estaAberto }: ListaDeComprasProps) {
  const valorFinal: number = lista.reduce(
    (total, item) => total + item.quantidade * item.valor,
    0
  );

  return (
    <div className={`${estaAberto ? "" : "fecharLista"} listaDeCompras`}>
      {lista.length > 0 ? (
        <>
          <ul>
            {lista.map((item, index) => (
              <li key={index}>
                <span>{item.quantidade}x</span>
                <span>{item.item}</span>
                <span>
                  R${item.valor.toFixed(2).toString().replace(".", ",")}
                </span>
              </li>
            ))}
          </ul>
          <div className="totalLista">
            <hr />
            <span>
              Total: R${valorFinal.toFixed(2).toString().replace(".", ",")}
            </span>
          </div>
        </>
      ) : (
        <>
          <span>Sua lista de compras está vazia</span>
        </>
      )}
    </div>
  );
}

export default ListaDeCompras;
