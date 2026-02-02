import React from 'react'

const Tabs = () => {
    const tabs = ['Photos','Videos','GIFs']
  return (
    <div>
      {tabs.map(function(element, index){
        return <button className='bg-gray-600 px-5 py-2 rounded' key={index}>{element}</button>
      })}
    </div>
  )
}

export default Tabs
