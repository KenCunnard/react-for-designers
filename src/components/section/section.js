import React from 'react';
import styled from 'styled-components';
import Wave from '../wave/wave';

const SectionGroup = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    background-image: url(${props => props.image});
    background-size: cover;
    height: 720px;

    @media (max-width: 720px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    margin: 0 auto;
    align-self: end;
    width: 128px;
`

const SectionTitleGroup = styled.div`
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    margin: 0;
    color: #fff;
    font-size: 60px;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: #fff;
`

const WaveTop = styled.div`
    position: absolute;
    top: -6px;
    width: 100%;
    transform: rotate(180deg);
`;

const WaveBottom = styled.div`
    position: absolute;
    bottom: -6px;
    width: 100%;
`;

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop>
            <Wave />
        </WaveTop>
        <SectionLogo src={props.logo}></SectionLogo>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom>
            <Wave />
        </WaveBottom>
    </SectionGroup>
)

export default Section;