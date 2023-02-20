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
import LoaderLogo from "../loader/LoaderLogo";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

    const paths = [
        {
            text: "Home",
            link: "/home",
        },
        {
            text: "Favoritos",
            link: "/favoritos",
        },
        {
            text: "Github",
            link: "/home",
        },
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/keniel-nunes/",
        },
    ];

    const restrictPaths = ["Home", "Github", "LinkedIn"];

    const isScreenSmall = useMediaQuery("(min-width:767px)");

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
                {paths.map(({ text, link }, index) => {
                    const shouldHide =
                        restrictPaths.includes(text) && isScreenSmall;
                    return (
                        <div key={index}>
                            {shouldHide ? (
                                <ListItem
                                    key={index}
                                    style={{ display: "none" }}
                                />
                            ) : (
                                <Link href={link}>
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <FavoriteIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            )}
                        </div>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <nav
            className="w-full flex flex-wrap items-center justify-between py-4 bg-transparent text-white  shadow-lg navbar navbar-expand-lg navbar-light
  "
        >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div
                    className="flex flex-grow items-center"
                    id="navbarSupportedContent"
                >
                    <Link
                        className=" flex items-center text-white hover:text-white focus:text-white mt-2 lg:mt-0 mr-1
      "
                        href="/home"
                    >
                        <LoaderLogo />
                    </Link>
                    <ul className="navbar-nav flex lg:flex-col max-md:hidden gap-4 pl-8 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <Link
                                className="hover:text-[#FF4655] duration-300"
                                href="/home"
                                rel="noreferrer"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item p-2">
                            <a
                                className="hover:text-[#FF4655] duration-300"
                                href="https://github.com/KenielDev"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a
                                className="hover:text-[#FF4655] duration-300"
                                href="https://www.linkedin.com/in/keniel-nunes/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                LinkedIn
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
