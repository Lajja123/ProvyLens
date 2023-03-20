import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import Button from "@mui/material/Button";
function AllDataDaos({ setSingleDataDao, setDatadaos, setDaoAddress }) {
  const [allDataDaos, setDataDaos] = useState([]);

  return (
    <>
      <div className="transfer-main-div">
        <div className="all-datadao-main-div">
          <div className="first-row">
            <label className="transfer-history">product Id:1</label>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AllDataDaos;
