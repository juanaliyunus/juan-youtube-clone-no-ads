import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import juan from "../../assets/juan.png";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel to learn coding</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="Like" />
            125
          </span>
          <span>
            <img src={dislike} alt="Dislike" /> 2
          </span>
          <span>
            <img src={share} alt="Share" />
            Share
          </span>
          <span>
            <img src={save} alt="Save" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={juan} alt="Juan" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>{" "}
        <div className="comment">
          <img src={user_profile} alt="User Profile" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>Great video, thanks for the tips!</p>
            <div className="comment-action">
              <img src={like} alt="Like" />
              <span>232</span>
              <img src={dislike} alt="Dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
