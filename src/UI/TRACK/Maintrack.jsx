import React from 'react';
import { useParams } from 'react-router-dom';
import Track1 from './Track1';
import Track2 from './Track2';

function MainTrack() {
  const { id } = useParams();
  
  return (
    <div>
      {id ? <Track2 /> : <Track1 />}
    </div>
  )
}

export default MainTrack;