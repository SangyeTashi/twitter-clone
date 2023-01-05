import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import { SparklesIcon } from '@heroicons/react/24/outline';

function Feed() {
    const [users, setUsers] = useState([]);

    //get random 22 users data
    useEffect(() => {
        async function fetchData() {
            const response = await axios
                .get('https://random-data-api.com/api/v2/users?size=22')
                .then((data) => {
                    setUsers(data.data);
                });
        }
        fetchData();
    }, []);

    return (
        <div className=" max-w-[600px] overflow-y-scroll border-x-[0.3px] border-twittergrey">
            <div className="TopBar sticky top-0 flex  justify-between bg-black/40 px-4 py-3 backdrop-blur-md">
                <h1 className="text-xl font-bold">Home</h1>
                <SparklesIcon className="h-5" />
            </div>

            <div className="Feeds">
                {/* Renders a tweet for each user */}
                {users.map((user) => {
                    return (
                        <Tweet
                            userName={`${user.first_name} ${user.last_name}`}
                            userId={`@${user.username}`}
                            //resize avatar via imagecdn
                            avatar={`https://imagecdn.app/v2/image/${user.avatar}?width=200&height=200`}
                            isVerified={
                                user.subscription.status === 'Active'
                                    ? true
                                    : false
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Feed;
