import React from 'react'
import Image from "next/image";
import AddBoxIcon from "@mui/icons-material/AddBox";

const style = {
  container: `fixed left-[70px] top-[85vh] w-auto h-[60px] cursor-pointer`,
};

const AddWalletBtn = ({ toggleModal }) => {
  return (
    <div>
      <div
        className={`${style.container} ${toggleModal ? "block" : "hidden"}`}
        onClick={toggleModal}>
        <AddBoxIcon sx={{ fontSize: 50 }} />
      </div>
    </div>
  );
};

export default AddWalletBtn