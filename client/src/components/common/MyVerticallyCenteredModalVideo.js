import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import ModalTitle from 'react-bootstrap/ModalTitle';
//import ModalBody from 'react-bootstrap/ModalBody';

import '../../MyFonts.css'





class MyVerticallyCenteredModal extends Component {

  getEmbedUrl(videoValue) {
    const value = (videoValue || '').trim();

    if (!value) {
      return '';
    }

    try {
      const url = new URL(value);
      const host = url.hostname.replace(/^www\./, '');
      let id = '';

      if (host === 'youtu.be') {
        id = (url.pathname.split('/')[1] || '').trim();
      } else if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
        if (url.pathname === '/watch') {
          id = (url.searchParams.get('v') || '').trim();
        } else if (url.pathname.startsWith('/shorts/') || url.pathname.startsWith('/embed/') || url.pathname.startsWith('/live/')) {
          id = (url.pathname.split('/')[2] || '').trim();
        }
      }

      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    } catch (error) {
      // Non-URL inputs can still be raw YouTube IDs.
    }

    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
      return `https://www.youtube.com/embed/${value}`;
    }

    return value;
  }
 
  render() {
    const {video} = this.props.post;
    //console.log("WHAT ARE THE PASSED PROPS?! "+ JSON.stringify(this.props.post.name));
    const MyVideo = this.getEmbedUrl(video);
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

          <iframe title={video || 'video'}  scrolling="no" width="100%" height="auto"  type="text/html"
          src={MyVideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style= {{position:'absolute', top:'0', left: '0', width: '100%', height: '100%'}}>
          
          </iframe>

          </div>

        
        </Modal.Body>
      {/*  <Modal.Footer> */}
          <Button style={{background:'#ccf2ff', border:'0', color:'#666666'}} onClick={this.props.onHide} >Close</Button>
        {/* </Modal.Footer>*/}
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;