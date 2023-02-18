/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

type Anchor = "top" | "left" | "bottom" | "Menu";

export function NavBar() {
    const [state, setState] = React.useState({
        Menu: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            className="bg-red-500 h-screen text-white"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Favoritos"].map((text, index) => {
                    return (
                        <div key={index}>
                            <Link href="/favoritos">
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FavoriteIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </div>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <nav
            className=" relative w-full flex flex-wrap items-center justify-between py-4 bg-transparent text-white  shadow-lg navbar navbar-expand-lg navbar-light
  "
        >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button
                    className=" navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        className="w-6"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
                <div
                    className="collapse navbar-collapse flex-grow items-center"
                    id="navbarSupportedContent"
                >
                    <a
                        className=" flex items-center text-white hover:text-white focus:text-white mt-2 lg:mt-0 mr-1
      "
                        href="#"
                    >
                        <img className="h-4" alt="logo" loading="lazy" />
                    </a>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <a
                                className="nav-link text-white hover:text-white focus:text-white p-0"
                                href="#"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center relative">
                    {(["Menu"] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button
                                sx={{ color: "white", fontWeight: "bold" }}
                                onClick={toggleDrawer(anchor, true)}
                            >
                                {anchor}
                            </Button>
                            <Drawer
                                anchor={"right"}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </nav>
    );
}
