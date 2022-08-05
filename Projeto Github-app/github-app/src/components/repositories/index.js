import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./style";

const Repositories = () => {
    return (
        <S.TabsStyle selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.TabListStyle>
                <S.TabStyle>Repositories</S.TabStyle>
                <S.TabStyle>Starred</S.TabStyle>
            </S.TabListStyle>

            <S.TabPanelStyle>
                <RepositoryItem 
                    name="repo 1" 
                    link="https://github.com/jfdsn/aula-bootstrap"
                    fullname= "jfdsn/aula-bootstrap"/>
            </S.TabPanelStyle>
            <S.TabPanelStyle>
                <RepositoryItem 
                    name="repo 2" 
                    link="https://github.com/jfdsn/aula-bootstrap"
                    fullname= "jfdsn/aula-bootstrap"/>
            </S.TabPanelStyle>
        </S.TabsStyle>
    )       
}

export default Repositories;