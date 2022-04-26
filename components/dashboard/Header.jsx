import { NotificationSvg, MenuSvg } from "./icons";
import Image from "next/image"


const headerStyle = {
  container: `text-black fixed top-0 w-[80%] h-[60px] flex flex-row justify-between items-center px-[20px] rounded`,
  iconsFlex: `w-[60px] flex justify-between`,
  icons: `cursor-pointer`,
};
const Header = () => {
  return (
    <div className={headerStyle.container} style={{backdropFilter: "blur(3px)"}}>
      <div className="flex flex-row items-center">
        <Image src='/convexity-logo.png' width={150} height={40} alt="Convexity Logo" priority/>
        <h1 className='font-normal text-xs text-center'>TRADE EXPLORER</h1>
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