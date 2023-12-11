import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Pages = ["Services", "Products", "ContactUs", "AboutUs", "LogIn", "LogOut"]

function Drawercomponent() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', ml: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </React.Fragment>
    )
}

export default Drawercomponent