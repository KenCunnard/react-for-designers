import React from 'react';
import styled from 'styled-components';

const FooterGroup = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 50px 0;
  background-color: #f1f3f5;
`;

const Text = styled.p`
  margin: 0 auto;
  max-width: 800px;
  font-size: 24px;
  font-weight: 600;
  color: #4b6791;
`;

const Button = styled.button`
  justify-self: center;
  padding: 16px 60px;
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: .2em;
  border: none;
  border-radius: 45px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

const LinkGroup = styled.div`
  margin: 15px auto;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;
  }

  a:hover {
    color: #000;
  }
`;

const Copyright = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 500px;
  color: #4b6791;
`;

const Footer = ({data, children}) => (
  <FooterGroup>
    <Text></Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
    </LinkGroup>
    <Copyright>{ children }</Copyright>
  </FooterGroup>
);

export default Footer;