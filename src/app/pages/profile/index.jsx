import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../../../features/userSlice'
import { auth } from '../../../firebase'
import NavBar from '../../components/navbar'
import './Profile.scss'

const Profile = () => {
    const user = useSelector(selectUser)
    const history = useHistory()

    return (
        <div className='profile container'>
            <NavBar />
            <div className="profile-content-wrapper">
                <h1>My Profile</h1>
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
                            <div className='plan'>
                                <div className='plan-info'>
                                    <h4>Premium </h4>
                                    <h5>4K HDR</h5>
                                </div>
                                <button className='subscribed'>Subscribed</button>
                            </div>
                            <div className='plan'>
                                <div className='plan-info'>
                                    <h4>Standard </h4>
                                    <h5>1080P</h5>
                                </div>
                                <button className='subscribe'>Subscribe</button>
                            </div>
                            <div className='plan'>
                                <div className='plan-info'>
                                    <h4>Basic </h4>
                                    <h5>720P</h5>
                                </div>
                                <button className='subscribe'>Subscribe</button>
                            </div>
                            <button onClick={() => {
                                auth.signOut()
                                history.push('/')
                            }} className='signout-button'>Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Profile
