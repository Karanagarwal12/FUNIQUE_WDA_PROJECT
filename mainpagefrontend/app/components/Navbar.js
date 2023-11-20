import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export default function Navbar() {
    return (
        <div>
            <div id="header" >
                <div className='appName'>
                    <h1>FUNIQUE</h1>
                </div>
                <div id="Nav">
                    <div id="search">
                        <input className='searchInput'type="search"  />
                            <SearchIcon className='searchIcon'/>

                    </div>
                    <div className='navIcons'>
                        <div id="home">
                            <HomeIcon className='HomeIcon'/>

                        </div>
                        <div id="bell">
                            <NotificationsActiveIcon className='NotiIcon' />
                        </div>


                        <div id="setting">
                            <SettingsIcon className='SettingsIcon' />
                        </div>
                        <div id="profile">
                            <PersonIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}