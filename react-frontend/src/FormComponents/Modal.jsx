import React from "react";

const Modal = () => {
  return (
    <div>
      <dialog id="sub_modal" className="modal">
        <div className="modal-box rounded-lg">
          <h3 className="font-bold text-lg">You made it! 🚀😇</h3>
          <p className="py-4">Thank you, you have joined our waitlist, wait for the latest updates from us</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
