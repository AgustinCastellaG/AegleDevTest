import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/Button/Button'
import './Card.scss'

const Card = ({ logo, title, line1, line2 }) => {
  return (
    <div className='card-container'>
      <Logo src={logo} alt='card-logo'></Logo>
      <Title>{title}</Title>
      <Text style={{ marginBottom: 11 }}>{line1}</Text>
      <Text>{line2}</Text>
      <Button styles={{ color: '#CE9531', border: '2px solid #CE9531', marginTop: 38 }}>Learn More</Button>
    </div>
  )
}

export default Card

const Logo = styled.img`
  color: #E7B65F;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #0E4656;
  margin: 20px 0 15px
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #6F6F6F;
  margin-bot: 11px
`;