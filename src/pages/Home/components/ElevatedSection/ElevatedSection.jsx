import React from 'react'
import marketLogo from '../../../../assets/market-logo.svg'
import styled from 'styled-components'
import './ElevatedSection.scss'
import Button from '../../../../components/Button/Button'

const ElevatedSection = ({ title, text, img, isBeta, reverseOrientation }) => {
  return (
    <div className='elevated-section-container' style={reverseOrientation ? { flexDirection: 'row-reverse' } : {}}>
      <img src={img} alt='section-img' />
      <div className='info-container' style={reverseOrientation ? { marginRight: '8.33vw', alignItems: 'flex-end' } : { marginLeft: '8.33vw' }}>
        <Logo src={marketLogo} alt='market-logo' />
        <div className='title-container'>
          <Title>{title}</Title>
          {isBeta &&
            <div className='beta-container'>
              <div className='beta-text'>Beta</div>
            </div>
          }
        </div>
        <Text>{text}</Text>
        <Button>{isBeta ? 'Simulate Aegle' : 'Learn more'}</Button>
      </div>
    </div>
  )
}

export default ElevatedSection

const Logo = styled.img`
  width: 50px
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 100%;
  color: #0E4656;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #808080;
  max-width: 16.5vw;
`;