import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { prosArray } from "../../../../Services/prosArray";
import MyproCard from "../../MyproCard/MyproCard";
function MyPro({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(prosArray[item.name].map());
 
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Get expert 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flxe">
            <div className="row">
 {prosArray[item.name]?.map((pro,index)=>
          <MyproCard pro={pro} key={index}/>
          
        )}
            </div>
          </div>
         </Modal.Body>
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
