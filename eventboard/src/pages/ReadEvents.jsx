import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import './ReadEvents.css';
import axios from 'axios';

function ReadEvents() {
  const [events, setEvents] = useState([]);
  const [adaFilter, setAdaFilter] = useState(false);
  const [unisexFilter, setUnisexFilter] = useState(false);

  useEffect(() => {
    // Define an async function to fetch filtered toilets
    const fetchFilteredToilets = async () => {
      try {
        const philadelphiaLat = 39.9526; // Replace with actual coordinates
        const philadelphiaLng = -75.1652; // Replace with actual coordinates

        const response = await axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location.json', {
          params: {
            ada: adaFilter, // Filter for ADA accessible toilets
            unisex: unisexFilter, // Filter for unisex toilets
            lat: philadelphiaLat,
            lng: philadelphiaLng,
          },
        });

        const toiletData = response.data;

        setEvents(toiletData);

        // Log the JSON data
        console.log('Toilet Data:', toiletData);
      } catch (error) {
        console.error('Error fetching toilet data:', error);
      }
    };

    fetchFilteredToilets();
  }, [adaFilter, unisexFilter]); // Add dependencies to re-run the effect when filters change

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
