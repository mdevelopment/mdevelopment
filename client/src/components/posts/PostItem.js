import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import MyVerticallyCenteredModal from "../common/MyVerticallyCenteredModal";
import MyVerticallyCenteredModalSong from "../common/MyVerticallyCenteredModalSong";
import MyVerticallyCenteredModalVideo from "../common/MyVerticallyCenteredModalVideo";
import "../../MyFonts.css";
//import formatDate from '../../utils/formatDate';
//import mimg from '../../img/boomboomboom.jpg'

class PostItem extends Component {
  constructor(...props) {
    super(...props);

    this.state = { modalShow: false };
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter((like) => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    //console.log("WHAT IS THE AUTH: "+ JSON.stringify(auth));
    let modalClose = () => this.setState({ modalShow: false });
    const date = this.props.post.date;
    const formattedDate = date.substring(0, Math.min(10));
    //console.log("MY PROPS: "+ JSON.stringify(this.props.post.date));

    const length = 40; // set to the number of characters you want to keep
    const pathname = post.link;
    const trimmedPathname =
      pathname.substring(0, Math.min(length, pathname.length)) + "...";

    const linkURL = (
      <div>
        {" "}
        <h2>
          {" "}
          <a
            target="_blank"
            href={post.link}
            style={{
              fontSize: ".7em",
              color: "white",
              textDecoration: "underline!important",
            }}
          >
            {" "}
            <span className="respBR"> {trimmedPathname} </span>
          </a>{" "}
        </h2>
        <br />{" "}
      </div>
    );

   // console.log("VIDEO: " + post.video);

    let whichModal;

    if (post.song) {
      whichModal = (
        <MyVerticallyCenteredModalSong
          show={this.state.modalShow}
          onHide={modalClose}
          post={post}
        />
      );
    } else if (post.video) {
      whichModal = (
        <MyVerticallyCenteredModalVideo
          show={this.state.modalShow}
          onHide={modalClose}
          post={post}
        />
      );
    } else {
      whichModal = (
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
          post={post}
        />
      );
    }

    return (
      <div
        className="card card-body border-0 postItemTop"
        style={{
          marginBottom: "25px",
          backgroundColor: "rgba(0, 61, 115, .6)",
        }}
      >
        <div className="row ">
          <div
            style={{ cursor: "pointer" }}
            className="col-md-3"
            onClick={() => this.setState({ modalShow: true })}
          >
            <img className="postImg" src={post.image} alt="" />
            <br /> {/* <p className="text-center">{post.name}</p>*/}{" "}
          </div>
          {whichModal}{" "}
        
          <div className="col-md-9" style={{}}>
            <h4> {formattedDate} </h4>{" "}
            <h2 className="lead text-light"> {post.text} </h2>{" "}
            <div> {post.link ? linkURL : null} </div> <br />{" "}
            <div
              className="d-flex p-0 justify-content-end col-md-12"
              style={{ position: "absolute", bottom: "-10px", right: "0px" }}
            >
              {" "}
              {showActions ? (
                <span>
                  <button
                    onClick={this.onLikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-sm btn-light mr-1 likeBtn"
                  >
                    <i
                      className={classnames("fas fa-thumbs-up ", {
                        "text-info": this.findUserLike(post.likes),
                      })}
                    />{" "}
                    <span className="badge badge-light likeBtn">
                      {" "}
                      {post.likes.length}{" "}
                    </span>{" "}
                  </button>

                  <button
                    style={{
                      paddingTop: "4px",
                      paddingBottom: "4px",
                      paddingLeft: "6px",
                      paddingRight: "6px",
                    }}
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-sm btn-light mr-1 unlikeBtn"
                  >
                    <i
                      className="fas fa-thumbs-down"
                      style={{ position: "relative", top: "2px" }}
                    />{" "}
                  </button>
                  {/* 
                      <Link
                    to={`/post/${post._id}`}
                    className="btn btn-sm btn-light mr-1 commentsBtn"
                    style={{ height: "1.85em" }}
                  >
                    Comments{" "}
                  </Link>
                  */}
              
                  {post.user === auth.user.id ? (
                    <button
                      onClick={this.onDeleteClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-sm  mr-1 deleteBtn"
                    >
                      <i className="fas fa-times" />
                    </button>
                  ) : null}
                </span>
              ) : null}{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
