import React from "react";

import * as S from "./style";

const Dashboard = () => 
<>
    <S.Title>Explore Github Repositories</S.Title>
    <S.Form >
        <input type="text" placeholder="Search repository"/>
        <button type="submit">Search</button>
    </S.Form>
</>

export default Dashboard;