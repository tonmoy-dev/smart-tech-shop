import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../Products/Products";
import CustomerReviews from "../Reviews/CustomerReviews/CustomerReviews";
import TopBanner from "../TopBanner/TopBanner";
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <CustomerReviews></CustomerReviews>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home ;