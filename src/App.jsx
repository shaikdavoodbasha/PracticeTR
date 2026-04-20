import React, { useState } from 'react'
import BasicQuestins from './components/BasicQuestins'
import Navbar from './components/Navbar'
import ConditionalRendering from './components/ConditionalRendering'
import Effect from './components/Effect'
import Reffing from './components/Reffing'
import UseMemo from './components/UseMemo'
import Forms from './components/Forms'
import UseCallBack from './components/Callback/UseCallBack'
import AppRouter from './routes/AppRouter'
import Component5 from './mc/Component5'
import Component6 from './mc/Component6'


const App = () => {
  const[cData,setCdata] = useState('')
  const data = {
    class:'2ndclass',
    section:'B-Section'
  }
  const fromChild = (data)=>{
    setCdata(data)
  }
  return (
    <div className='px-24 py-16'>
     {/* <Navbar /> */}
     {/* <BasicQuestins data={data} />
     <ConditionalRendering sendToParent={fromChild} />
     <p className='text-blue-600'>{cData}</p>
     <Effect /> */}
     {/* <Reffing /> */}
     {/* <UseMemo /> */}
     {/* <Forms /> */}
     {/* <UseCallBack /> */}
     {/* <Navbar />
     <AppRouter />
     <Component5 /> */}
     <Component6 />
    
    </div>
  )
}

export default App
