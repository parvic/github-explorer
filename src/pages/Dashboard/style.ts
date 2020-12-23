import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;

    max-width: 430px;
`;

export const Form = styled.form`
    display: flex;
    max-width: 700px;
    
    margin-top: 40px;
    
    input {
        flex: 1;
        height: 70px;
        
        border: none;
        border-radius: 5px 0 0 5px;

        padding: 0 24px;

        &::placeholder {
            color: #A8A8B3;
        }

    }

    button {
        width: 210px;
        height: 70px;

        border: none;
        border-radius: 0 5px 5px 0;

        color: #fff;
        font-weight: bold;
        font-size: 18px;

        background: #04D361;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, "#04D361")};
        }
    }
`;