import React from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
function TweetForm() {
    const {
        data: { avatar },
        error,
        isLoading,
    } = useContext(UserContext);
    return (
        <div className="flex p-3">
            <img
                className="h-12 rounded-full bg-fuchsia-500"
                src={avatar}
                alt=""
            />
            <div className="">
                <div>Everyone</div>
                <input type="text" placeholder="What's hapening?" />
                <div>Everyone can replay</div>
            </div>
        </div>
    );
}

export default TweetForm;
