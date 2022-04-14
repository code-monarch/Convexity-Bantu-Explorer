import React from 'react'
import Image from "next/image";
import AddBoxIcon from "@mui/icons-material/AddBox";

const style = {
  container: `absolute bottom-[10px] left-[10vw] translate-x-[-50%] w-auto h-[60px] cursor-pointer z-50`,
};

const AddWalletBtn = ({ toggleModal }) => {
  return (
    <div>
      <div
        className={`${style.container} ${toggleModal ? "block" : "hidden"}`}
        onClick={toggleModal}>
        <AddBoxIcon color='action' sx={{ fontSize: 50 }} />
      </div>
    </div>
  );
};

export default AddWalletBtn