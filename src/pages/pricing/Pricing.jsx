import Section1 from '@/components/componentsPageHome/section1/Section1'
import Section3 from '@/components/componentsPageHome/section3/Section3'
import Section2 from '@/components/componentsPageHome/section2/Section2'
import Container from '@/components/shared/Container/Container'
import React from 'react'
import Section4 from '@/components/componentsPageHome/section4/Section4'
import Swider from '@/components/componentsPageHome/swider/Swider'


const Pricing = () => {
  return (
    <Container>
      <Section1/>
      <Section2/><br /><br />
      <Section3/><br /><br /><hr /><br />
   
      <Swider/>
    </Container>
  )
}

export default Pricing