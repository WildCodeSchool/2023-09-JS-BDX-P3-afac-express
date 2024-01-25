import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function Modal() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);

  return (
    <MDBModal
      staticBackdrop
      tabIndex="-1"
      open={staticModal}
      setOpen={setStaticModal}
    >
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Modifications apportées</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={toggleOpen} />
          </MDBModalHeader>
          <MDBModalBody>...</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleOpen}>
              Close
            </MDBBtn>
            <MDBBtn>Ok</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}

export default Modal;
