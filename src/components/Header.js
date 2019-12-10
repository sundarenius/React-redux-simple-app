import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className="header-toolbar" position="static">
          <Toolbar>
            <IconButton onClick={props.setSidebar} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Picagram
            </Typography>
            <Link to="/">
              <Button color="primary">Main</Button>
            </Link>
            <Link to="/archive">
              <Button color="primary">Archive</Button>
            </Link>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
