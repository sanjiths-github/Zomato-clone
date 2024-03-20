import React from 'react'
import NextArrow from '../../common/carousel/nextArrow'
import PrevArrow from '../../common/carousel/prevArrow'
import Slider from 'react-slick'
import'./topBrands.css'



const topBrandsList = [

{

    id:1,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},

{

    id:2,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},
{

    id:3,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},
{

    id:4,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},
{

    id:5,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},

{

    id:6,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},
{

    id:7,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},

{

    id:8,
    time:"35 min",
    cover:
    "https://b.zmtcdn.com/data/brand_creatives/logos/0b281ddf8faa5b9deb37c3653efd348f_1569404048.png"

},



]

const settings = {
    infinite:false,
    slidesToShow: 6 ,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow: <PrevArrow/>
  }


const TopBrands = () => {
  return (
    <div className='top-brand max-width'>

    <div className='collection-title'>Top brands for you</div>

<Slider {...settings}>

{topBrandsList.map((brand)=> {
return <div>

<div className='top-brands-cover'>
<img src={brand.cover} className='top-brands-image' alt={brand.time} />

</div>

</div>

})}


</Slider>



      
    </div>
  )
}

export default TopBrands
