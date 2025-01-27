import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spline from '@splinetool/react-spline';
import NavBar from './Components/NavBar';
import { useState } from 'react';

function App() {
  const [workout, setWorkout] = useState({ left: "0" })
  const [scrollToTop, setScrollToTop] = useState(false);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  })

  const checkWorkouts = () => {
    const hight = document.documentElement.clientHeight;
    window.scrollTo(0, hight);
  }
  const workouts = (e) => {
    if (e === 'Push') {
      setWorkout({ left: "0" })
    } else if (e === 'Pull') {
      setWorkout({})
    } else {
      setWorkout({ right: "0" })
    }
  }
  return (
    <div>
      <div className='vh-100'>
        <NavBar />
        <Spline scene="https://prod.spline.design/GYsEYajmhzouo1XS/scene.splinecode" />
        <div style={{ top: "80%" }} className='position-absolute start-50 translate-middle d-flex flex-column align-items-center'>
          <h1 className='fw-bold' style={{ color: "#073C44" }}>Stay Fit By Using Fit Flow</h1>
          <button
            onClick={() => checkWorkouts()}
            className='px-2 rounded-3'
            style={{ backgroundColor: "transparent", border: "1px solid #073C44", color: "#073C44" }}>Check out Workouts</button>
        </div>
      </div>

      <div className='py-3 vh-100'>
        <h1 className='text-center' style={{ color: "#073C44" }}>Workouts</h1>
        <div className='d-flex justify-content-center align-items-center flex-row'>
          <div
            className='d-flex justify-content-center align-items-center flex-row py-2 px-2 rounded-2 position-relative'
            style={{ backgroundColor: "#83b0b7" }}>
            <div style={workout} className='menuBar rounded-2 mx-2' />
            <p onClick={(e) => workouts(e.target.innerText)} className='text-center my-auto rounded-2 z-1' style={{ width: "4.6rem", color: "white", cursor: "pointer" }}>Push</p>
            <p onClick={(e) => workouts(e.target.innerText)} className='text-center my-auto rounded-2 z-1' style={{ width: "4.6rem", color: "white", cursor: "pointer" }}>Pull</p>
            <p onClick={(e) => workouts(e.target.innerText)} className='text-center my-auto rounded-2 z-1' style={{ width: "4.6rem", color: "white", cursor: "pointer" }}>Leg</p>
          </div>
        </div>
      </div>


      {scrollToTop ? <p
        onClick={() => window.scrollTo(0, 0)}
        style={{ right: "0", bottom: "0",cursor:"pointer",backgroundColor:"#073C44",color:"white" }}
        className='position-fixed mx-4 px-2 py-1 rounded-2'>top up</p> : <></>}
    </div>
  );
}

export default App;
