import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const sidebarItems = ['Home', 'Resumes', 'History'];

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Top Navbar */}
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <span style={{ color: 'orange', fontSize: '30px', fontWeight: '600' }}>RB</span>uilder
                    </Typography>

                    <Button variant="outlined" color="warning">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250, height: '100%', bgcolor: '#ffffffff', color: 'navy' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    <List>
                        {sidebarItems.map((text, index) => (
                            <ListItem button key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

        </Box>
    );
}

export default Header;
