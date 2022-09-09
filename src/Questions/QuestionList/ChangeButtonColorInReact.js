import React, { useState } from "react";

const ChangeButtonColorInReact = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? "salmon" : "",
          color: isActive ? "white" : "",
        }}
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
};

export default ChangeButtonColorInReact;
