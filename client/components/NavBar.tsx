import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => (
  <Box flexGrow={1}>
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <Button component="a" color="inherit">
            Home
          </Button>
        </Link>

        <Link href="/about">
          <Button component="a" color="inherit">
            About
          </Button>
        </Link>

        <Typography flex={1} fontStyle="italic" textAlign="right">
          Next Apollo Demo
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
