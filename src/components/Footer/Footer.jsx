import React from 'react'
import styled from 'styled-components'

import footerLogo from '../../assets/footer-logo.svg'
import footerArrow from '../../assets/footer-arrow.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <FooterWrapper id='footer-container'>
      <Content>
        <FooterArrow src={footerArrow} alt='footer-arrow'></FooterArrow>
        <div id='footer-text-container'>
          <Column style={{marginLeft: 0, maxWidth: '15vw'}}>
            <Logo src={footerLogo} alt='footer-logo' />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi tincidunt nibh.</div>
            <Email>info@aeglehealthpartners.com</Email>
          </Column>
          <div id='columns-wrapper'>
            <Column>
              <Title>Product</Title>
              <Option style={{ color: '#E7B65F' }}>Log in</Option>
              <Option>Simulate Aegle</Option>
              <Option>What is Aegle</Option>
              <Option>How Aegle Works</Option>
            </Column>
            <Column>
              <Title>Company</Title>
              <Option>Our Story</Option>
              <Option>Aegle Team</Option>
              <Option>Careers</Option>
              <Option>Support</Option>
              <Option style={{ color: '#E7B65F' }}>Contact Us</Option>
            </Column>
            <Column>
              <Title>General Conditions</Title>
              <Option>Privacy Policy</Option>
              <Option>Terms & Conditions</Option>
              <Option>Cookies Management</Option>
            </Column>
          </div>
        </div>
        <Separator />
        <div id='copyright-container'>
          <CopyrightText>© 2021 Aegle Health Partners</CopyrightText>
          <CopyrightText>4250 N Fairfax Dr, Ste 600, Arlington, VA 22203</CopyrightText>
        </div>
      </Content>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  display: flex;
  margin-top: 138vw;
  background-color: #0E4656;
  padding: 5.2vw 7.8vw 2.92vw
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
`;

const Separator = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 3.85vw 0 2.19vw
`;

const CopyrightText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.5);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4.95vw;
  min-width: 8.85vw;
`;

const Logo = styled.img`
  width: 93px;
  heigh: 48px;
  margin-bottom: 36px
`;

const FooterArrow = styled.img`
  width: 65px;
  heigh: 65px;
  position: absolute;
  right: -100px;
  top: -50px
`;

const Email = styled.div`
  font-weight: 600;
  line-height: 123.5%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-top: 14px
`;

const Title = styled.div`
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
`;

const Option = styled.div`
  margin: 6px 0
`;
