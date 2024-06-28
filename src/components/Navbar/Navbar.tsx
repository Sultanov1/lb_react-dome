import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button} from '@mui/material';
import { styled } from '@mui/system';

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'inherit',
  '&.active': {
    color: '#f50057',
    fontWeight: 'bold',
  },
});

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={StyledNavLink} to="/" end>
          Home
        </Button>
        <Button color="inherit" component={StyledNavLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={StyledNavLink} to="/contacts">
          Contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
