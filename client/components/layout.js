import SideBar from './sidebar/SideBar';
import { Toaster } from "react-hot-toast";


export default function Layout({ children }) {
    return (
      <>
        <SideBar />
        {children}
        <Toaster />
      </>
    );
}