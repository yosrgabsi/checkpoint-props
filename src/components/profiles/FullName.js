import React from "react";

const fullName = (props) => {
  
  console.log(props);

  return (
    <div className="f-name">
      <h2> {props.firstName} {props.lastName}
      </h2>

      
      {props.children}
    </div>
  );
};

export default fullName;