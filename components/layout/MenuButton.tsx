import React, { useState } from 'react';
import Link from 'next/link';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {};

const pageTitle = ['首頁', 'About Me'];
const pageLink = ['/', '/aboutMe'];

function MenuButton({}: Props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <div>
            <IconButton onClick={handleMenuClick}>
                <MenuIcon className="h-6 w-6" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClick={handleMenuClose}
                onClose={handleMenuClose}
                disableScrollLock={true}
            >
                {pageTitle.map((title, index) => (
                    <Link href={pageLink[index]} key={index}>
                        <MenuItem key={index}>{title}</MenuItem>
                    </Link>
                ))}
            </Menu>
        </div>
    );
}

export default MenuButton;
