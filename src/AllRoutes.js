import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Donation from './components/Donation';
import DonationForm from './components/DonationForm'
import DonationView from './components/DonationView';
import RequestForm from './components/RequestForm'
import RequestView from './components/RequestView';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Donation/>} />
            <Route path='/DonationForm' element={<DonationForm/>} />
            <Route path='/DonationView' element={<DonationView/>} />
            <Route path='/RequestForm' element={<RequestForm/>} />
            <Route path='/RequestView' element={<RequestView/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes