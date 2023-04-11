import React, { useState } from "react";
import { Box } from "@mui/system";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  //Mobile-false
  //Desktop-True
  //will give us TRUE or FALSE bool depending whether min-w achieved in the screen, if DESKTOP - true, MOBILE - false

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  // console.log(data);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100vh">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {/* flexgrow allow us to take the all other width after 250px of sidebar  */}
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
