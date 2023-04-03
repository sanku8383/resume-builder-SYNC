import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAddCircleOutline, MdEdit, MdClose, MdOutlineCancel } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ImCheckmark, ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function Languages() {

  const Language = useSelector(state => state.Language)
  const dispatch = useDispatch();
  const {addLanguage, removeLanguage} = bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  }
  const handleShow = () => setShow(true);
  const [isEdit, setIsEdit] = useState(false);
  const [validated, setValidated] = useState(false);

  const [input, setInput] = useState("")
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handlelanguage = (e) => {
    e.preventDefault();
    const valid = e.currentTarget;
    if (!valid.checkValidity()) {
      setValidated(true);
    }
    else {
      setIsEdit(true);
      addLanguage(input)
      setInput("");
    }
  }

  const handleAlertClose = () => setAlert(false);
  const handleAlert = (id) => {
    setDeleteId(id)
    setAlert(true);
  }
  const handleDelete = (id) => {
    removeLanguage(id)
    setAlert(false);
  }
  useEffect(()=>{
    if (Language.length === 0) {
      setIsEdit(false);
    }
  },[Language])

  return (
    <Row className="justify-content-center mt-2">
      <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
        <h5 className="m-0">Language</h5>
        {!isEdit && <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow} />}
        {isEdit && <MdEdit size={30} className="rounded edit" onClick={handleShow} />}
      </Col>
      <Col md={8} sm={12}>
        <Row className="border-bottom pt-3">
          <Col md={12} className="d-flex flex-wrap">
            {
              Language.map((items, id) => {
                return (
                  <p className="technology rounded" key={id}>{items}</p>
                )
              })
            }


          </Col>
        </Row>

      </Col>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Skills</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} className="d-flex align-item-start mb-2" onSubmit={handlelanguage}>
            <Form.Group className="">
              <Form.Control required type="text" size="sm" placeholder="Enter Language" value={input} onChange={handleInput} />
            </Form.Group>
            <button type="submit" className="rounded edit m-0 mx-2">
              Add Language
            </button>
          </Form>
          <hr></hr>
          <div className="d-flex flex-wrap">
            {
             Language.map((items, id) => {
                return (
                  <p key={id} className="technology rounded ">{items} &nbsp; <MdOutlineCancel className="delete rounded" onClick={() => { handleAlert(id) }} /></p>
                )
              })
            }
          </div>
        </Modal.Body>

      </Modal>
      <Modal show={Alert} onHide={handleAlertClose} className="text-center" size="sm" centered>
        <Modal.Body>
          <h4>Are you sure ?</h4>
          <ImCheckmark size={30} className="rounded edit" onClick={() => { handleDelete(deleteId) }} />
          <ImCross size={25} className="rounded edit" onClick={handleAlertClose} />
        </Modal.Body>
      </Modal>
    </Row>
  )
}


export default Languages
