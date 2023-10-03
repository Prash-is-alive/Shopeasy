import React, { useContext } from "react";
import { Context } from "../utils/context";
import Modal from "react-bootstrap/Modal";
import SignIn from "./SignIn";
import Logout from "./Logout";
function MyModal({mode}) {
  const { showModal, setShowModal } = useContext(Context);

  const handleClose = () => setShowModal(false);
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mode==='signIn' && <SignIn />}
          {mode==="logout" && <Logout/>}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default MyModal;
