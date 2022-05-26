import React, { useState, useRef, useContext } from 'react';
import {
  Avatar,
  Popper,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../features/auth/auth-context';

const NavbarAuthMenu: React.FC = () => {
  const navigate = useNavigate();
  const { logout, admin } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const userInitials = admin && admin.name && admin.surname
    ? admin.name[0] + admin.surname[0]
    : null;

  return (
    <Box
      ref={popperAnchorRef}
      sx={{ display: 'inline-flex', alignItems: 'center', height: 64 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMenuOpen}
      >
        <Typography sx={{ mr: 2, userSelect: 'none' }}>{admin?.username}</Typography>
        {(userInitials || admin?.img) && <Avatar src={admin?.img}>{userInitials}</Avatar>}
      </Box>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={() => handleNavigate('/dashboard')}>
              ProfilePage
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>
              Atsijungti
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarAuthMenu;
