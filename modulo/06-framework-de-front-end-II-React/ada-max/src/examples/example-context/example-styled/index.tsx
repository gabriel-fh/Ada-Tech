import * as Styles from "./styled";

export const ExampleStyled = () => {
  return (
    <div>
      <Styles.Title>
        Title Component
        <Styles.Span>Span1 </Styles.Span>
      </Styles.Title>
      <Styles.Title isBlue>
        Title Component
        <Styles.Span>Span1 </Styles.Span>
        <span className="menu">MENU</span>
      </Styles.Title>
      <Styles.SubTitle>SubTitle Component</Styles.SubTitle>
    </div>
  );
};
