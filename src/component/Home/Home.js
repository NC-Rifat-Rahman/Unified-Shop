import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name:"Blue Tshirt",
  images: [{ url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg" }],
  price:"200",
  _id:"larelappa"
}

const Home = () => {

  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector( (state) => state.products);

  useEffect(() =>{
    dispatch(getProduct());
  },[dispatch]);

    return (
      <Fragment>

        {loading ? "loading" :         <Fragment>
          <MetaData title = "Unified Shop"/>
            <div className="banner">
              <p>Welcome to Ecommerce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>

              <a href="#container">
                <button>Scroll <CgMouse /></button>
              </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && products.map((product) => <Product product = {product} />)}
          </div>
        </Fragment>}

      </Fragment>
    );
};

export default Home;