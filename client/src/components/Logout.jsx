import React from "react";
import { Button } from "@mui/material";
import { Context } from "../utils/context";
import { useContext } from "react";
export default function Logout() {
  const { setLogged, setShowModal } = useContext(Context);
  function handleLogout() {
    setLogged({ loggedIn: false, loggedInUsername: null });
    sessionStorage.clear();
    setShowModal(false);
  }
  const mystyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  };
  return (
    <>
      <div className="logoutbtn" style={ mystyle }>
        <Button onClick={() => handleLogout()}>Logout</Button>
        <div className="text-muted">Note you will be logged out!</div>
        <div className="text-muted">All your Cart Items will be discarded!</div>
      </div>
    </>
  );
}
