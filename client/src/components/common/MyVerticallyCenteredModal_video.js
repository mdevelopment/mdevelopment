import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import ModalTitle from 'react-bootstrap/ModalTitle';
//import ModalBody from 'react-bootstrap/ModalBody';

import '../../MyFonts.css'



class MyVerticallyCenteredModal extends Component {
 

  render() {
    const {image} = this.props.post;
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
          {/*  <img src={image}
            alt=""/>*/}

    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/sanWdJ7rqbQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
        
        </Modal.Body>
      {/*  <Modal.Footer> */}
          <Button style={{background:'#dffdae', border:'0', color:'#666666'}} onClick={this.props.onHide} >CloseTEST</Button>
        {/* </Modal.Footer>*/}
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;