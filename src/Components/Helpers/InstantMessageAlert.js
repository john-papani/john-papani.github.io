// import * as React from "react";
// import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export default function InstantMessageAlert(props) {
//   const { openAlert, setOpenAlert, messageAlert,severityAlert} = props;
//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpenAlert(false);
//   };

//   return (
//     <>
//       <Snackbar
//         open={openAlert}
//         autoHideDuration={2000}
//         onClose={handleClose}
//         sx={{
//           margin: "auto !important",
//           width: "fit-content !important",
//           right: "0 !important",
//         }}
//       >
      
//         <Alert onClose={handleClose} severity={severityAlert} sx={{ width: "100%" }}>
//           {messageAlert}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }
