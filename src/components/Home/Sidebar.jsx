import React from 'react';
import {
    Twitter,
    Home,
    Search,
    NotificationsNone,
    MailOutline,
    BookmarkBorder,
    ListAlt,
    PermIdentity,
    MoreHoriz,
} from '@mui/icons-material';

import Profile from './Profile';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="flex h-full flex-col items-start space-y-2">
            <Twitter />
            <SidebarOption Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Education" />
            <SidebarOption Icon={NotificationsNone} text="Search" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />
            <div className="mt-auto">
                <Profile />
            </div>
        </div>
    );
}

export default Sidebar;
