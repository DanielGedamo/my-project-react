import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { prosArray } from "../../../../Services/prosArray";
function MyPro({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(prosArray[item.name].map());
  // console.log(item);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Get expert 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{prosArray[item.name]?.map((pro)=>{
          return <div ><p>{pro.fullName +"         "}</p> {pro.area +"       "}{pro.age}</div>
        })}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPro;
