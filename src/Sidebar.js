import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home'; 
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            <div className="sidebar__playlists">
                {playlists?.items?.slice(0, 18).map(playlists => (
                        <SidebarOption title={playlists.name} />
                    ))}
            </div>
            
        </div>
    )
}

export default Sidebar
 