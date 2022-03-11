import React from 'react'
import { FooterContainer, FooterWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {


  return (
    <FooterContainer>
      <FooterWrap>
            <WebsiteRights>Richard Knoche © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer