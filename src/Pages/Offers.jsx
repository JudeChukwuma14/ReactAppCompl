import React, { useState } from 'react'
import OffersLeft from '../offers/OffersLeft'
import OffersMain from '../offers/OffersMain'

function Offers() {

  const [current, setCurrent] = useState(0)
  return (
    <div className='flex'>
      <OffersLeft setCurrent={setCurrent}/>
      <OffersMain current={current} />
    </div>
  )
}

export default Offers