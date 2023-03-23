import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "../styles/Modal.css";
import history from "./TransferHistory.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TransferHistory({ dashboardLinks }) {
  const [modal, setModal] = useState(false);
  console.log(history);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className=" modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className=" modal-content">
            <div className="first-row">
              <label className="manufacture-details-quality-title font-color">
                {history.Product}
              </label>
              <div className="product-details font-color">
                <label className="manufacture-details-quality">
                  Total Quality : {history.totalQuality}
                </label>
                <label className="manufacture-details-quality">
                  Current Price : {history.price}
                </label>
              </div>
            </div>
            <div className="second-row">
              <label className="manufacture-details-quality-title font-color">
                {history.Manufacturer}
              </label>
              <div className="manufacture-details font-color">
                <label className="manufacture-details-quality">
                  {history.name}
                </label>
                <label className="manufacture-details-quality">
                  {history.address}
                </label>
                <label className="manufacture-details-quality"></label>
              </div>
            </div>
            <div className="third-row">
              <label className="manufacture-details-quality-title font-color">
                {history.quality}
              </label>{" "}
              <div className="manufacture-details font-color">
                <label className="manufacture-details-quality">25%</label>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div className="all-history-main-div">
        {history.historydata.map((data) => {
          return (
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={8}>
                  <Item>
                    {" "}
                    <div className="history-flex">
                      <label className="transfer-history">
                        Transfer Id:{data.tid}
                      </label>
                      <label className="transfer-history">
                        product Id:{data.pid}
                      </label>
                      <label className="transfer-history">
                        Dispatch Id:{data.did}
                      </label>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        size="large"
                        className="transfer-history-btn"
                        // onClick={() => {
                        //   dashboardLinks("HistoryDetails");
                        // }}
                        onClick={toggleModal}
                      >
                        View Details
                      </Button>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </div>
    </>
  );
}

export default TransferHistory;
