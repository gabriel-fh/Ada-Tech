import { postProfile } from "../../services";
import { useMutation } from "@tanstack/react-query";

type Args = {
  avatarId: number;
  name: string;
};

export const ExampleReactQueryMutation = () => {
  const { mutate, data, isPending, isError, error } = useMutation<
    unknown,
    unknown,
    Args
  >({
    mutationFn: (args) => postProfile(args),
  });

  const handleClick = () => {
    console.log("Click");

    mutate({ avatarId: 4556, name: "Novo User" });
  };

  console.log(error);

  if (isPending) {
    return <h1>Está Tentando criar o profile</h1>;
  }

  if (isError) {
    return <h1>Deu Erro</h1>;
  }

  return (
    <div className="example">
      <h2>Vamos Criar Um Profile Novo</h2>
      <button onClick={handleClick}>CLICA AI</button>
      {data ? <div>{JSON.stringify(data)}</div> : null}
    </div>
  );
};
