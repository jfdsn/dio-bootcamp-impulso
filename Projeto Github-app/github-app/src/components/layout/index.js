import React from "react";
import Header from "../header";
import * as S from "./style";

const Layout = ({children}) => {
    return (
        <S.WrapperLayout>
           <Header></Header>
            {children}
        </S.WrapperLayout>
    )
}

export default Layout;