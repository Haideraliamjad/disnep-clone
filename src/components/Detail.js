import React from "react";
import "./Detail.css";
const Detail = () => {
  return (
    <>
      <div className="moviedetail">
        <div className="detail-box">
          <div className="img-box">
            <img src="images/BowLogo.png" alt="logo" className="img-movie" />
          </div>
          <div className="movie-description">
            <div className="buttons-section">
              <button className="primary-button">
                <img
                  width="20"
                  height="20"
                  src="images/play-icon-black.png"
                  alt="res"
                />
                Resume
              </button>
              <button className="secandory-button">
                <img
                  width="20"
                  height="20"
                  src="images/play-icon-white.png"
                  alt="res"
                />
                Play Trailer
              </button>
            </div>
            <h6 className="res">HD + 5.1 - 2021</h6>
            <p className="movie_deta">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
