import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import './ReadEvents.css';
import axios from 'axios';

function ReadEvents() {
  const [events, setEvents] = useState([]);
  const searchQuery = 'ADA accessible restroom'; // Your search query

  // Add request interceptor to log requests
  axios.interceptors.request.use((request) => {
    console.log('Request:', request);
    return request;
  });

  // Add response interceptor to log responses
  axios.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
  });

  useEffect(() => {
    // Define an async function to fetch ADA accessible toilets with a search query
    const fetchAccessibleToilets = async () => {
      try {
        const response = await axios.get('https://www.refugerestrooms.org/api/v1/restrooms.json', {
          params: {
            ada: true, // Filter for ADA accessible toilets
            query: searchQuery, // Your search query
            per_page: 50,
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

    fetchAccessibleToilets();
  }, []);

  return (
    <div className='eventboard'>
      {events.map((toilet, index) => (
        <Event
          key={index}
          name={toilet.name}
          description={toilet.description}
          date={toilet.updated_at} // You can customize this part based on the data structure
        />
      ))}
    </div>
  );
}

export default ReadEvents;
