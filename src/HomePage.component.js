import React from 'react';
import './homepage.styles.scss';

const HomePage = ()=>{
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>HATS</div>
                        <div className='subtitle'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>JACKETS</div>
                        <div className='subtitle'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>SNEAKER</div>
                        <div className='subtitle'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>MEN</div>
                        <div className='subtitle'>SHOP NOW</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>WOMEN</div>
                        <div className='subtitle'>SHOP NOW</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;