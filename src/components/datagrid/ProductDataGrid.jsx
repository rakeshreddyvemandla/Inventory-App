import { data } from "../../utils/data";
import "./productData.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductDataGrid = () => {
  const [products, setItem] = useState(data);
  const [filterItems, setFilterItems] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const navigate = useNavigate();

  const getIndex = (id) => {
    let i;
    data.forEach((p, index) => {
      if (p.id == id) {
        i = index;
      }
    });
    return i;
  };

  useEffect(() => {
    setFilterItems(["All", ...new Set(data.map((item) => item.assetGroup))]);
  }, [products]);

  const handleDelete = (item) => {
    const newData = products.filter((product) => product.id !== item.id);
    console.log(newData);
    data.splice(getIndex(item.id), 1);
    // console.log(data);
    setItem(newData);
  };

  const handleEdit = (item) => {
    navigate(`update-asset/${item.id}`);
  };

  const handleIdSort = () => {
    let sorted = false;
    let sortedData = products.sort();
    // console.log(sortedData);
    setItem(sortedData);
    sorted = true;
    if (sorted) {
      sortedData = products.reverse();
      // console.log(sortedData);
      setItem([...sortedData]);
    }
  };

  const handleFilter = (e) => {
    const filterItem = e.target.value;

    if (filterItem === "All") {
      setItem(data);
    } else {
      const filterItems = data.filter((item) => item.assetGroup === filterItem);
      setItem(filterItems);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="main">
      <div className="container">
        <h2>Inventory</h2>
        <div className="container-toolbar">
          <div className="refresh">
            <RefreshIcon onClick={() => handleRefresh()} />
          </div>
          <div className="filter">
            <FilterAltIcon onClick={() => setFilterOpen(!filterOpen)} />
            <div
              style={{ display: filterOpen ? "flex" : "none" }}
              className="filter_items_container"
            >
              <select className="filter-list" onChange={(e) => handleFilter(e)}>
                {filterItems.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <Link to={"add-asset"}>
              <button className="btn btn-cancel">Add Asset</button>
            </Link>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead className="table-heading">
              <tr>
                <th onClick={() => handleIdSort()}>S.No</th>
                <th>Asset Group</th>
                <th>Asset Name</th>
                <th>Quantity</th>
                <th>Invoice Number</th>
                <th>Purchase Date</th>
                <th>Total Charge</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            {products.map((item, index) => {
              return (
                <tbody
                  key={item.id}
                  style={{ width: "100%" }}
                  className="tbody"
                >
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.assetGroup}</td>
                    <td>{item.assetName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.invoiceNum}</td>
                    <td>{item.purDate.slice(0, 15)}</td>
                    <td>{item.totalCharge}</td>
                    <td>{item.status}</td>
                    <td>
                      <div className="actions">
                        <VisibilityIcon sx={{ width: 20 }} />
                        <span onClick={() => handleEdit(item)}>
                          <EditIcon
                            sx={{ width: 20, "&:hover": { color: "green" } }}
                          />
                        </span>
                        <span onClick={() => handleDelete(item)}>
                          <DeleteIcon
                            sx={{ width: 20, "&:hover": { color: "red" } }}
                          />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDataGrid;
