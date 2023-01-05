import React from 'react';

function SidebarOption({ Icon, text = null }) {
    return (
        <div className="sidebar-icon group relative flex grow-0 cursor-pointer items-center  space-x-4  rounded-full p-2 text-gray-100 hover:bg-twittergrey xl:px-4">
            <div className="h-8 w-8 shrink-0 text-center">
                <Icon />
            </div>
            <h2 className="hidden  text-xl xl:inline-block">{text}</h2>
            <span className="absolute left-1/2 -bottom-5 z-10 mx-auto w-max -translate-x-1/2 scale-0 bg-twitterPurpleLight/60  py-0.5 px-1 text-[9px] transition-all group-hover:scale-100 group-hover:delay-500 lg:hidden">
                {text}
            </span>
        </div>
    );
}

export default SidebarOption;
