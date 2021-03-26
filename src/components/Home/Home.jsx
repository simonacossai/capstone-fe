import React from 'react'
import Feed from './Feed/Feed';
import AddPin from '../AddPin/AddPin';

export default function Home() {
    return (
        <div className="animate__animated animate__fadeIn Home">
          <Feed/>    
          <AddPin/>
        </div>
    )
}
