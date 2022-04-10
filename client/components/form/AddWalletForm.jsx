import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWallet } from "../../redux/walletSlice";
import toast from "react-hot-toast";

const style = {
  container: `fixed w-[78.8vw] h-[100vh] right-[0px] bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center p-auto`,
};

const AddWalletForm = ({ openModal, toggleModal }) => {
  const notify = () => toast.success("Wallet added Successfully");

  // USEDISPATCH
  const dispatch = useDispatch();

  const [walletKey, setWalletKey] = useState("");
  const [customName, setCustomName] = useState("");

  console.log(walletKey)

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
    }
    // CLEAR INPUT FIELD
    setWalletKey('')
    setCustomName('')
    toggleModal();
    notify();
  };

  return (
    <div className={`${style.container} ${openModal ? "block" : "hidden"}`}>
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
            value={walletKey}
            autoFocus={true}
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
    </div>
  );
};

export default AddWalletForm;
