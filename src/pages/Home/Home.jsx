import React from 'react'
import styled from 'styled-components';

import Card from './components/Card/Card';
import ElevatedSection from './components/ElevatedSection/ElevatedSection';
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image2.svg'
import graphic from '../../assets/graphic.svg'
import piggyBank from '../../assets/piggy-bank-icon.svg'
import umbrella from '../../assets/umbrella-icon.svg'
import twoDollar from '../../assets/2-dolar-icon.svg'
import threeDollar from '../../assets/3-dolar-icon.svg'
import './Home.scss'

const Home = () => {
  return (
    <div id='Home'>
      <Header/>
      <div id='home-graphic-section'>
        <div id='graphic-container'>
          <div id='graphic-left-section'>
            <div id='graphic-text-container'>
              <Title>Stop-loss reinsurance hasn’t changed in decades.</Title>
              <Title className='yellow'>We are fixing that.</Title>
            </div>
            <div id='graphic-buttons-container'>
              <Button primary>Contact Us</Button>
              <div style={{ marginLeft: '1.93vw' }}>Learn more</div>
            </div>
          </div>
          <div id='graphic-right-section'>
            <DollarIcon src={twoDollar} style={{ left: '48.95vw', top: '32.74vw'}}/>
            <DollarIcon src={twoDollar} style={{ left: '65.1vw', top: '8.33vw'}}/>
            <DollarIcon src={threeDollar} style={{ left: '79.17vw', top: '19.79'}}/>
            <img id='graphic-img' src={graphic} alt="graphic" />
          </div>
        </div>
      </div>
      <div id='floating-section'>
        <KilterDiv>
          <ElevatedDiv>
            <div className='container'>
              <Title className='title'>Aegle in a Nuthsell</Title>
              <div className='subtitle'>Aegle is a next-generation replacement of traditional stop-loss reinsurance for self-insured employers and other risk-bearing entities.</div>
              <div className='cards-container'>
                <Card
                  logo={piggyBank}
                  title={'Lower Spend'}
                  line1={'20%+ cumulative savings over 5 years'}
                  line2={'Typical first-year savings: 60-80%'}
                />
                <Card
                  logo={umbrella}
                  title={'Better Coverage'}
                  line1={'No lasers or exclusions'}
                  line2={'Eliminates deductibles'}
                />
              </div>
            </div>
          </ElevatedDiv>
          <ElevatedDiv style={{padding: '5.68vw 11.35vw ', marginTop: '2.34vw'}}>
            <ElevatedSection
              title={'What is Aegle and Who Aegle Covers'}
              text={'Same product, less cost, no lasers; available for self-insured employers, health plans, and at-risk health systems'}
              img={image1}
            />
            <Separator/>
            <ElevatedSection
              title={'How Aegle Works'}
              text={'See an illustrative example'}
              img={image2}
              reverseOrientation
            />
            <Separator/>
            <ElevatedSection
              title={'Simulate Aegle'}
              text={'We put our money where our mouth is: see how much Aegle would save for a typical company using our Simulator!'}
              img={image3}
              isBeta
            />
          </ElevatedDiv>
        </KilterDiv>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

const Title = styled.div`
  font-family: "Rufina";
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
`;

const KilterDiv = styled.div`
  position: absolute;
  top: -15.87vh;
  margin-bottom: 100px
`;

const ElevatedDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 13.73vh 15.83vw 8.67vh ;
`;

const Separator = styled.div`
  border: 1px solid #E6E6E6;
  margin: 5.21vw 0
`;

const DollarIcon = styled.img`
  position: absolute;
  width: 6.67vw
`;