import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import ModalTitle from 'react-bootstrap/ModalTitle';
//import ModalBody from 'react-bootstrap/ModalBody';

import '../../MyFonts.css'



class MyVerticallyCenteredModal extends Component {
 

  render() {
    const {image} = this.props.post;
     const {song} = this.props.post;

    //console.log("WHAT ARE THE PASSED PROPS?! "+ JSON.stringify(this.props.post.name));
    return (


      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/*  <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>*/}
        <Modal.Body style={{background:'#000000', border:'0', color:'#666666'}}>
          <img src={image}
            alt=""/>

         
                    



        </Modal.Body>
      {/*  <Modal.Footer> */}
      <div style={{margin:'auto', width:'100%',textAlign:'center',paddingBottom:'8px', backgroundColor:'#000'}}>
       <audio controls autoPlay >
            <source src={song} type="audio/mpeg"/>
          </audio>
          </div>
          <Button style={{background:'#dffdae', border:'0', color:'#666666'}} onClick={this.props.onHide} >Close</Button>
        {/* </Modal.Footer>*/}
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;