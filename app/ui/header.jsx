"use client";
// @refresh reset

import UserContext from "@/src/contexts/UserContext";
import useWindowSize from "@/app/hooks/useWindowsSize";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Header() {
  const { isAuthenticated, userData, logout } = useContext(UserContext);
  const [userState, setUserState] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter()
  const [mobile, setMobile] = useState(false);

  const open = Boolean(anchorEl);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 1080) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  const handleLogout = () => {
    logout();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(
    () => {
      if (isAuthenticated) {
        setUserState(
          <div>
            <a className="cursor-pointer" onClick={handleClick}>
              {userData.name}
            </a>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={router.push('/dashboard')}>Meus treinamentos</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </div>
        );
      } else {
        setUserState(
          <div className="flex justify-center items-center gap-7">
            <Link
              href="/auth/signup"
              className="hover:text-volks-blue ease-in-out duration-200 uppercase text-black no-underline px-7 py-1"
            >
              Cadastre-se
            </Link>
            <Button
              href="/auth/signin"
              variant="outlined"
              className="uppercase text-black no-underline px-7 py-1"
            >
              Entrar
            </Button>
          </div>
        );
      }
    },
    [isAuthenticated, userData, anchorEl, open, router]
  );

  return (
    <>
      {!mobile ? (
        <div className="flex flex-row items-center justify-center p-4">
          <div className="flex-none"></div>

          <div className="grow flex justify-center divide-x divide-black">
            <Link
              underline="none"
              color="inherit"
              className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2"
            >
              Treinamentos
            </Link>
            <Link
              underline="none"
              color="inherit"
              className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2"
            >
              Peças VW
            </Link>
            <Link
              underline="none"
              color="inherit"
              className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2"
            >
              Catálogo Economy
            </Link>
            <Link
              underline="none"
              color="inherit"
              className="hover:text-volks-blue ease-in-out duration-200 cursor-pointer px-7 py-2"
            >
              Notícias
            </Link>
          </div>

          <div className="flex-none">{userState}</div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center p-4">
          <div className="justify-items-center">{userState}</div>
        </div>
      )}
    </>
  );
}
