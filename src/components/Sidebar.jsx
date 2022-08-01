import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Button } from '@mui/material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twittericon'/>
            
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Account"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            <Button variant="outlined" className='sidebar__tweet'
            fullWidth><span className='sidebar__tweet--text'>Tweet</span><HistoryEduIcon/></Button>
        </div>
    );
}

export default Sidebar;
