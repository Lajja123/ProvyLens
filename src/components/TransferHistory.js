import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "../styles/Modal.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TransferHistory({ dashboardLinks }) {
  const [modal, setModal] = useState(false);

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
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div className="modal-content">
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
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
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
            {/* <Grid item xs={8}>
              <Item>
                {" "}
                <div className="history-flex">
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                </div>
                <div>
                  {" "}
                  <Button
                    variant="contained"
                    size="large"
                    className="transfer-history-btn"
                    onClick={() => {
                      dashboardLinks("HistoryDetails");
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {" "}
                <div className="history-flex">
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                </div>
                <div>
                  {" "}
                  <Button
                    variant="contained"
                    size="large"
                    className="transfer-history-btn"
                    onClick={() => {
                      dashboardLinks("HistoryDetails");
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {" "}
                <div className="history-flex">
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                  <label className="transfer-history">product Id:1</label>
                </div>
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    className="transfer-history-btn"
                    onClick={() => {
                      dashboardLinks("HistoryDetails");
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </Item>
            </Grid> */}
          </Grid>
        </Box>
        {/* <div className="first-row">
            <div className="product-details">
              <label className="manufacture-details-quality">
                Total Quality : KG
              </label>
              <label className="manufacture-details-quality">
                Current Price : $
              </label>
            </div>
          </div>
          <div className="second-row">
            <label className="transfer-history">Manufacturer Id:1</label>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">
                Manufacturer details
              </label>
              <label className="manufacture-details-quality">Name</label>
              <label className="manufacture-details-quality">Address</label>
              <label className="manufacture-details-quality">
                Other details
              </label>
            </div>
          </div>
          <div className="third-row">
            {" "}
            <label className="transfer-history">Quality</label>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">25%</label>
              <label className="manufacture-details-quality">50%</label>
              <label className="manufacture-details-quality">75%</label>
              <label className="manufacture-details-quality">100%</label>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default TransferHistory;
