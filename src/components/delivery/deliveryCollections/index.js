import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../../common/carousel/nextArrow'
import PrevArrow from '../../common/carousel/prevArrow'
import DeliveryItem from './deliveryItem'
import './deliveryCollections.css'

const deliverItems=[

{
  id:1,
  title:"Pizza",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},
{
  id:2,
  title:"Burger",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},

{
  id:4,
  title:"Rolls",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},

{
  id:4,
  title:"Cake",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},


{
  id:6,
  title:"Biriyani",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},

{
  id:7,
  title:"pizza",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},

{
  id:8,
  title:"Chaat",
  cover:"https://b.zmtcdn.com/data/pictures/chains/7/20789907/1f4763cf627babda2ec3fd07e2cc512b_o2_featured_v2.jpg"
},


]

const settings = {
  infinite:false,
  slidesToShow: 4 ,
  slidesToScroll:1,
  nextArrow:<NextArrow/>,
  prevArrow: <PrevArrow/>
}


const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>

    <div className='max-width'>
    <div className='collection-title'>Eat what makes you happy</div>

<Slider {...settings}>

{deliverItems.map((item) => {

  return  <DeliveryItem item={item}/> ;

})}

</Slider>


    
    
    </div>
      
    </div>
  )
}

export default DeliveryCollections
