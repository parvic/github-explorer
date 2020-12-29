import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import { FiChevronRight } from "react-icons/fi";
import * as S from "./style";

interface Repository {
    id: number;
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard = () => {
    const [ repositories, setRepositories ] = useState<Repository[]>([]);
    const [ newRepo, setNewRepo ] = useState('');

    async function handleAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`)

        const repository = response.data

        setRepositories([...repositories, repository])
        setNewRepo('');

    }

    return (
        <>
            <S.Title>Explore Github Repositories</S.Title>

            <S.Form onSubmit={handleAddRepository}>
                <input 
                    value={ newRepo }
                    onChange={ (e) => setNewRepo(e.target.value) }
                    type="text" 
                    placeholder="Search repository"
                />
                <button type="submit">Search</button>
            </S.Form>
            
            <S.Repositories>
                {
                    repositories.map(repository => (
                        <a key={ repository.id } href={ `https://github.com/${repository.full_name}` } rel="noreferrer" target="_blank" >
                            <img src={ repository.owner.avatar_url } alt={ repository.owner.login } />
                            <div>
                                <strong>{ repository.full_name }</strong>
                                <p>{ repository.description }</p>
                            </div>
                            <FiChevronRight size={20} />
                        </a>
                    )).reverse()
                }
            </S.Repositories>
        </>
)}

export default Dashboard;