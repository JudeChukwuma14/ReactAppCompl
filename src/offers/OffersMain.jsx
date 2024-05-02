import React, { useEffect, useState } from 'react'
import { OfferList } from '../components/MenuList'
import { useParams } from 'react-router-dom'
import { Http } from '../components/Axios'

function OffersMain({current}) {

    const [food, setFood] = useState({
      "imgSrc": "hshj",
      "h1": "sdhj",
      "p": "sjgjks"
  },)


  const {id} = useParams()

  
    
    useEffect(() => {
      if(!id){
        setFood({
          "imgSrc": "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/17da7c76013ab0f2fd8ab60cfa711f2a16147526-800x513.png?w=320&q=40&fit=max&auto=format",
          "h1": "CLICK & COLLECT FIRST ORDER: FREE WHOPPER WITH PURCHASE OVER £3",
          "p": "A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only."
      })
      }

      Http.get(`OfferList/${id}`)
        .then((res) => {
          setFood(res.data);
        })
        .catch(err => console.log(err))

      
    }, [id])
    
    

  return (
    <div className='text-center w-8/12 border'>


        <div className='border flex flex-col items-center'>
            <img src={food.imgSrc} alt={food.h1} className='mx-auto' />
            <h1>{food.h1}</h1>
            <p>{food.p}</p>
        </div>
    </div>
  )
}

export default OffersMain