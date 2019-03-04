import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import ModalTitle from 'react-bootstrap/ModalTitle';
//import ModalBody from 'react-bootstrap/ModalBody';

import '../../MyFonts.css'





class MyVerticallyCenteredModal extends Component {
 
  render() {
    const {video} = this.props.post;
    //console.log("WHAT ARE THE PASSED PROPS?! "+ JSON.stringify(this.props.post.name));
    const MyVideo = `https://www.youtube.com/embed/${video}`
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
            <div  style={{position: 'relative', paddingBottom: '56.25%', /* 16:9 */ paddingTop: '25px', height: '0'}}>

          <iframe title={video}  scrolling="no" width="100%" height="auto"  type="text/html" 
          src={MyVideo}  style= {{position:'absolute', top:'0', left: '0', width: '100%', height: '100%'}}>
          
          </iframe>

          </div>

        
        </Modal.Body>
      {/*  <Modal.Footer> */}
          <Button style={{background:'#dffdae', border:'0', color:'#666666'}} onClick={this.props.onHide} >Close</Button>
        {/* </Modal.Footer>*/}
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;