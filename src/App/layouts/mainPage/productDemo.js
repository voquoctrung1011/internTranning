import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import { Button, Radio, Carousel } from 'antd';
import Product1 from "../../../assets/images/product_1.png";
import Product2 from "../../../assets/images/product_2.png";
import Product3 from "../../../assets/images/product_3.png";
import Product4 from "../../../assets/images/product_4.png";
import Product5 from "../../../assets/images/product_5.png";
import Product6 from "../../../assets/images/product_6.png";
import Product7 from "../../../assets/images/product_7.png";
import Product9 from "../../../assets/images/product_9.png";
import Heart from "../../../assets/images/heart.png";
import Reload from "../../../assets/images/reload.png";


const Information = (props) => {


    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Home",
            name: "Mỹ phẩm châu âu",
            price: "350.000",
            img: "../../../assets/images/product_1.png"
        },
        {
            id: 2,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
        {
            id: 3,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
        {
            id: 4,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
        {
            id: 5,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
        {
            id: 6,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
        {
            id: 7,
            title: "Company",
            name: "Mỹ phẩm châu my",
            price: "350.000",
            img: '../../../assets/images/product_2.png'
        },
    ]);
    const [isOpen, setIsOpen] = useState(false)

    const settings = {
        arrows: true,
        asNavfor: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };


    function onChange(a, b, c) {
        console.log(a, b, c);
    }



    const addProduct = (item) => {
        console.log(item);
        
    }

    return (
        <>
            <Container>
                <div className="product-demo">
                    <div className="product-text">
                        <div className="product-text-sanpham">
                            <p>Sản phẩm mới</p>
                            <p>Sản phẩm bán chạy</p>
                            <p>Sản phẩn đặc biệt</p>
                        </div>
                        <div className="line">
                            <div className="line-before"></div>
                            <div className="line-center">//////////////</div>
                            <div className="line-after"></div>

                        </div>
                        <div className="product-text-list">
                            <ul>
                                <li>Mỹ phẩm</li>
                                <li>Chăm sóc da</li>
                                <li>Dành cho tóc</li>
                                <li>Nước hoa</li>
                                <li>Trang sức</li>
                                <li>Quà tặng</li>
                            </ul>
                        </div>
                    </div>



                    <div className="products">
                        <Slider  {...settings}>
                            {products.map((item)=> (
                                <div key={item.id} className="product-container">
                                    <img src={Product2}></img>
                                    <div className="table-price">
                                        <p className="product-title">{item.title}</p>
                                        <p className="product-name">{item.name}</p>
                                        <div className="line"></div>
                                        <div className="text-price">
                                            <p className="price1">
                                                {item.price}<span>đ</span>
                                            </p>
                                            <p className="price2">
                                                {item.price}<span>đ</span>
                                            </p>
                                        </div>
                                        <div
                                            className="button-"
                                        >
                                            <div className="button-price">
                                                <Button
                                                    onClick={() => addProduct(item)}
                                                    type="primary">
                                                    Mua hàng
                                            </Button>
                                            </div>
                                            <div className="button-heart">
                                                <Button type="primary" shape="circle">
                                                    <img src={Heart}></img>
                                                </Button>
                                            </div>
                                            <div className="button-reload">
                                                <Button type="primary" shape="circle">
                                                    <img src={Reload}></img>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>


            </Container>
        </>

    );
}
export default Information;