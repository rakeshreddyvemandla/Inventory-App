import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../utils/data";
import { useParams, useNavigate } from "react-router-dom";

import "./addAsset.css";

import { useFormik } from "formik";

const AddAsset = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = data.filter((product) => product.id === id);
  const [item, setItem] = useState({ ...product[0] });

  const [newId, setNewId] = useState(null);

  const getIndex = () => {
    let i;
    data.forEach((p, index) => {
      if (p.id == id) {
        i = index;
      }
    });
    return i;
  };

  useEffect(() => {
    const newId = String(
      Date.now().toString(32) + Math.random().toString(16)
    ).replace(/\./g, "");
    setNewId(newId);
    //console.log(newId);
  }, []);

  //console.log(item);
  const formik = useFormik({
    initialValues: {
      assetGroup: item?.assetGroup || "",
      assetName: item?.assetName || "",
      quantity: item?.quantity || "",
      invoiceNum: item?.invoiceNum || "",
      purDate: item?.purDate || "",
      totalCharge: item?.totalCharge || "",
    },
    onSubmit: (values) => {
      if (data.find((product) => product.id === item.id)) {
        data.splice(getIndex(), 1, {
          ...values,
          id: item.id,
          status: "Active",
        });
        //console.log(data);
        navigate("/");
        return;
      }
      if (
        values.assetGroup &&
        values.assetName &&
        values.invoiceNum &&
        values.purDate &&
        values.quantity &&
        values.totalCharge
      ) {
        let res = values;
        res.id = newId;
        res.status = "Active";
        data.push(res);
        navigate("/");
      }
    },
  });

  return (
    <div className="form-container">
      <h2>Add Asset Details</h2>

      <div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <label htmlFor="assetGroup">
            <span style={{ color: "red" }}>*</span>Asset Group:{" "}
          </label>
          <input
            id="assetGroup"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.assetGroup}
            required
          />

          <label htmlFor="assetName">
            <span style={{ color: "red" }}>*</span>Asset Name:
          </label>
          <input
            id="assetName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.assetName}
            required
          />
          <br />

          <label htmlFor="quantity">
            <span style={{ color: "red" }}>*</span>Quantity:
          </label>
          <input
            id="quantity"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.quantity}
            required
          />

          <label htmlFor="invoiceNum">
            <span style={{ color: "red" }}>*</span>Invoice Number:
          </label>
          <input
            id="invoiceNum"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.invoiceNum}
            required
          />
          <br />

          <label htmlFor="purDate">
            <span style={{ color: "red" }}>*</span>Purchase On:
          </label>
          <input
            id="purDate"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.purDate}
            required
          />

          <label htmlFor="totalCharge">
            <span style={{ color: "red" }}>*</span>Total Charge:
          </label>
          <input
            id="totalCharge"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.totalCharge}
            required
          />
          <br />

          <div className="upload">
            <label htmlFor="file">
              <span style={{ color: "red" }}>*</span>Document:
            </label>

            <input id="file" type="file" required />
          </div>

          <div className="footer">
            <Link to={"/"}>
              <button className="btn btn-cancel" type="submit">
                Cancel
              </button>
            </Link>

            <button className="btn btn-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
