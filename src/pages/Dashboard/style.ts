import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;

    max-width: 430px;
`;

export const Form = styled.form<FormProps>`
    display: flex;
    max-width: 700px;
    
    margin-top: 40px;


    
    input {
        flex: 1;
        height: 70px;
        
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        ` }


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

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 120px;
    max-width: 700px;


    a {
        display: block;
        
        width: 100%;
        padding: 24px;
        align-items: center;

        background-color: #FFF;
        border-radius: 5px;

        text-decoration: none;
        display: flex;

        transition: transform 0.2s;

        &:hover {
            transform: translatex(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin: 0 22px;
            
            strong {
                font-size: 24px;
                line-height: 28px;
                font-weight: bold;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                line-height: 21px;
                font-weight: normal;
                color: #A8A8B3;

                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }
`;