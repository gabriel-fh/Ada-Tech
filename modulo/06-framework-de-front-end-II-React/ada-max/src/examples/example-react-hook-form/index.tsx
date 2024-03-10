import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MeuFormSchema = z
  .object({
    nome: z
      .string({ required_error: "Informe o Email meu querido" })
      .min(2, { message: "Muito pequeno" })
      .max(8, { message: "Muito grande" }),
    idade: z
      .string({ required_error: "Informe  a idade" })
      .min(2, { message: "Muito pequeno" })
      .max(8, { message: "Muito grande" }),
  })
  .refine((data) => data.nome === data.idade, {
    message: "Nome e idade precisam ser iguais",
    path: ["idade"],
  });

type MeuForm = z.infer<typeof MeuFormSchema>;

export const ExampleReactHookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MeuForm>({
    resolver: zodResolver(MeuFormSchema),
  });

  const onSubmit = (values: MeuForm) => {
    console.log("values", values);
  };

  console.log({ errors });

  return (
    <div className="example">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor="">Nome</label>
          <input type="text" {...register("nome")} />
          {errors.nome?.type && (
            <span className="red">{errors.nome?.type}</span>
          )}
        </p>
        <p>
          <label htmlFor="">Idade</label>
          <input type="text" {...register("idade")} />
          {errors.idade?.type && (
            <span className="red">{errors.idade?.type}</span>
          )}
        </p>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};
