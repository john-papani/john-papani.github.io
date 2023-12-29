import React, { useState } from "react";
import { useStyles } from "./aboutStyle";
import { Box, Button, Modal, Grid, Typography } from "@mui/material";
import cvimg from "./cv.jpg";

const BioCV = () => {
  const [openmodal, setOpenmodal] = useState(false);
  const handleOpenModal = () => setOpenmodal(true);
  const handleCloseModal = () => setOpenmodal(false);
  const downloadCV = () => {
    console.log("as");
    var link = document.createElement("a");
    link.href = "./Components/About/cv.pdf";
    link.target = "_blank";
    link.download = "cv.pdf";
    console.log(link);
    link.dispatchEvent(new MouseEvent("click"));
  };
  const classes = useStyles();
  return (
    <div id="cv">
      {/* <Typography variant="h5" sx={{ width: "80%", margin: "auto", paddingTop:"1%" }}>
        CV
      </Typography> */}
      <br />
      <br />
      <Grid container spacing={2} className={classes.biocv}>
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpenModal}
            className={classes.modalbtn}
          >
            <Typography variant="h6">Resume</Typography>
          </Button>
          <Modal open={openmodal} onClose={handleCloseModal}>
            <Box className={classes.modal}>
              <img src={cvimg} className={classes.modalcv} alt="cv" />
            </Box>
          </Modal>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="info"
            size="large"
            onClick={() => downloadCV()}
            className={classes.modalbtn}
            disabled
          >
            <Typography variant="h6">Download my CV</Typography>
          </Button>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default BioCV;
