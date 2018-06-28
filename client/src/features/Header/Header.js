import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div `
    z-index: 3;
    display: flex;
    margin-top: 16px;
    flex-direction: row;
    justify-content: center;
`

const Tabulation = styled.div `
    margin-right: 5%;
`

const Header = ({ tabulations }) => {
    return (
        <MainDiv>
            { tabulations.map( tabulationName => <Tabulation>{ tabulationName }</Tabulation> )}
        </MainDiv>
    )
}

export default Header