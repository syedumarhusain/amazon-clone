import React from 'react';
import './Home.css'
import Product from './Product';


function Home() {
    return (
        <div className='home'>

            <img
            className='home_image'    
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            
            {/* products id, ftitle, image*/}
            <div className="home_row">
                <Product
               id="123231312"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
               price={110.95}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"
               />
            
            <Product
               id="342324"
               title="Wecool Moonwalk M3 Bluetooth in Ear True Wireless Earbuds with High Bass for Music Lovers, Touch Control Earpods with HD Stereo Sound, Digital Display, 24 Hours Battery, Anti Fall Sports Fit, BT 5.1 "
               price={5.93}
               rating={4}
               image="https://m.media-amazon.com/images/I/61GhBUdt7NL._SL1500_.jpg"
               />
               
            </div>
            <div className="home_row">
                <Product
               id="6546312"
               title="Redmi Note 10 Pro Max (Dark Night, 6GB RAM, 128GB Storage) -108MP Quad Camera | 120Hz Super Amoled Display "
               price={99.9}
               rating={5}
               image="https://m.media-amazon.com/images/I/81Vpy0XrvFL._SL1500_.jpg"
               />
               <Product
               id="6786731312"
               title="IFB 8kg 5 Star Fully-Automatic Front Loading Washing Machine (Senator WXS, Silver, Tub Clean, Ball Valve Technology) "
               price={500.0}
               rating={5}
               image="https://m.media-amazon.com/images/I/716KY1d-2vL._SL1500_.jpg"
               />
               <Product
               id="7321312"
               title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue "
               price={999.9}
               rating={5}
               image="https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
               />
            </div>
            <div className="home_row">
                <Product
               id="3421312"
               title="Classmate Soft Cover 6 Subject Spiral Binding Notebook, Single Line, 300 Pages"
               price={2.9}
               rating={3}
               image="https://m.media-amazon.com/images/I/81ks8Qf5ltL._SL1500_.jpg"
               />
               </div>
            </div>
    )
}

export default Home
