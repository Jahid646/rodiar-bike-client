import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardHome from "../DashboardHome/DashboardHome";

import AddBike from "../AddBike/AddBike";
import { Button as BTN, Container } from "react-bootstrap";
import ManageAllOrders from "../MangeAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import PostReview from "../PostReview/PostReview";
import ManageAllBike from "../ManageAllBike/ManageAllBike";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import { BentoOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { admin, user, logOut } = useAuth();

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ ml: 5 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{marginTop:3}} color="inherit">Home</Button>
        </Link>
        <br />

        <Link to={`${url}/my-orders`} style={{ textDecoration: "none" }}>
          <Button sx={{marginTop:3}} color="inherit">My Orders</Button>
        </Link>
        <br />

        <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
          <Button sx={{marginTop:3}} color="inherit">Payment</Button>
        </Link>

        <Link to={`${url}/post-review`} style={{ textDecoration: "none" }}>
          <Button sx={{marginTop:3}} color="inherit">Post a Review</Button>
        </Link>
      </Box>

      <Divider />
      

      <Box sx={{ ml: 5 }}>
        {admin && (
          <div>
           
           
            <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>
              <Button sx={{marginTop:3}} className="" color="inherit">
                Make Admin
              </Button>
            </Link>
            
            <Link
              to={`${url}/manage-all-orders`}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{marginTop:3}} color="inherit">Manage Orders</Button>
            </Link>
            
            <Link
              to={`${url}/manage-all-bikes`}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{marginTop:3}}>Manage All Bikes</Button>
            </Link>
            
            <Link to={`${url}/add-bike`} style={{ textDecoration: "none" }}>
              <Button sx={{marginTop:3}}>Add Bikes</Button>
            </Link>
          </div>
        )}

        <Link to="/">
          <BTN
            key="logoutkey"
            onClick={logOut}
            className=" "
            variant="outline-danger"
            style={{marginTop:10}}
          >
            Logout<i className="fas fa-sign-out-alt"></i>
          </BTN>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "white",
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ color: "black", fontWeight:700 }}
              variant="h5"
              noWrap
              component="div"
            >
             <span className="text-danger">Welcome</span>  Mr. {user.displayName}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <Switch>
            <PrivateRoute exact path={path}>
              <DashboardHome></DashboardHome>
            </PrivateRoute>

            <PrivateRoute path={`${path}/my-orders`}>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path={`${path}/payment`}>
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute path={`${path}/post-review`}>
              <PostReview></PostReview>
            </PrivateRoute>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <AdminRoute path={`${path}/manage-all-orders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>

            <AdminRoute path={`${path}/manage-all-bikes`}>
              <ManageAllBike></ManageAllBike>
            </AdminRoute>

            <AdminRoute path={`${path}/add-bike`}>
              <AddBike></AddBike>
            </AdminRoute>
          </Switch>
          <Typography paragraph></Typography>
        </Box>
      </Box>
    </Container>
  );
}

Dashboard.propTypes = {
 
  window: PropTypes.func,
};

export default Dashboard;
