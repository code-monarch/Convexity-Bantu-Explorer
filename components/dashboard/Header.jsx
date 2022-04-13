import { NotificationSvg, MenuSvg } from "./icons";
import Image from "next/image"


const headerStyle = {
  container: `fixed top-0 left-[21vw] w-[78vw] h-[60px] flex flex-row justify-between items-center px-[20px] mx[auto] border-b-[1px] border-white border-solid bg-clip-padding bg-opacity-60`,
  iconsFlex: `w-[70px] flex justify-between`,
  icons: `cursor-pointer`,
};
const Header = () => {
  return (
    <div className={headerStyle.container} style={{backdropFilter: "blur(3px)"}}>
      <div className="flex flex-row items-center">
        <Image src='/convexity-logo.png' width={200} height={50} priority/>
        <h1 className='font-black text-sm text-center'>TRADE EXPLORER</h1>
      </div>
      <div className={headerStyle.iconsFlex}>
        <span className={headerStyle.icons}>
          <NotificationSvg />
        </span>
        <span className={headerStyle.icons}>
          <MenuSvg />
        </span>
      </div>
    </div>
  );
};

export default Header