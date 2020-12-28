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

export const Repository = styled.div`
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
            margin-right: 22px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        div {
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