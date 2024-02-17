import { useState } from "react";

function AvaliacaoPedidos({ avaliacao }: { avaliacao?: number | null }) {
  const [nota, setNota] = useState<number | null>(avaliacao || null);
  const avaliacoes: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      {nota ? (
        <span className="small-details">{nota}</span>
      ) : (
        <div>
          {avaliacoes.map((item) => (
            <button key={item} value={item} onClick={() => setNota(item)}>
              ⭐
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default AvaliacaoPedidos;
