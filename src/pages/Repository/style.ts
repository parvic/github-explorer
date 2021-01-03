import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    a {
        display: flex;
        align-items: center;

        font-size: 16px;
        line-height: 18px;
        font-weight: bold;
        text-decoration: none;
        color: #A8A8B3;

        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }


`;

export const RepositoryInfo = styled.section`
        margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            height: 120px;
            width: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 15px;
        }

    }

    ul {
        display: flex;
        margin-top: 30px;
        list-style: none;

        li {
            strong {
                display: block;
            }

            p {
                display: block;
            }

            & + li {
                margin-left: 80px;
            }
        }
    }

    strong {
            font-size: 36px;
            font-weight: bold;
            line-height: 42px;
            color: #3d3d4d;
        }

        p, span {
            font-size: 20px;
            font-weight: normal;
            line-height: 24px;
            color: #737380;
            margin-top: 4px;
        }
`;


export const RepositoryIssues = styled.div`
    max-width: 960px;
    margin-top: 80px;
    /* height: 112px; */

    a{
        display: flex;
        width: 100%;
        padding: 28px;
        align-items: center;

        text-decoration: none;

        background-color: #FFF;

        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px)
        }

        div {
            strong {
                font-size: 24px;
                line-height: 28px;
                color: #3d3d4d;
            }

            p {
                margin-top: 8px;
                font-size: 18px;
                line-height: 20px;
                color: #a8a8b3;
            }
        }
        
        svg {
            margin-left: auto;
            color: #c9c9d4;
        }
    }

    & + div {
        margin-top: 16px;
    }
`;

