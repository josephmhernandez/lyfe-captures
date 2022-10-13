import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
// import leftImage from '../../public/images/img/seities_apparel_logo_small.png'
import leftImage from '../../public/images/img/seities_apparel_logo_small.png'

import 'semantic-ui-css/semantic.min.css';
const LeftPanel = () => {
    console.log('herer');
    return (
        <>
            <Menu vertical size='massive'>
            <Image src={leftImage} />
                <Menu.Item>
                    <Menu.Header>Clothings</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item name='shirts' />
                        <Menu.Item name='sweatshirts' />
                        <Menu.Item name='Tank Tops' />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Misc</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item name='hats' />
                        <Menu.Item name='jewerly' />
                        <Menu.Item name='Seities X Collection' />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default LeftPanel;