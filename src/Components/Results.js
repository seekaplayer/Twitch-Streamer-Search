import React from "react";
import Button from "./Button";

const Results = ({ dataRender, toggleRender }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Button
            buttonClass="btn btn-twitch btn-lg"
            buttonText="Back to Search"
            buttonOnClick={toggleRender}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <img
            className="img-fluid"
            src={dataRender && dataRender.data[0].offline_image_url}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-12 d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle profile_image mx-auto"
                    src={dataRender && dataRender.data[0].profile_image_url}
                  />
                </div>
                <div className="col-md-9 col-sm-8 col-12">
                  <div className="mt-3">
                    <h2 className="text-center">
                      {dataRender && dataRender.data[0].display_name}
                      <hr />
                    </h2>
                  </div>
                  {dataRender && dataRender.data[0].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
