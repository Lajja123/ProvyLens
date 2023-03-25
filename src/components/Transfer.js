import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "urql";
import hexToString from "./HexToStringConverter";
import { useAccount, useSigner } from "wagmi";

function Transfer() {
  const [allDataDaos, setDataDaos] = useState([]);
  const [manufacturerDetails, setManufacturerDetails] = useState();
  const [productDetails, setProductDetails] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    getManufacturerData();
    getProductData();
  }, []);

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct]);

  const getProductData = async () => {
    const data_ = `query MyQuery {
      eventAddSupplierProducts(
        where: {_address: "${address.toLowerCase()}"}
      ) {
        _address
        _date
        _description
        _expiryDate
        _name
        _price
        _spid
        _timeAdded
        _unit
        blockNumber
        blockTimestamp
        id
        transactionHash
      }
    }`;

    const c = createClient({
      url: "https://api.studio.thegraph.com/query/40703/provylens-mumbai/v0.0.1",
    });

    const result1 = await c.query(data_).toPromise();
    // console.log(hexToString(result1.data.eventUserDatas[0]["_name"]));
    const filteredData = result1.data.eventAddSupplierProducts.map(
      (product) => {
        return {
          spId: product["_spid"],
          name: hexToString(product["_name"]),
          unit: product["_unit"],
          price: product["_price"],
          date: new Date(product["_date"] * 1000).toDateString(),
          expiryDate: new Date(product["_expiryDate"] * 1000).toDateString(),
          description: hexToString(product["_description"]),
        };
      }
    );

    setProductDetails(filteredData);
    console.log(filteredData);
  };

  const getManufacturerData = async () => {
    const data_ = `query MyQuery {
        eventUserDatas(where: {_type: 1}) {
          _address
          _image
          _name
          _physicalAddress
          _timeUpdated
          _type
        }
      }`;

    const c = createClient({
      url: "https://api.studio.thegraph.com/query/40703/provylens-mumbai/v0.0.1",
    });

    const result1 = await c.query(data_).toPromise();
    // console.log(hexToString(result1.data.eventUserDatas[0]["_name"]));
    const filteredData = result1.data.eventUserDatas.map((product) => {
      return {
        address: product["_address"],
        name: hexToString(product["_name"]),
        physicalAddress: hexToString(product["_physicalAddress"]),
      };
    });

    setManufacturerDetails(filteredData);
    console.log(filteredData);
  };

  const handleChangeProduct = () => {};

  const toastInfo = () =>
    toast.success("Tranfer Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <div className="transfer-main-div">
        <div className="all-datadao-main-div">
          <div className="first-row">
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <InputLabel id="select-label-status">Product Id</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    product: e.target.value,
                  })
                }
              >
                {productDetails &&
                  productDetails.map((product) => (
                    <MenuItem value={product}>{product.name} </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <div className="product-details">
              <label className="manufacture-details-quality">
                Name : {selectedProduct?.product?.name}
              </label>
              <label className="manufacture-details-quality">
                Price : {selectedProduct?.product?.price}
              </label>
              <label className="manufacture-details-quality">
                Unit : {selectedProduct?.product?.unit}
              </label>
              <label className="manufacture-details-quality">
                Description : {selectedProduct?.product?.description}
              </label>
            </div>
          </div>
          <div className="second-row">
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <InputLabel id="select-label-status">Manufacturer Id</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value={10}>1 </MenuItem>
                <MenuItem value={20}>2 </MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <label className="manufacture-details-quality">Quality</label>
            </FormControl>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">25%</label>
              <label className="manufacture-details-quality">50%</label>
              <label className="manufacture-details-quality">75%</label>
              <label className="manufacture-details-quality">100%</label>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          size="large"
          className="transfer-btn"
          onClick={toastInfo}
        >
          Transfer
        </Button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}
export default Transfer;
