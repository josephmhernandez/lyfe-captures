// import Link from "next/link";
// import classes from "./NavigationBar.module.css";
// import SideBar from "./SideBar";
// import { useState } from "react";

// const MobileNavigationBar = (props) => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className={classes.container}>
//       <nav className={classes.grid}>
//         <i
//           onClick={() => {
//             setVisible(!visible);
//           }}
//           class="bars icon large white"
//         ></i>

//         <SideBar
//           animation={"slide along"}
//           direction={"left"}
//           visible={visible}
//           setVisible={setVisible}
//         />

//         <div className={classes.logo}>
//           <Link href="/">
//             <div className={classes.mobileLogo}>
//               <h1>MapYourMemory</h1>
//             </div>
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MobileNavigationBar;
