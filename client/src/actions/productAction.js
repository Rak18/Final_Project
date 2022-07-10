import axios from "axios";
import swal from "sweetalert";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    const res  = await axios.get("/api/products/getAllProducts");
    console.log(res);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", 
    payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PRODUCTS_FAIL",
     payload: err });
  }
};


export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: "ADD_PRODUCTS_REQUEST" });
  try {
    const res  = await axios.post("/api/products/addproduct",{product});
    dispatch({ type: "ADD_PRODUCTS_SUCCESS", 
    payload: res.data });
    // window.location.href = "/admin/productlist";
  } catch (err) {
    dispatch({ type: "ADD_PRODUCTS_FAIL",
     payload: err });
  }
};

export const getProductById = (productId) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  try {
    const res  = await axios.post("/api/products/getproductbyid",{productId});
    dispatch({ type: "GET_PRODUCTBYID_SUCCESS", 
    payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PRODUCTBYID_FAIL",
     payload: err });
  }
};


export const filterProduct = (searchkey, category) => async dispatch => {
  let filterdProduct;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  try {
    const res = await axios.get("/api/products/getAllProducts");
    filterdProduct = res.data.filter((product) =>
      product.name.toLowerCase().includes(searchkey)
    );
    if (category !== "all") {
      filterdProduct = res.data.filter(
        (product) => product.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filterdProduct });
  } catch (error) {
    dispatch({ type: "GET_PRODUCTS_FAIL", payload: error });
  }
};


export const updateProduct = (updatedProduct) => async (dispatch) => {
  dispatch({ type: "UPDATE_PRODUCTBYID_REQUEST" });
  try {
    const response = await axios.post("/api/products/updateproduct", {
      updatedProduct,
    });
    dispatch({ type: "UPDATE_PRODUCTBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/productlist";
  } catch (err) {
    dispatch({ type: "UPDATE_PRODUCTBYID_FAIL", payload: err });
  }
};

export const deleteProduct = (productId) => async dispatch => {
  try {
    const res = await axios.post("/api/products/deleteproduct", { productId });
    swal("Product Deleted Success!", "success");
    window.location.href = "/admin/productlist";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Product");
  }
};
