import React from 'react'
import { BaseLayouts }  from '../layouts'
import { Hero, Quote, Servises, Skils } from '../components/home'

const HomePage = () => {
  return (
  <>
  <BaseLayouts>
    <Hero/>
    <Quote/>
    <Servises/>
    <Skils/>
  </BaseLayouts>
 
  </>
  );
}

export default HomePage

