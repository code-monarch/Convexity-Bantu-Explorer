import React, { useState} from "react";
import SideBar from "./sidebar/SideBar";
import Dashboard from "./dashboard/index";
import AddWalletForm from "./form/AddWalletForm";

export default function HomePageLayout() {
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
      <div className='flex justify-between w-[100%]'>
        <SideBar toggleModal={toggleModal} />
        <Dashboard />
      </div>
      <AddWalletForm openModal={openModal} toggleModal={toggleModal} />
    </div>
  );
}
