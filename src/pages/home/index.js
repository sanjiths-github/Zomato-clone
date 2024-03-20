import React, { useState } from 'react'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/delivery'
import DiningOut from '../../components/diningOut'
import Nightlife from '../../components/nightlife'

const HomePage = () => {

const [activeTab,setActiveTab] = useState("Delivery")

  return (
    <div>
     <Header/>
     <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
     {getCorrectedScreen (activeTab)}
     <Footer/>

    </div>
  )
}


const getCorrectedScreen=(tab)=>{
  switch(tab){

    case "Delivery" :
    return <Delivery/>;

    case "Dining Out" :
      return <DiningOut/>;

      case "NightLife":
        return<Nightlife/>;

        default:
          return <Nightlife/>

  }
}

export default HomePage
