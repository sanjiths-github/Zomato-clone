import React from 'react'
import './nightlife.css'
import Collection from '../common/collection'
import { nightLife } from '../../data/nightlife'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'

const nightFilter = [
  {
    id:1,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'>
    </i>,
    title:"Filters",
  },
  {
    id:2,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'>
    </i>,
    title:"Filters",
  },


  {
    id:3,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'>
    </i>,
    title:"Filters",
  },


  {
    id:4,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'>
    </i>,
    title:"Filters",
  },

  {
    id:5,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'>
    </i>,
    title:"Filters",
  },



]


const collectionList=[

  {
    id:1,
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/6d0f0062154163f1a6a1a4a33353a645_1692188276.jpg",
    places:"12 places"
  },
  {
    id:2,
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
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
  
const nightList =nightLife
const Nightlife = () => {
  return (
    <div>
  <Collection list ={collectionList}/>
  <div className='max-width'>
  <Filters filterList={nightFilter}/>
  </div>
  <ExploreSection list={nightList} collectionName/>
     
    </div>
  )
}

export default Nightlife
