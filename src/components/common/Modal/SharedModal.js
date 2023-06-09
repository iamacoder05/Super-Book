import React from 'react';
import { Modal } from 'react-bootstrap';
import "./SharedModal.css";
import logo from '../../../assets/logo/SUPERBOOK.png';
function SharedModal({ show, onClose, children,centered }) {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <>
    {/* <div className={`modal fade show d-block ${styles["custom-modal"]}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
     */}
     {/* <Modal size="lg" show={isOpen} onHide={onClose} centered className={styles["custom-modal"]}>
      <Modal.Header closeButton className="justify-content-center border-0">
        <Modal.Title className="text-center w-100">Super Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal> */}

    <Modal size='xl' show={show} onHide={onClose} centered className="custom-modal ">
      <Modal.Header closeButton className="justify-content-center border-0">
        <Modal.Title className="text-center w-100">
          <img src={logo} />
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>


    
    </>
  );
}

export default SharedModal;
