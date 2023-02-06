import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './pages/components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
// import Payment from './pages/Payment';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// const promise = loadStripe('pk_test_51L70F7LkNFBBMaUyKQ0PbE0xO7Dicy2hT12phMQ4VktLJRcI3BHToR1nNlV8ljw3OQIj8zUW37CQsGXS9gT6qDVI00eBdHenVu');

function App() {       
  const [dispatch] = useStateValue();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  // const clientSecret = "sk_test_51L70F7LkNFBBMaUynWNJ9dD9vzkMMAsCrwBrNzLgqSNkok70geu8Idm6o3fP3065xdDILHZbx0EY2VK98nWeWKkw00cJnu7kul"

  // const appearance = {
    // theme: 'flat',
  // };

  // const options = {
    // appearance,
  // };
  
  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path="/login" element={<><Login/></>}/>
          <Route exact path="/checkout" element={<><Checkout/></>}/>
          {/* <Route exact path="/payment" element={<><Elements stripe={promise} options={options}><Payment/></Elements></>}/> */}
          <Route exact path="/" element={<><Home/></>}/>
      </Routes>
    </Router>
  );
}

export default App;