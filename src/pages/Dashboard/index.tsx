import React from "react";

import * as I from "react-icons/fi";

import * as S from "./style";

const Dashboard = () => 
<>
    <S.Title>Explore Github Repositories</S.Title>
    <S.Form >
        <input type="text" placeholder="Search repository"/>
        <button type="submit">Search</button>
    </S.Form>
    <S.Repository>
        <a href="test">
            <img src="https://avatars1.githubusercontent.com/u/66752969?s=460&u=7db00b16fdc41f29241674672806700f782fcc5f&v=4" alt="Github Avatar"/>
            <div>
                <strong>parvic/proffy</strong>
                <p>Rocketseat's Discovery bootcamp project</p>
            </div>
            <I.FiChevronRight size={20} />
        </a>

        <a href="test">
            <img src="https://avatars1.githubusercontent.com/u/66752969?s=460&u=7db00b16fdc41f29241674672806700f782fcc5f&v=4" alt="Github Avatar"/>
            <div>
                <strong>parvic/proffy</strong>
                <p>Rocketseat's Discovery bootcamp project</p>
            </div>
            <I.FiChevronRight size={20} />
        </a>

        <a href="test">
            <img src="https://avatars1.githubusercontent.com/u/66752969?s=460&u=7db00b16fdc41f29241674672806700f782fcc5f&v=4" alt="Github Avatar"/>
            <div>
                <strong>parvic/proffy</strong>
                <p>Rocketseat's Discovery bootcamp project</p>
            </div>
            <I.FiChevronRight size={20} />
        </a>
    </S.Repository>
</>

export default Dashboard;