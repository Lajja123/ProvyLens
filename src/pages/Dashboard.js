import React, { useState } from "react";
import "../styles/register.scss";
import { Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.scss";
import Transfer from "../components/Transfer";
import DeleteProduct from "../components/DeleteProduct";
import TransferHistory from "../components/TransferHistory";
import RequestStock from "../components/RequestStock";
// ..............
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// ...........

function Dashboard() {
  const [addProduct, setaddProduct] = useState(true);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [transfer, setTransfer] = useState(true);
  const [transferHistory, setTransferHistory] = useState(false);
  const [stock, setStock] = useState(false);
  const [product, setProduct] = useState(true);
  const [chain, setChain] = useState();

  const dashboardLinks = (a) => {
    if (a === "AddProduct") {
      setaddProduct(true);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(false);
    }
    if (a === "DeleteProduct") {
      setaddProduct(false);
      setDeleteProduct(true);
      setTransfer(false);
      setTransferHistory(false);
      setStock(false);
    } else if (a === "Transfer") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(true);
      setTransferHistory(false);
      setStock(false);
    } else if (a === "TransferHistory") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(true);
      setStock(false);
    } else if (a === "RequestStock") {
      setaddProduct(false);
      setDeleteProduct(false);
      setTransfer(false);
      setTransferHistory(false);
      setStock(true);
    }
  };

  return (
    <div className="dashboard-main">
      <div className="left-db">
        <ul>
          {product === true ? (
            <>
              <li
                className={addProduct ? "active" : ""}
                onClick={() => {
                  dashboardLinks("AddProduct");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M5,11h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v4C3,10.1,3.9,11,5,11z" />
                      <path d="M5,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5c-1.1,0-2,0.9-2,2v4C3,20.1,3.9,21,5,21z" />
                      <path d="M13,5v4c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-4C13.9,3,13,3.9,13,5z" />
                      <path d="M15,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v4C13,20.1,13.9,21,15,21z" />
                    </g>
                  </g>
                </svg>
                Add Product
              </li>

              <li
                className={deleteProduct ? "active" : ""}
                onClick={() => {
                  dashboardLinks("DeleteProduct");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M5,11h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v4C3,10.1,3.9,11,5,11z" />
                      <path d="M5,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5c-1.1,0-2,0.9-2,2v4C3,20.1,3.9,21,5,21z" />
                      <path d="M13,5v4c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-4C13.9,3,13,3.9,13,5z" />
                      <path d="M15,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v4C13,20.1,13.9,21,15,21z" />
                    </g>
                  </g>
                </svg>
                Delete Product
              </li>
            </>
          ) : (
            <>
              <li
                className={transfer ? "active" : ""}
                onClick={() => {
                  dashboardLinks("Transfer");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <rect fill="none" height="24" width="24" y="0" />
                  <path d="M12.97,2.54c-0.6-0.34-1.34-0.34-1.94,0l-7,3.89L9.1,9.24C9.83,8.48,10.86,8,12,8s2.17,0.48,2.9,1.24l5.07-2.82L12.97,2.54z M10,12c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S10,13.1,10,12z M3,8.14l5.13,2.85C8.04,11.31,8,11.65,8,12c0,1.86,1.27,3.43,3,3.87 v5.57l-6.97-3.87C3.39,17.22,3,16.55,3,15.82V8.14z M13,21.44v-5.57c1.73-0.44,3-2.01,3-3.87c0-0.35-0.04-0.69-0.13-1.01L21,8.14 l0,7.68c0,0.73-0.39,1.4-1.03,1.75L13,21.44z" />
                </svg>
                Transfer
              </li>
              <li
                className={transferHistory ? "active" : ""}
                onClick={() => {
                  dashboardLinks("TransferHistory");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                Transfer History
              </li>
              <li
                className={stock ? "active" : ""}
                onClick={() => {
                  dashboardLinks("RequestStock");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                Request Stock
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="right-db">
        <div className="avilabletest-front-buttons">
          <button
            id="product-btn"
            onClick={() => {
              setProduct(true);
              setaddProduct(true);
              setChain(false);
              setDeleteProduct(false);
              setTransfer(false);
              setTransferHistory(false);
            }}
            for="first_name"
            className={
              product
                ? "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name pc-tab-button"
                : "block text-large font-medium text-gray-900 dark:text-gray-300 purchased-name"
            }
            value={product}
          >
            product
          </button>

          <button
            id="chain-btn"
            onClick={() => {
              setChain(true);
              setProduct(false);
              setaddProduct(false);
              setDeleteProduct(false);
              setTransfer(true);
              setTransferHistory(false);
              // showAvailableTests();
            }}
            for="first_name"
            className={
              chain
                ? "block text-large font-medium text-gray-900 dark:text-gray-300 created-name pc-tab-button"
                : "block text-large font-medium text-gray-900 dark:text-gray-300 created-name"
            }
            value={chain}
          >
            chain
          </button>
        </div>

        {addProduct ? (
          <>
            <div className="select-main" id="right-db-inside">
              <div className="product-details-main">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Product name"
                  />
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Product description"
                  />
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Product price"
                  />
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Product unit"
                  />
                  <Button variant="contained" size="large">
                    Add
                  </Button>
                </Box>
              </div>
            </div>
          </>
        ) : deleteProduct ? (
          <DeleteProduct />
        ) : transfer ? (
          <Transfer />
        ) : transferHistory ? (
          <TransferHistory />
        ) : stock ? (
          <RequestStock />
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
