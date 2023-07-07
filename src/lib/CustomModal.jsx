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
  // This component is a modal that can be used to display any content.
  // To be used you need to pass the following props: showCustomModal, setShowCustomModal, children.
  // Theses props are here to handle the modal state. The modal is opened by clicking on the button that has the setShowCustomModal function as onClick prop.
  // The other props are optional and have default values. Optionnal props are: radius, padding, width, height, backgroundColor, color. The modal is closed by clicking on the x button.
  // Optionnal props are essentially used to customize style.

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
