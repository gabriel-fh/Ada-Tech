import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    html, body {
        overflow: hidden;
        background-color: #fefbfbfe
    }

    :root {
        font-size: 62.5%;
    }

    main {
        padding: 4.9rem 0;
    }
    
`;

export default GLobalStyle;