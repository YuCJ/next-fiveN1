import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 20px;
`;

function Footer() {
  return (
    <Container>
      <div className="container">
        <p className="text-center">
          <img src="https://img.shields.io/badge/made%20with-%E2%9D%A4-ff69b4.svg?style=flat-square" />{' '}
          | <img src="./static/github.svg" width="20" height="20" />{' '}
          <a href="https://github.com/neighborhood999">@neighborhood999</a>
        </p>
      </div>
    </Container>
  );
}

export default Footer;
