import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Http } from '../components/Axios'

function OffersLeft({setCurrent}) {

    const [items, setItems] = useState([])
    function selectItem(id){
        setCurrent(id)
    }

    useEffect(() => {
        Http.get('OfferList')
        .then((res) => {
            setItems(res.data)
        })
        .catch((err) => console.log(err))
        
    }, [])


  return (
    <section className='h-[calc(100svh-100px)] overflow-y-scroll w-4/12'>
        {
            items.map((item) => (
                <Link to={`/offers/${item.id}`} key={item.id} className='flex items-center gap-2' onClick={() => selectItem(i)}>
                    <img src={item.imgSrc} alt={item.h1} className='w-36' />
                    <div>
                        <h1 className='font-black'>{item.h1}</h1>
                        <p>{
                            item.p.slice(0, 50) + '...'
                        }</p>
                    </div>
                </Link>
            ))
        }
    </section>
  )
}

export default OffersLeft