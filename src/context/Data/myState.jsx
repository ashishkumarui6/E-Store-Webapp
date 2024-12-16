import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";

const Mystate = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-Us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      await getDocs(collection(fireDB, "products")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProduct(newData);
        setLoading(false);
      });

      // return () => data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // console.log(product);

  const addProducts = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all field are required");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");

      await addDoc(productRef, products);
      toast.success("Add product successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // update product function

  const edithandle = (item) => {
    setProduct(item);
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Products Update Successfully");
      getProductData();
      window.location.href = "/dashboard";
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // delete product

  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "Products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      // console.log(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
  }, []);

  /// filter logic

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProducts,
        product,
        deleteProduct,
        updateProduct,
        edithandle,
        order,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Mystate;
