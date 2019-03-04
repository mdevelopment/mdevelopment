import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup2 from '../common/TextFieldGroup2';
import { addPost } from '../../actions/postActions';
import adminKey from '../../utils/adminKey';


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      video:'',
      song:'',
      link:'',
      image:'',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
   if (JSON.stringify(adminKey.adminKey) !==  JSON.stringify(user.id)) {
    return;
   }
  


    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
      video: this.state.video,
      song: this.state.song,
      link: this.state.link,
      image: this.state.image
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
    this.setState({ video: '' });
    this.setState({ song: '' });
    this.setState({ link: '' });
    this.setState({ image: '' });



  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    let authPrivelidges;

   if (JSON.stringify(adminKey.adminKey) ===  JSON.stringify(user.id)) {
   
     authPrivelidges = <div><h3>YOU'VE GOT AUTH PRIVLIDGES</h3></div>
   } else {

     authPrivelidges = <div><h3>YOU DO NOT HAVE AUTHORIZATION PRIVLIDGES</h3></div>
   
   }

    return (
      <div className="post-form mb-0" >
        <div className="card card-body bg-dark mb-0 border-0" style={{  border:'none', opacity:'1'}}>
         {/* <div className="card-header  text-white">Say Somthing...</div>

        
       */}
       <div>{authPrivelidges}</div>
         
          <div className="" style={{ opacity:'1'}}>
            <form  onSubmit={this.onSubmit} >
              <div className="form-group rounded-5">
                <TextAreaFieldGroup
                  placeholder="Create a post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
               <TextFieldGroup2
                  placeholder="Video"
                  name="video"
                  value={this.state.video}
                  onChange={this.onChange}
               
                />
               
                 <TextFieldGroup2
                  placeholder="Song"
                  name="song"
                  value={this.state.song}
                  onChange={this.onChange}
                
                />
                 <TextFieldGroup2
                  placeholder="Link"
                  name="link"
                  value={this.state.link}
                  onChange={this.onChange}
             
                />
                 <TextFieldGroup2
                  placeholder="Image"
                  name="image"
                  value={this.state.image}
                  onChange={this.onChange}
             
                /> 
              </div>

              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </form>

          </div>


        </div>
     
        <br/>
            <br/>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
