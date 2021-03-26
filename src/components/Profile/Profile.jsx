import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import AddPin from '../AddPin/AddPin';

export default function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <ProfilePosts/>
            <AddPin/>
        </div>
    )
}
