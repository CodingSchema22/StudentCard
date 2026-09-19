import React from 'react'

const Cards = ({data}) => {
  return (
 <>
 <>
   <div className='main'>
<div className="card">
       <div className="img">
        <img src={data.image} alt={''} />
      </div>
  <h1>{data.name}</h1>
  <p>{data.para}</p>
  <button>
    View Profile
  </button>
</div>
   </div>
    </>
 </>
  )
}

export default Cards
