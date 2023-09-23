import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import './ReadEvents.css';
import axios from 'axios';

function ReadEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchQuery = 'ADA accessible restroom'; // Your search query

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        console.log(`Latitude: ${lat}, Longitude: ${long}`);

        const baseUrl = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';
        const queryParams = {
          page: 1,
          per_page: 10,
          offset: 0,
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
  }, []);

  return (
    <div className='read-events-container'>
      <div className='filter-options'>
        <label>
          ADA Accessible
          <input
            type='checkbox'
            checked={adaFilter}
            onChange={() => setAdaFilter(!adaFilter)}
          />
        </label>
        <label>
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
            description={toilet.directions}
            date={toilet.updated_at}
          />
        ))}
      </div>
    </div>
  );
}

export default ReadEvents;
