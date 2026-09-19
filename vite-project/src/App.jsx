import React from 'react'
import Cards from './components/Cards'
const App = () => {
  const data = [{
    name : 'Fatima',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/picc.jpg'
  },
  {
    name : 'Ayesha',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/pic-2.jpg'
  },{
    name : 'Amna',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/pic-3.jpg'
  },{
    name : 'Romaisa',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/pic-4.jpg'
  },{
    name : 'Riffat',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/pic-5.jpg'
  },{
    name : 'Maham',
    para : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, voluptatum quibusdam enim est offici',
    image : '/pic-6.jpg'
  }
]
  return (
   <>
       <h1 className='main-heading'>Student Cards</h1>
<div className="section">
  {
    data.map((data)=>{
      return(
        <Cards data = {data}/>
      )
    })
  }
</div>
   </>
  )
}

export default App