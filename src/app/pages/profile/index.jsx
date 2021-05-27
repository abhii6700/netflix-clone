import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import NavBar from '../../components/navbar'
import './Profile.scss'

const Profile = () => {
    const user = useSelector(selectUser)

    return (
        <div className='profile container'>
            <NavBar />
            <div className="profile-content-wrapper">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <div className="profile-icon">
                        <img
                            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                            alt=''
                        />
                    </div>
                    <div className="profile-detail">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>Plans</h3>
                            <button className='signout-button'>Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Profile
