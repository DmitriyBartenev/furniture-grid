import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Planner from '../pages/planner/Planner';

import Spinner from '../components/spinner/Spinner';
import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';

import './App.scss';

const App = () => {

  return (
    <Router>
      <Header/>
      <main>
        <NavBar/>
        <Suspense fallback={<Spinner/>}>
            <div className='content'>
              <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/planner/*' element={<Planner/>}/>
              </Routes>
            </div> 
        </Suspense>
      </main>
    </Router>
  )
}

export default App;
