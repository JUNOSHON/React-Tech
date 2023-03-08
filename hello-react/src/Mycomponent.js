import React from "react";
import PropTypes from "prop-types";
import {defaultKeyMap} from "@testing-library/user-event/dist/keyboard/keyMap";

const MyComponent = ({name, favoriteNumber, children}) => {
  
  return (
    <div>
      제 이름은 {name}입니다. <br/>
      children 값은 {children}입니다.<br/>
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    
    </div>
  );
};
MyComponent.defaultProps = {
  name: "JUNO",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
