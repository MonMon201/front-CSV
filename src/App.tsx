import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './components/header/Header';
import { Recruits } from './components/table/Table';
import { StyledBody } from './components/body/Body';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <StyledBody>
                <Recruits />
            </StyledBody>
        </>
    );
};
