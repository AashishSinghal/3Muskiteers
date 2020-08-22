const CustomerData = [
  {
    id: 1,
    title: "Customer info",
    routeName: "Customer_info",
    CustomerInfo: [
      {
        id: 1,
        CustomerName: "Customer Name",
        City: "City",
        Pincode: "Pincode",
      },
    ],
  },
  {
    id: 2,
    title: "Order Info",
    routeName: "Order_info",
    Orderinfo: [
      {
        id: 1,
        Orderinfo: "Order No",
        FullDate: "Full Date",
        Time: "Time",
      },
    ],
  },
  {
    id: 3,
    title: "Product info",
    routeName: "Product_info",
    Productinfo: [
      {
        id: 1,
        ProductName: "Product name",
        Quantity: "Quantity",
        Details: "Details",
      },
    ],
  },
  {
    id: 4,
    title: "Timeline",
    routeName: "Order Status",
    OrderStatus: [
      {
        id: 1,
        OrderStatus: "Order Status",
        Date: "Date",
        Time: "Time",
      },
    ],
  },
  {
    id: 5,
    title: "Order Value",
    routeName: "Order_value",
    OrderValue: [
      {
        id: 1,
        OrderValue: "Order Value",
        Date: "Date",
        Time: "Time",
      },
    ],
  },
  {
    id: 6,
    title: "Mode of Payment",
    routeName: "Mode_of_Payment",
    ModeofPayment: [
      {
        id: 1,
        ModeOfPayment: "Prepaid / COD",
      },
    ],
  },
  {
    id: 7,
    title: "",
    buttonName: 'View Details'
  },
];

export default CustomerData;
