import PropTypes from "prop-types";
import React from "react";
import "./styles.css";

export default function CustomModal({
  children,
  showCustomModal,
  setShowCustomModal,
  radius = "5px",
  padding = "40px",
  width = "fit-content",
  height = "auto",
  backgroundColor = "#ffffff",
  color = "black",
}) {
  if (!showCustomModal) {
    return null;
  }

  return (
    <div className="customModal__background">
      {showCustomModal && (
        <div
          className="customModal__container"
          style={{
            borderRadius: radius,
            padding,
            width,
            height,
            backgroundColor,
            color,
          }}
        >
          <div className="customModal__content">
            {children}
            <button
              className="customModal__close"
              onClick={() => setShowCustomModal(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

CustomModal.propTypes = {
  children: PropTypes.node,
  showCustomModal: PropTypes.bool,
  setShowCustomModal: PropTypes.func,
  radius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
