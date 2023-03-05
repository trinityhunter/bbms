import React from 'react'
import Navbar from './Navbar'
import DonationForm from './DonationForm'
import DonationView from './DonationView'
import RequestForm from './RequestForm'
import RequestView from './RequestView'

const Donation = () => {
  return (
    <div>
        <Navbar/>
        <div>Donation</div>
        <DonationForm/>
        <DonationView/>
        <div>Request</div>
        <RequestForm/>
        <RequestView/>
    </div>
  )
}

export default Donation