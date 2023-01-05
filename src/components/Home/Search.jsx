import React from 'react';

function Search() {
    return (
        <div className="hidden w-[300px] grow flex-col items-start px-5 py-2 lg:flex">
            <input
                className="rounded-full bg-twittergrey px-3 py-1 focus:border focus:border-twitterpurple"
                type="text"
                placeholder="Search Twitter"
            />
            <div>Whats happening</div>
        </div>
    );
}

export default Search;
