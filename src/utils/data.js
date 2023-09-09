export let data = [
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "LAPTOP",
    assetName: "Dell Laptop",
    quantity: 30,
    invoiceNum: 1230,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 500,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "TAB",
    assetName: "Samsung Tab",
    quantity: 50,
    invoiceNum: 5857,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 700,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "Desktop",
    assetName: "PC",
    quantity: 40,
    invoiceNum: 5038,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 800,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "Tools",
    assetName: "HP Pendrive",
    quantity: 300,
    invoiceNum: 12984,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 200,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "SSD",
    assetName: "Samsung SSD",
    quantity: 50,
    invoiceNum: 3836,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 900,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "HDD",
    assetName: "Seagate",
    quantity: 899,
    invoiceNum: 1383,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 200,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "Tools",
    assetName: "Mouse",
    quantity: 100,
    invoiceNum: 2972,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 100,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "MONITOR",
    assetName: "Acer",
    quantity: 50,
    invoiceNum: 1028,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 305,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "CONSOLE",
    assetName: "PS5",
    quantity: 2000,
    invoiceNum: 2826,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 1200,
    status: "Active",
  },
  {
    id: String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    ),
    assetGroup: "CONSOLE",
    assetName: "XBOX",
    quantity: 200,
    invoiceNum: 1029,
    purDate: new Date().toISOString().split("T")[0],
    totalCharge: 1000,
    status: "Active",
  },
];
