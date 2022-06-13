import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Group 33069.png';

const styles = makeStyles({
  root: {
    backgroundColor: '#f7f7f7 !important',
    boxShadow: 'none !important',
    padding: '6px 0px !important',
  },
  logoImg: {
    height: '50px',
  },
  flex: {
    display: 'flex !important',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blackText: {
    color: '#000 !important',
  },
  linkText: {
    color: '#000 !important',
    textDecoration: 'none',
    '&:hover': {
      color: '#f060f0 !important',
    },
    margin: '0px 10px',
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#251D58 !important',
    color: '#fff !important',
    fontSize: '14px !important',
    fontWeight: '600 !important',
    padding: '10px 25px !important',
    textDecoration: 'none !important',
    borderRadius: '5px !important',
  },
});

const navLinks = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/projects', name: 'Projects' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/admin', name: 'Admin' },
];

const Navbar = () => {
  const style = styles();
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" className={style.root}>
      <Container className={style.flex}>
        <Grid item>
          <img className={style.logoImg} src={logo} alt="" />
        </Grid>
        <Grid className={style.flex} item>
          <Grid item>
            {navLinks.map(({ id, path, name }) => (
              <NavLink key={id} to={path} className={style.linkText}>
                {name}
              </NavLink>
            ))}
          </Grid>
        </Grid>
        <Grid className={style.blackText} item>
          <Button
            onClick={() => navigate('/login')}
            className={style.btn}
            variant="contained"
          >
            LogIn
          </Button>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
