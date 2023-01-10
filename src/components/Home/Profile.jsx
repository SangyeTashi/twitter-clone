import React from 'react';

import { Lock, MoreHoriz } from '@mui/icons-material';
import useFetch from './useFetch';

function Profile() {
    const [data] = useFetch('https://random-data-api.com/api/v2/users?size=2');
    console.log(data);

    return (
        <div className="group relative mb-3 h-11 w-11 cursor-pointer">
            <div className="absolute z-0 rounded-full bg-twittergrey group-hover:-inset-1.5 "></div>
            <div className="absolute inset-0 overflow-hidden rounded-full  ">
                <img
                    className="h-full w-auto object-cover "
                    src={data[0].avatar}
                    alt="profile photo"
                />
            </div>
            <div>
                <div>{data[0].username}</div>
                <div></div>
            </div>
            <MoreHoriz />
        </div>
    );
}

export default Profile;
