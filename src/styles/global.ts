import { createGlobalStyle } from "styled-components";

import githubLogo from "../assets/images/github.svg";
export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing:border-box;
    }

    body {
        background: #F0F0F5 url(${githubLogo}) no-repeat 70% top;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
`;