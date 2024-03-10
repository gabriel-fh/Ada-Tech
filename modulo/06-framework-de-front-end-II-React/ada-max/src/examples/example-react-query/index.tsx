import { getProfile } from "../../services";
import { useQuery } from "@tanstack/react-query";

export const ExampleReactQuery = () => {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["chave"],
    queryFn: async () => {
      const { data } = await getProfile(1);
      return data;
    },
    retry: false,
  });

  console.log({ data, isLoading, isError, isSuccess, error });

  if (isLoading) {
    return <h1>Está Loading</h1>;
  }

  if (isError) {
    return <h1>Deu Erro</h1>;
  }

  return <div className="example">{JSON.stringify(data)}</div>;
};
