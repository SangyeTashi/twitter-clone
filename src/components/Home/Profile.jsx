import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto.jpg';

function Profile() {
    return (
        <div className="group relative mb-3 h-11 w-11 cursor-pointer">
            <div className="absolute z-0 rounded-full bg-twittergrey group-hover:-inset-1.5 "></div>
            <div className="absolute inset-0 overflow-hidden rounded-full  ">
                <img
                    className="h-full w-auto object-cover "
                    src={ProfilePhoto}
                    alt="profile photo"
                />
            </div>
        </div>
    );
}

export default Profile;
