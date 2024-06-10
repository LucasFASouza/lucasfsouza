import React from "react";

const Modal = ({ children, onClose }) => (
  <div>
    <button onClick={onClose}>Close</button>
    {children}
  </div>
);

export default Modal;
