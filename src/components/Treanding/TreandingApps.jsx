import React from 'react'
import DisplayTreandingApp from './DisplayTreandingApp'
import { Link } from 'react-router'

function TreandingApps({Apps}) {
    
  return (
    <div>
      <div className='my-5 p-3 space-y-3'>
        <h2 className='text-4xl font-bold text-center'>Trending Apps</h2>
      <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-8 px-3'>
            {
                Apps.map(App =><DisplayTreandingApp App={App} key={App.id}></DisplayTreandingApp>)
            }
      </div>
      <div className='my-8 flex items-center justify-center '>
        <Link
        to='/apps'
        className='py-2 px-8 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Show All</Link>
      </div>
    </div>
  )
}

export default TreandingApps
