import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({data}) {
    const router = useRouter();
    const [logined, setLogined] = useState(false);
    function loginHandler(e) {
        e.preventDefault();
        router.push("/login");
        setLogined(true);
    }
    return (
        <div>
            <div id="header" >
                <div className='appName'>
                    <h1>FUNIQUE</h1>
                </div>
                <div id="Nav">
                    <div id="search">
                        <input className='searchInput' type="search" />
                        <SearchIcon className='searchIcon' />
                    </div>
                    <div className='navIcons'>
                        <div id="home" onClick={()=>data.setHeroCenter("posts")}>
                            <HomeIcon className='HomeIcon'/>
                        </div>
                        <div id="bell">
                            <NotificationsActiveIcon className='NotiIcon' />
                        </div>
                        <div id="setting">
                            <SettingsIcon className='SettingsIcon' />
                        </div>
                    </div>
                        <div id="profile">
                            {logined && 
                            <PersonIcon />||
                            <span className='loginBtn' onClick={loginHandler}>Login</span>
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}