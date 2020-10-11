import React from 'react';
import PropTypes from 'prop-types';
import { CartProvider } from '../custom-hooks/use-cart';
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import "../styles/global.scss"
import MainMenu from "../components/mainMenu"
import Footer from "../components/footer"

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft  } from '@fortawesome/free-solid-svg-icons'
import { CssBaseline } from '@material-ui/core';
import theme from '../theme/theme'

library.add(faFacebookSquare, faInstagram, faTwitterSquare, faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft)

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
	width: drawerWidth,
	backgroundColor: '#000',
  },
  content: {
	flexGrow: 1,
	backgroundColor: theme.palette.grey[900],
  },
  main: {
	padding: theme.spacing(3),
  }
}));

function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <React.Fragment>
	  <MainMenu />
    </React.Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
    	<ThemeProvider theme={theme}>
			<CssBaseline />
			<CartProvider>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Responsive drawer
					</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden lgUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
						paper: classes.drawerPaper,
						}}
						ModalProps={{
						keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
					</Hidden>
					<Hidden mdDown implementation="css">
					<Drawer
						classes={{
						paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
					</Hidden>
				</nav>
				<div className={classes.content}>
					<div className={classes.toolbar} />
					<main className={classes.main}>
						{props.children}
					</main>
					<Footer/>
				</div>
			</CartProvider>
		</ThemeProvider>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Layout;