import React from "react";
import "./planCard.css";
import check from "../../images/check.svg";

const Check = () => {
  return (
    <>
      <img src={check} alt="" />
    </>
  );
};

const PlanCard = (props) => {
  const {
    heading,
    type,
    price,
    yearlyPrice,
    includedUsers,
    btnText,
    listHeading,
    list,
  } = props.props;

//   console.log(props);
  return (
    <>
      <div className="plan-card">
        <h3>{heading}</h3>
        <span>{type}</span>
        <div className="price-section">
          
          {heading === "Enterprise" ? (
            <></>
          ) : (
            <>
              
              <span className="price-heading">{price}</span>
          <span className="price">${price}/months</span>
          <span className="yearly-price">{yearlyPrice}</span>
          <span className="user-count">{includedUsers}</span>
              <div>
                <p>Included users</p>
                <span>1</span>
              </div>
              <span className="discount-title">Next discount at 6 users</span>
            </>
          )}
        </div>
        <button>{btnText}</button>
        <div className="bottom-list">
          <h3>{listHeading}:</h3>
          <ul>
            {list.map((text, index) => {
              return (
                <li key={index}>
                  <Check />
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <h4>Compare Plan</h4>
      </div>
    </>
  );
};

export default PlanCard;
