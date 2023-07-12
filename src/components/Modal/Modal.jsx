import cn from "classnames";

const Modal = ({ children, open }) => {
  const modalClass = cn({
    "modal modal-bottom sm:modal-middle": true,
    "modal-open": open,
  });

  return (
    <div className={modalClass}>
      <div className="modal-box text-yellow-500" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
