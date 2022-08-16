// import classes from './Accordion.module.css';

// import { useState } from "react";

// const Accordion = (props) => {
//   const [isShowing, setIsShowing] = useState(false);

//   const toggle = () => {
//     setIsShowing(!isShowing);
//   };

//   return (
//     <div className={classes.container}>
//       <button className={classes.button} onClick={toggle} type="button">
//         <p>{props.title}</p>
//       </button>
//       <div style={{ display: isShowing ? "block" : "none", padding: "5px" }}>
//         {isShowing && props.children}
//       </div>
//     </div>
//   );
// };


// export default Accordion; 

// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//       borderBottom: 0,
//   },
//   '&:before': {
//       display: 'none',
//   },
// }));


// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//       expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//       {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//       theme.palette.mode === 'dark'
//           ? 'rgba(255, 255, 255, .05)'
//           : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//       transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//       marginLeft: theme.spacing(1),
//   },
// }));

// export {AccordionSummary, Accordion}; 