import * as S from "./styles";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ children, ...props }: Props) => {
  return <S.Container {...props}>{children}</S.Container>;
};
