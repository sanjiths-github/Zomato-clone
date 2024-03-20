import React from 'react'
import './diningout.css'
import Collection from '../common/collection'
import { diningOut } from '../../data/diningOut'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'

const collectionList=[

{
  id:1,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811176.png",
  places:"12 places"
},
{
  id:2,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/f544cc2f37e23d34ceab7dfeed45fd16_1710396552.png",
  places:"12 places"
},
{
  id:3,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
  places:"12 places"
},

{
  id:4,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
  places:"12 places"
},


{
  id:5,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
  places:"12 places"
},


{
  id:6,
  title:"trending this week",
  cover:"https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
  places:"12 places"
},

]

const diningFilters=[


  {

    id:1,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:"Filters"
  },


 

  {

    id:2,
    title:"Rating: 4.0+"
  },
  {

    id:3,
    title:"Safe and hygenic"
  },


  {

    id:4,
    title:"Pure Veg"
  },

  {

    id:5,
    icon:<i className='fi fi-rr-apps-sort absolute-center'></i>,
    title:"Delivery Time"
  },


  {

    id:6,
    title:"Great offers"
  },





]


const diningList = diningOut

const DiningOut = () => {
  return (
    <div>
    <Collection list={collectionList}/>
    <div className='max-width'>
    
  <Filters filterList={diningFilters}/>
    </div>
    <ExploreSection list={diningList} collectionName = "Dine-Out Restaurants in Banglore"/>
    </div>
  )
}

export default DiningOut
