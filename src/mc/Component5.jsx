import React, { useState } from 'react'

const Component5 = () => {
    const data = ['apple','banana','cat','dog']
    const[value,setValue] = useState('');
    const[searched,setSearched] = useState('')
    const searchHandle = ()=>{
        const searchItem = data.filter((item,index)=>item == value);
        setSearched(searchItem);
    }
  return (
    <div>
        <div className='text-center flex flex-col gap-4'>
            <h1>Search Filter.</h1>
            <div className='flex justify-center items-center gap-3'>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className='border border-green-500 rounded-lg px-3 py-1' />
                <button className='px-3 py-2 bg-green-500 text-white rounded-lg' onClick={searchHandle}>Search</button>
            </div>
            <p>Your Searched Item: {searched==value ? searched :'Data not Found'}</p>
        </div>
      
    </div>
  )
}

export default Component5
