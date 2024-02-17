import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif
    }

    :root {
        font-size: 62.5%;
    }

    main {
        padding: 6rem 1rem;
    }
    
`;

export default GLobalStyle;
