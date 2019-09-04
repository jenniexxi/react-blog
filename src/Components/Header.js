import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import GithubLink from './GithubLink';

const Header = styled.header`
    width: 100%;
    overflow: hidden;
    height: 68px;
`;

const LogoWrap = styled.div`
    float: left;
`;

const GithubWrap = styled.div`
    float: right;
    margin-top: 17px
`;


export default () => {
    return (
        <Header>
            <LogoWrap>
                <Logo/>
            </LogoWrap>
            <GithubWrap>
                <GithubLink/>
            </GithubWrap>
        </Header>
    )
}