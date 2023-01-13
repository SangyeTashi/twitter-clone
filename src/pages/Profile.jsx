import React from 'react';

import { Lock, MoreHoriz } from '@mui/icons-material';
import useFetch from '../hooks/useFetch';

function Profile() {
    const {
        data: { last_name, first_name, avatar, username },
        isLoading,
        error,
    } = useFetch('https://random-data-api.com/api/v2/users?size=1', {});

    return (
        <div className="btn-primary flex items-center space-x-2">
            <img
                src={avatar}
                className="h-9 rounded-full bg-blue-700 object-cover xl:ml-1"
                alt="profile photo"
                loading="lazy"
            />

            <div className="hidden  grow items-center text-sm xl:flex">
                <div>
                    {`${first_name} ${last_name}`}
                    <span className="ml-1">
                        {<Lock sx={{ fontSize: 15 }} />}
                    </span>
                    <div className="text-gray-500">@{username}</div>
                </div>

                <MoreHoriz className="ml-auto" />
            </div>
        </div>
    );
}

export default Profile;
