import React from "react";
import "./Testing.css";

const Testing = () => {
  return (
    <div className="row" id="DIV_1">
      <div
        className="col-lg-6 col-sm-12 local_home_leftSide  mt-5 pt-5"
        id="DIV_2"
      >
        <h1 className="local_home_title" id="H1_3">
          Sell your recyclables <br id="BR_4" />
          online with{" "}
          <span className="highlight" id="SPAN_5">
            Scrappe!
          </span>
        </h1>
        <div className="local_home_sub_title" id="DIV_6">
          <span className="local_home_pickup_items" id="SPAN_7">
            Paper - Plastics - Metals - Appliances{" "}
          </span>

          <br id="BR_10" />
        </div>
        <img
          src="https://ikp.edgekit.net/h1rxzpffx/scrapuncle/assets/ScrapuncleHomeBanner_ky5a6zP3j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663270651534"
          alt="assets"
          style={{
            maxHeight: 200,
            width: "auto",
            marginTop: 10,
            marginLeft: 50,
          }}
          id="IMG_11"
        />
      </div>
      <div className="col-lg-6 login-mobile-box" id="DIV_12">
        <div
          id="DIV_13"
          className="local_home_rightSide"
          style={{
            height: "75vh",
          }}
        >
          <div className="login_form_open" id="DIV_14">
            <div className="local_login_form" id="DIV_15">
              <div id="DIV_16">
                <form id="FORM_17">
                  <h4 className="local_login_title" id="H4_18">
                    Schedule a Pickup
                  </h4>
                  <p className="local_mobile_text" id="P_19">
                    Mobile
                  </p>
                  <div className="local_input_box " id="DIV_20">
                    <span
                      style={{
                        width: "2rem",
                      }}
                      id="SPAN_21"
                    >
                      +91
                    </span>
                  </div>
                  <p className="error_para" id="P_23"></p>
                  <ion-button
                    type="submit"
                    className="local_next_button md button button-solid ion-activatable ion-focusable"
                    id="ION-BUTTON_24"
                  >
                    {" "}
                    NEXT{" "}
                  </ion-button>
                  <p className="help_text  support_number" id="P_25">
                    Facing Problems? Call us at{" "}
                    <a href="tel:+918595358613" id="A_26">
                      {" "}
                      +918595358613
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
