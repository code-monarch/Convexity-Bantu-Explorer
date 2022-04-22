import { useState } from "react";

import { useDispatch } from "react-redux";
import { addWallet } from "../../app/walletSlice";

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

  //  ERROR MESAGE WHE FORM INPUT FIELD IS EMPTY
  const error = () =>
    toast("Input fields cannot be empty!", {
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#ee2855",
        color: "#fff",
      },
    });


  // REGEX PATTERN TO VALIDATES INPUTED WALLET KEY 
    const walletkeyPattern = /^\d[G]{56}$/i

    // FUNCTION THAT COMPARES INPUTED WALLET KEY TO WALLET KEY REGEX PATTERN
    const validateWalletkey = (inputedWalletKey) => {
      if(inputedWalletKey !== walletkeyPattern) {
        console.log("walletkeey inputed is not correct")
      }
    }


  // USEDISPATCH
  const dispatch = useDispatch();

  const [walletKey, setWalletKey] = useState("");
  const [customName, setCustomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletKey && customName) {
      dispatch(
        addWallet({
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
    if(!walletKey && customName || walletKey && !customName || !walletKey && !customName) {
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
              className='block text-bgColor text-sm font-bold mb-2'
              htmlFor='walletId'>
              Wallet public key
            </label>
            <input
              className='shadow appearance-none border focus:border-[#309af1] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='walletKey'
              placeholder='GAVHFGTQMCB3Q4RIYJAPT2FRC2A5JN6P4HLOXS3TH5B26NGONM2SVZJD'
              onChange={(e) => setWalletKey(e.target.value)}
              // VALIDATE THE WALLETKEY TYPED AFTER TYPING
              onKeyUp={(e) => validateWalletkey(e.target.value)}
              value={walletKey}
              autoFocus
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-bgColor text-sm font-bold mb-2'
              htmlFor='name'>
              Custom Wallet Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#309af1] focus:outline-none focus:shadow-outline'
              name='customName'
              type='text'
              placeholder='Mr. Deji'
              onChange={(e) => setCustomName(e.target.value)}
              value={customName}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='w-full bg-walletColor hover:border-bgColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
