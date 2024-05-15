import React from 'react';

function SidebarOption({ Icon, text = null }) {
    return (
        <div className="btn-primary group relative flex items-center space-x-3">
            <Icon sx={{ fontSize: 23 }} />

            {/* tooltip */}
            <span
                className="
                    absolute
                    left-1/2
                    -bottom-5 
                    -translate-x-1/2
                    scale-0 bg-twittergreylight
                    px-1 py-0.5
                    text-xs
                    transition-all
                    ease-in 
                    group-hover:scale-100
                    group-hover:delay-700
                    xl:hidden
                    "
            >
                {text}
            </span>
            <h2 className="hidden pr-1.5 text-xl xl:inline-block">{text}</h2>
        </div>
    );
}

export default SidebarOption;
