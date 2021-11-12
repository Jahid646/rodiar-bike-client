import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";



import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardHome from "../DashboardHome/DashboardHome";


import AddBike from "../AddBike/AddBike";
import { Container } from "react-bootstrap";
import ManageAllOrders from "../MangeAllOrders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import PostReview from "../PostReview/PostReview";
import ManageAllBike from "../ManageAllBike/ManageAllBike";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      
      
      <Link to='/' style={{textDecoration: 'none'}}>
        <Button color="inherit">Home</Button>
      </Link>
      <br/>

      <Link to={`${url}`} style={{textDecoration: 'none'}}>
        <Button color="inherit">Dashboard</Button>
      </Link>

      <Link to={`${url}/my-orders` } style={{textDecoration: 'none'}}>
        <Button color="inherit">My Orders</Button>
      </Link>
      <br/>

      <Link to={`${url}/payment` } style={{textDecoration: 'none'}}>
        <Button color="inherit">Payment</Button>
      </Link>

      <Link to={`${url}/post-review` } style={{textDecoration: 'none'}}>
        <Button color="inherit">Post a Review</Button>
      </Link>

      <Divider />

       <Box>
        <Link to={`${url}/makeAdmin`} style={{textDecoration: 'none'}}>
        <Button color="inherit">Make Admin</Button>
      </Link>

      <Link to={`${url}/manage-all-orders`} style={{textDecoration: 'none'}}>
        <Button color="inherit">Manage Orders</Button>
      </Link>

      <Link to={`${url}/manage-all-bikes`} style={{textDecoration: 'none'}}>
        <Button color="inherit">Manage All Bikes</Button>
      </Link>

      <Link to={`${url}/add-bike`} style={{textDecoration: 'none'}}>
        <Button color="inherit">Add Bikes</Button>
      </Link>
        </Box>

        <Button color="">Logout</Button>
      
    
      
      
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
          backgroundColor:"white"
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
          <Typography sx={{color: 'black'}} variant="h6" noWrap component="div">
            Dashboard
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
          <Route exact path={path}>
          <DashboardHome></DashboardHome>
          </Route>

          <Route path={`${path}/my-orders`}>
             <MyOrders></MyOrders>
          </Route>

          <Route path={`${path}/payment`}>
             <Payment></Payment>
          </Route>

          <Route path={`${path}/post-review`}>
             <PostReview></PostReview>
          </Route>

          <Route path={`${path}/makeAdmin`}>
             <MakeAdmin></MakeAdmin>
          </Route>

          <Route path={`${path}/manage-all-orders`}>
             <ManageAllOrders></ManageAllOrders>
          </Route>

          <Route path={`${path}/manage-all-bikes`}>
             <ManageAllBike></ManageAllBike>
          </Route>

          <Route path={`${path}/add-bike`}>
              <AddBike></AddBike>
          </Route>
        </Switch>
        <Typography paragraph></Typography>
      </Box>
    </Box>
      </Container>
    
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;