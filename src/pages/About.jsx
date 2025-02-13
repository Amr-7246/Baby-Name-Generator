import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {Toggle} from '../store/redux/actions/productsActions'

const About = () => {
  // * start Data Handling
  const Istoggle = useSelector((state) => state.minData.Istoggle);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    const newData = { key: "value" };
    dispatch(Toggle(!Istoggle));
  };
  // * end Data Handling
  return (
        <div className='schema'  >
          <Link to={'/home'}>
            <button className='btn cursor-pointer' onClick={handleUpdate}>Hi from About</button>
          </Link>
        </div>
  )
}

export default About
