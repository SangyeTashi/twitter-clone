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

// import Profile from './Profile';
import SidebarOption from './SidebarOption';
import TweetButton from './TweetButton';
import Profile from './Profile';

function Sidebar() {
    return (
        <div className="flex h-full flex-col px-1 text-sm md:px-2 xl:w-64">
            <div className=" flex flex-col items-start space-y-2  ">
                <div className="btn-primary">
                    <Twitter sx={{ fontSize: 32 }} />
                </div>
                <SidebarOption Icon={Home} text="Home" />
                <SidebarOption Icon={Search} text="Explore" />
                <SidebarOption Icon={NotificationsNone} text="Notification" />
                <SidebarOption Icon={MailOutline} text="Messages" />
                <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
                <SidebarOption Icon={ListAlt} text="Lists" />
                <SidebarOption Icon={PermIdentity} text="Profile" />
                <SidebarOption Icon={MoreHoriz} text="More" />
                <div className=" pt-5 xl:self-stretch">
                    <TweetButton />
                </div>
            </div>

            <div className="mt-auto">
                <Profile />
            </div>
        </div>
    );
}

export default Sidebar;
