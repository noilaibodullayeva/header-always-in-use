import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ShoppingCartRounded } from "@mui/icons-material";
import DrawerComp from "./Drawercomponent";
import Drawercomponent from "./Drawercomponent";

const Pages = ["Services", "Products", "ContactUs", "AboutUs"]

function Header() {

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch)
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: '#063970' }}>
                <Toolbar>
                    <ShoppingCartRounded />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize:'1.5rem', pl:'10%'}}>
                                    Lorem
                                </Typography>
                                <Drawercomponent />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ marginLeft: 'auto' }}
                                    textColor='#fff'
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="secondary">
                                        {
                                            Pages.map((page, index) => (
                                                <Tab key={index} label={page}/>
                                            ))
                                        }
                                    {/* <Tab label='Products' />
                                    <Tab label='Services' />
                                    <Tab label='ContactUs' />
                                    <Tab label='AboutUs' /> */}
                                </Tabs>
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>Login{" "}</Button>
                                <Button sx={{ marginLeft: '10px' }} variant='contained'>SignUp</Button>
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default Header