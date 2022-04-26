import { useState } from "react";

import { useDispatch } from "react-redux";
import { addEthWallet } from "../../../app/ethereum/ethwalletSlice";

import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

import toast from "react-hot-toast";

const style = {
  container: `fixed w-[100%] top-0 left-0 h-[100vh] right-[0px] bg-[rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-auto z-100 transition ease-in-out delay-150`,
};

const AddWalletForm = ({ openModal, toggleModal }) => {
  // NOTIFICATION WHEN A NEW ACCOUNT IS ADDED(USING REACT HOT TOAST PACKAGE)
  const notify = () =>
    toast("Wallet added Successfully", {
      position: "top-center",
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#002855",
        color: "#fff",
      },
    });

  //  ERROR MESAGE WHEN FORM INPUT FIELD IS EMPTY
  const error = () => {
    toast("Input fields cannot be empty!", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#ee2855",
        color: "#fff",
      },
    });
  }

  // REGEX PATTERN TO VALIDATES INPUTED WALLET KEY
  const walletkeyPattern = /^0x[a-fA-F0-9]{40}$/;

  // FUNCTION THAT COMPARES INPUTED WALLET KEY TO WALLET KEY REGEX PATTERN
  const validateWalletkey = (inputedWalletKey) => {
    if (inputedWalletKey !== walletkeyPattern) {
      //  ERROR MESAGE WHEN FORM INPUT FIELD IS EMPTY
      error()
    }
    else{
      return
    }
  };

  // USEDISPATCH
  const dispatch = useDispatch();

  const [walletKey, setWalletKey] = useState("");
  const [customName, setCustomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletKey && customName) {
      dispatch(
        addEthWallet({
          id: Date.now(),
          walletKey: walletKey,
          walletName: customName,
        })
      );
      // NOTIFY WITH TOAST
      notify();
      // CLEAR INPUT FIELD
      setWalletKey("");
      setCustomName("");
      toggleModal();
    }
    if (
      (!walletKey && customName) ||
      (walletKey && !customName) ||
      (!walletKey && !customName)
    ) {
      // ERROR WITH TOAST
      error();
    }
  };

  return (
    <div className={`${style.container} ${openModal ? "block" : "hidden"}`}>
      <div className='flex flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          className='w-[300px] h-[250px] bg-white !opacity-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-2'>
            <label
              className='block text-[#000] text-sm font-bold mb-2'
              htmlFor='walletId'>
              Wallet public key
            </label>
            <input
              className='shadow appearance-none border focus:border-[#383838] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='walletKey'
              placeholder='0x29fea730D68f87b0e73a07C38F8116b716114902'
              onChange={(e) => setWalletKey(e.target.value)}
              // VALIDATE THE WALLETKEY TYPED AFTER TYPING
              onKeyUp={(e) => validateWalletkey(e.target.value)}
              value={walletKey}
              autoFocus
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-[#000] text-sm font-bold mb-2'
              htmlFor='name'>
              Custom Wallet Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#383838] focus:outline-none focus:shadow-outline'
              name='customName'
              type='text'
              placeholder='Mr. Deji'
              onChange={(e) => setCustomName(e.target.value)}
              value={customName}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='w-full bg-[#000] hover:border-[#383838] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Save Wallet
            </button>
          </div>
        </form>
        <div onClick={toggleModal} className='cursor-pointer text-center'>
          <CancelIcon color='action' sx={{ fontSize: 40, color: red[300] }} />
        </div>
      </div>
    </div>
  );
};

export default AddWalletForm;
