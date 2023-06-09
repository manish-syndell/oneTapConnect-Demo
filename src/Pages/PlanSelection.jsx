import React, { useState } from "react";
import "./planSelection.css";
import logo from "../images/Group.svg";
import button1 from "../images/Branding.svg";
import cross from "../images/notSelected.svg";
import selected from "../images/selected.svg";
import button2 from "../images/Branding (1).svg";
import PlanCard from "../components/plans/PlanCard";
import plandata from "../Data/planData.json";

const Cancel = () => {
  return <img src={cross} alt="oneTapConnet cancel" width={"21px"} />;
};
const Checked = () => {
  return <img src={selected} alt="oneTapConnet cancel" width={`25px`} />;
};

const PlanSelection = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    // console.log(isActive)
  };

  return (
    <>
      <header className="header-section">
        <img src={logo} alt="" />
        <div></div>
      </header>
      <div className="main-container">
        <h1>Get Started with OneTapConnect</h1>
        <p className="header-text">
          This information will be used as a default for your OneTapConnect
          cards (Those can be override when creating templates and cards). If
          you’re looking to update your company information for billing, visit
          Account & Billing.
        </p>
        <div className="top-buttons">
          <button>
            <img src={button2} alt="oneTaoConnect Select plan" />
          </button>
          <span>or</span>
          <button>
            <img src={button1} alt="oneTaoConnect book a demo" />
          </button>
        </div>
        <h2>Plan selection</h2>

        <div className={`sliding-switch ${isActive ? "active" : ""}`}>
          <div className="switch-handle"></div>
          <div className="switch-text">
            <span
              className={`switch-text-option ${isActive ? "active" : ""}`}
              onClick={handleToggle}
            >
              Pay Monthly
            </span>
            <span
              className={`switch-text-option ${!isActive ? "active" : ""}`}
              onClick={handleToggle}
            >
              Pay Upfront and Save
              <br />
              20%
            </span>
          </div>
        </div>
        <div className="plan-selection-section">
          {plandata &&
            plandata.map((plans, i) => {
              return <PlanCard props={plans} key={i} />;
            })}
        </div>
        <p className="optional-info">****Optional Info</p>
        {/* <h2>Plan Comparision</h2> */}
        <div className="plan-comparision-section">
          <table>
            <caption>Plan Comparision</caption>
            <tbody>
              <tr>
                <th style={{ fontSize: "25px", width: "300px" }}>Feature</th>
                <th>Starter</th>
                <th>Proffestional</th>
                <th>Team</th>
                <th>Enterprise</th>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>CARD BUILDER</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Design Elements</td>
                <td>Basic</td>
                <td>Advance</td>
                <td>Advance</td>
                <td>Advance</td>
              </tr>
              <tr>
                <td>Create Templates</td>
                <td>
                  <Cancel />
                </td>
                <td>Up to 3</td>
                <td>Up to 8</td>
                <td>20+</td>
              </tr>
              <tr>
                <td>youtube/Vimeo videos*</td>
                <td>Up to 3</td>
                <td>Up to 6</td>
                <td>Up to 6</td>
                <td>Up to 6</td>
              </tr>
              <tr>
                <td>Upload Video / Branded player</td>
                <td>
                  <Cancel />
                </td>
                <td>2GB storage limit</td>
                <td>2GB storage limit</td>
                <td>5GB storage limit</td>
              </tr>
              <tr>
                <td># of Gallery / # images</td>
                <td>1 Gallery - up to 12 images</td>
                <td>2 Gallery - up to 12 images/gallery</td>
                <td>2 Gallery - up to 12 images/gallery</td>
                <td>Customizable</td>
              </tr>
              <tr>
                <td>Testimonials</td>
                <td>Up to 3</td>
                <td>Up to 10</td>
                <td>Up to 10</td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Team</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Organize user by group</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Custome fields</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Generate email signature</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Zoom Background QR code</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Card scanner</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Single Sign-in</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Sharing options</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Share by text</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Share by email</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Share by social media</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>CRM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Personalize sharing messages</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Create List</td>
                <td>
                  <Cancel />
                </td>
                <td>
                <div style={{display:'flex',alignItems:'center',gap:'10px',width:'inherit'}}>
                    <Checked />
                    <span>Up to 5</span>
                  </div>
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Create Tags</td>
                <td>
                  <Cancel />
                </td>
                <td>
                <div style={{display:'flex',alignItems:'center',gap:'10px',width:'inherit'}}>
                    <Checked />
                    <span>Up to 30</span>
                  </div>
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Automated Notifications</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Form Builder</td>
                <td>
                  <Cancel />
                </td>
                <td>
                <div style={{display:'flex',alignItems:'center',gap:'10px',width:'inherit'}}>
                    <Checked />
                    <span>Up to 30</span>
                  </div>
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Lead custom note</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Lead Live pictures</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Live chat integration</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Analytics</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Basic</td>
                <td>Advanced</td>
                <td>Advanced</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Facebook Pixel</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Team Analytics</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Permalink/QR code</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Customize URL</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Bring yor domain</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Sales Training</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sale academy</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Expose and Close</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>1 on 1 sales training</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Support Levels</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Video onboarding</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>1 ob 1 onboarding</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Design my card</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>
                  <div style={{display:'flex',alignItems:'center',gap:'10px',width:'inherit'}}>
                    <Checked />
                    <span>Mastery Template<br/> only</span>
                  </div>
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Full concierge service</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr style={{ backgroundColor: "white" }}>
                <td>Integrations</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Zapier</td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  {" "}
                  <Checked />
                </td>
                <td>
                  {" "}
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Google Business</td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Calendly</td>
                <td>
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>HUbSpot</td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
              <tr>
                <td>Salesforce</td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  {" "}
                  <Cancel />
                </td>
                <td>
                  <Checked />
                </td>
                <td>
                  <Checked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlanSelection;
