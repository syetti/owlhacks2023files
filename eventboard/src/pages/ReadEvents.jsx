import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import './ReadEvents.css';
import axios from 'axios';
import { UniversalAccessCircle, GenderTrans } from 'react-bootstrap-icons';

function ReadEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adaFilter, setAdaFilter] = useState(false);
  const [unisexFilter, setUnisexFilter] = useState(false);

  useEffect(() => {
    const searchQuery = 'ADA accessible restroom'; // Your search query

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        console.log(`Latitude: ${lat}, Longitude: ${long}`);

        const baseUrl = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';
        const queryParams = {
          per_page: 36,
          ada : adaFilter,
          unisex : unisexFilter,
          lat: lat,
          lng: long,
        };

        axios.get(baseUrl, {
          params: queryParams,
        })
          .then(function (response) {
            setEvents(response.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.error(error);
            setLoading(false);
          });
      });
    } else {
      console.error('Geolocation is not supported by your browser.');
      setLoading(false); // Make sure to set loading to false if geolocation is not supported
    }
  }, [adaFilter,unisexFilter]);

  return (
    <div className='read-events-container'>
      <div className='filter-options'>
        <label style={{ backgroundColor: adaFilter ? '#007bff' : 'transparent', color: adaFilter ? 'white' : 'black', transition: 'background-color 0.3s ease'}}>
          <UniversalAccessCircle style={{ marginRight: '10px'}}/>
          ADA Accessible
          <input
            type='checkbox'
            checked={adaFilter}
            onChange={() => setAdaFilter(!adaFilter)}
          />
        </label>
        <label style={{ backgroundColor: unisexFilter ? '#007bff' : 'transparent', color: unisexFilter ? 'white' : 'black', transition: 'background-color 0.3s ease'     }}>
          <GenderTrans style={{ marginRight: '10px'}}/>
        Unisex
          <input
            type='checkbox'
            checked={unisexFilter}
            onChange={() => setUnisexFilter(!unisexFilter)}
          />
        </label>
      </div>
      <div className='eventboard'>
        {events.map((toilet, index) => (
          <Event
            key={index}
            name={toilet.name}
            address={toilet.street}
            city={toilet.city}
            country={toilet.country}
            longitude={toilet.longitude}
            latitude={toilet.latitude}
            date={toilet.updated_at}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadEvents;
