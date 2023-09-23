import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function EventDetail() {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
  
    useEffect(() => {
      const fetchEventData = async () => {
        
        setEventData(item);
      };
      fetchEventData();
    }, [id]);
  
    return (
      <div className='event'>
        {eventData ? (
          <>
            
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default EventDetail;