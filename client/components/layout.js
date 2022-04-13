import React, { useState} from "react";
import SideBar from "./sidebar/SideBar";
import { Toaster } from "react-hot-toast";
import AddWalletForm from "./form/AddWalletForm";

export default function Layout({ children }) {
  // State for Add Wallet Modal
  const [openModal, setOpenModal] = useState(false);
  // State for Add Wallet Button
  const [hideAddWalletBtn, setHideAddWalletBtn] = useState(false);

  // Function to handle Modal control
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className='relative w-[100vw] h-[100vh]'>
      <div className='flex'>
        <SideBar
          toggleModal={toggleModal}
        />
        {children}
      </div>
      <AddWalletForm openModal={openModal} toggleModal={toggleModal} />
      <Toaster />
    </div>
  );
}
