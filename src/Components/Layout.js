import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import ContentContainer from './ContentContainer';
import Footer from './Footer';

const Container = styled.div`
    width: 680px;
    margin: 0 auto;
`

export default ({children}) => {
    return(
        <>
        <GlobalStyles/>
        <Container>
            <Header/>
            <ContentContainer>
                {children}
            </ContentContainer>
            <Footer/>
        </Container>
        </>
    )
}