import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/pcacc/jan25/hero/PC_Leadup_Hero._CB537784335_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="23547985"
            title="ORICO 2TB NVMe SSD PCIe 4.0- Up to 7000MB/s, M.2 SSD 2280 PCIe 4.0X4 Internal Solid State Drive SSD, Fast Heat Dissipation, Compatible with macOS Windows for Gamers and Creators-O7000 (2TB)"
            price={9999}
            image="https://m.media-amazon.com/images/I/610A0ZQhVJL._SY450_.jpg"
            rating={5}
          />
          <Product 
            id="23547896"
            title="Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey" 
            price = {69990} 
            image="https://images-eu.ssl-images-amazon.com/images/I/71jG+e7roXL._AC_UL232_SR232,232_.jpg" 
            rating={5} 
            />
          <Product
            id="13256874"
            title="Dyazo 13.3 inch Laptop Bag Sleeve Sleeve Bag Cover for 13 inch Apple Mac Book Air Pro Retina 13 13.3 inch MacBook 13.3 inch and all other laptops & Notebooks with front packet and handle (Grey)"
            price={299}
            image="https://m.media-amazon.com/images/I/81s4wKEliIL._SY355_.jpg"
            rating={4}
          />
          <Product
            id="45682476"
            title="Apple 2024 MacBook Pro Laptop with M4 Max chip with 14‑core CPU and 32‑core GPU: Built for Apple Intelligence, (14.2″) Liquid Retina XDR Display, 36GB Unified Memory, 1TB SSD Storage; Space Black"
            price={309990}
            image="https://m.media-amazon.com/images/I/61eA9PkZ07L._SX466_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
        <Product
            id="51234846"
            title="Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)"
            price={104000}
            image="https://m.media-amazon.com/images/I/71CXhVhpM0L._SX569_.jpg"
            rating={5}
          />
          <Product
            id="25152658"
            title="iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium"
            price={137900}
            image="https://m.media-amazon.com/images/I/61giwQtR1qL._SX522_.jpg"
            rating={5}
          />
          <Product
            id="53294359"
            title="iPhone 16 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black"
            price={84900}
            image="https://m.media-amazon.com/images/I/615O-NFQKdL._SX569_.jpg"
            rating={5}
          />
          <Product
            id="45789654"
            title="Apple iPhone 15 (128 GB) - Blue"
            price={60499}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL._SX466_.jpg"
            rating={5}
          />
        </div>

        <div className="home__slider">
        <Product
            id="45358499"
            title="Samsung Odyssey Neo G9 57-inch(145 cm) Dual UHD 7680 x 2160 1000R Curved VA Gaming Monitor, 240Hz, 1ms, FreeSync Premium Pro, USB, DP 2.1, HDMI, HAS, Quantum Mini LED, HDR10+ (LS57CG950NWXXL, Black)"
            price={227099}
            image="https://m.media-amazon.com/images/I/81nH13XWRHL._SX450_.jpg"
            rating={5}
          />
        </div>

        <div className="home__slider">
        <Product
            id="77865128"
            title="Hero XTREME 125R Bike(ABS) Cobalt Blue Booking for Ex-Showroom Price"
            price={103806}
            image="https://m.media-amazon.com/images/I/71SZIKLsKKL._SX355_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
        <Product
            id="43259765"
            title="Sony PlayStation®5 Console (slim)"
            price={54990}
            image="https://m.media-amazon.com/images/I/51ljnEaW0pL._SX342_.jpg"
            rating={5}
          />
          <Product
            id="84237965"
            title="Microsoft Xbox X/S Wireless Controller Robot White"
            price={5299}
            image="https://m.media-amazon.com/images/I/61MdJDbKYjL._SX342_.jpg"
            rating={4}
          />
          <Product
            id="34526137"
            title="Xbox Series S"
            price={34749}
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX342_.jpg"
            rating={5}
          />
          <Product
            id="16749538"
            title="Dr luxur Weavemonster Ergonomic Gaming Chair for Office Work at Home with Breathable Honeycombed Fabric, Magnetic Neck & Lumbar Pillow, Footrest, 4-D Armrest with 180 Degree Recline (Teal)"
            price={17990}
            image="https://m.media-amazon.com/images/I/81NxrLg1GxL._SX425_.jpg"
            rating={4}
          />
          
        </div>

        <div className="home__slider">
        <Product
            id="12975348"
            title="Logitech G29 Driving Force Racing Wheel and Floor Pedals, Real Force Feedback, Stainless Steel Paddle Shifters, Leather Steering Wheel Cover for PS5, PS4, PC, Mac - Black"
            price={29988}
            image="https://m.media-amazon.com/images/I/61IwZwlTopL._SY450_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
        <Product
            id="135434582"
            title="M1 Smart Watch for Kids Women Boys Men Girls ID116 Phone Watch Wrist Activity Tracker Multip Functional Smart Watch Compatible with All Android and iOS Devices."
            price={439}
            image="https://m.media-amazon.com/images/I/61Famx7xQwL._SY450_.jpg"
            rating={3}
          />
          <Product
            id="23544654"
            title="Arctic Fox Pureview Transparent Wireless and Bluetooth Rechargeable Mouse, USB Receiver,LED Battery Magic Silm for Office/PC/Mac/Laptop/Apple/ipad(Space Gray)"
            price={649}
            image="https://m.media-amazon.com/images/I/613dyv2wXdL._SY355_.jpg"
            rating={4}
          />
          <Product
            id="78962549"
            title="Samsung 633 L, 3 Star, Frost Free, Double Door, Convertible 5-in-1 Digital Inverter, Side By Side Refrigerator with AI, WiFi & Water & Ice Dispenser (RS78CG8543S9HL, Silver, Refined Inox, 2024 Model)"
            price={112990}
            image="https://m.media-amazon.com/images/I/61QKzOZbl8L._SY500_.jpg"
            rating={5}
          />
          <Product
            id="12569874"
            title="Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 2.5 Filter, 2024 Model, MTKM50U, White)"
            price={45490}
            image="https://m.media-amazon.com/images/I/61HuUBy7XIL._SX466_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
