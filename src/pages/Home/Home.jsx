import React from 'react'
import Hero from '../../components/Hero/Hero'
import Facts from '../../components/Facts/Facts'
import TreandingApps from '../../components/Treanding/TreandingApps'
import { useLoaderData } from 'react-router'

function Home() {
  const Apps = useLoaderData()
  
  return (
    <div>
      <Hero/>
      <Facts/>
      <TreandingApps Apps={Apps}/>
    </div>
  )
}

export default Home
