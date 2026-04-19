import React from 'react'
import Component_1 from '../mc/com_1'
import Component2 from '../mc/Component2'
import Component3 from '../mc/Component3'
import Component4 from '../mc/Component4'
import Component5 from '../mc/Component5'

const HomePage = () => {
  return (
    <div className='flex  flex-col justify-center items-center'>
      <h1 className='text-center text-2xl text-red-600 py-10'>Homepage</h1>
      {/* <Component_1 /> */}
      {/* <Component2 /> */}
      {/* <Component3 /> */}
      {/* <Component4 /> */}
      <Component5 />
    </div>
  )
}

export default HomePage
