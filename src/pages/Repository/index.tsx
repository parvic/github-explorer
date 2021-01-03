import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import api from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import * as S from "./style";

interface RepositoryParams {
    repository: string;
}

interface Repository {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    html_url: string;
    title: string;
    user: {
        login: string;
    }
}

const Repository = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    const [ repository, setRepository] = useState<Repository | null>(null);
    const [ issues, setIssues ] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data)
        })

        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        })
    }, [params.repository])

    return (
        <>
            <S.Header>
                <img src={logoImg} alt="Github explorer logo"/>
                <Link to="/">
                    <FiChevronLeft />
                    Back</Link>
            </S.Header>

            { repository && (
                <S.RepositoryInfo>
                    <header>
                        <img src={ repository.owner.avatar_url } alt={ repository.owner.login} />
                        
                        <div>
                            <strong>{ repository.full_name }</strong>
                            <p>{ repository.description }</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{ repository.stargazers_count }</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{ repository.forks_count }</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{ repository.open_issues_count }</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </S.RepositoryInfo>
            )}

        <S.RepositoryIssues>
            {issues.map( (issue) => (
                <a key={issue.id} href={issue.html_url} >
                    <div>
                        <strong>{issue.title}</strong>
                        <p>{issue.user.login}</p>
                    </div>
                    <FiChevronRight />
                </a>
            ))}
        </S.RepositoryIssues>

        </>
    )

};

export default Repository;