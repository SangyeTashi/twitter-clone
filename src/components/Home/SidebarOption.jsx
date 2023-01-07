import React from 'react';

function SidebarOption({ Icon, text = null }) {
    return (
        <div className="sidebar-icon  group  flex cursor-pointer  space-x-3   rounded-full p-2 text-gray-100 hover:bg-twittergrey xl:px-4">
            <div className="relative  h-8 w-8 shrink-0 text-center">
                <Icon sx={{ fontSize: 30 }} />
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
            </div>
            <h2 className="hidden text-xl xl:inline-block">{text}</h2>
        </div>
    );
}

export default SidebarOption;
