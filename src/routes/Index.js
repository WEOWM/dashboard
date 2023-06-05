import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Default from '../Layout/Default/Default'
import Dashboard from '../views/Dashboard/Dashboard'
import Number from '../views/Number/Number'
import Report from '../views/Report/Report'
import Contacts from '../views/Contacts/Contacts'
import Audio from '../views/Audio/Audio'
import Agents from '../views/Agents/Agents'
import Settings from '../views/Settings/Settings'

const IndexRouter = () => {
  return (
    <div>
        <Routes>,
          <Route path='/' element={<Default/>} >
            <Route path='/' element={<Dashboard/>} />
            <Route path='/number' element={<Number/>} />
            <Route path='/report' element={<Report/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/audio' element={<Audio/>} />
            <Route path='/agents' element={<Agents/>} />
            <Route path='/settings' element={<Settings/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default IndexRouter