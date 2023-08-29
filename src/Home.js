import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />
                  
                <div className="home_row">
                   <Product id="12324312" title='The Lean Startup' price={160} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81-QB7nDh4L.jpg" rating={4}/> 
                   <Product id="12324413" title="Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Gray (5th Generation)" price={55900} rating={5} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61XZQXFQeVL._SX679_.jpg" /> 
                </div>
                <div className="home_row">
                <Product id="1234315" title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver" price={119000} rating={4} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71XyLsP7WjL._SX679_.jpg" /> 
                <Product id="14321567" title="Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 3 Min Quick Charge - Black" price={26500} rating={5} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31yQxnMLbKL._SX300_SY300_QL70_FMwebp_.jpg"/>
                <Product id="12345432" title="Nintendo Switch OLED model With White set" price={27000} rating={3} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51yJ+OqktYL._SX679_.jpg"/> 
                </div>
                <div className="home_row">
                <Product id="12345617" title="Sony Bravia 139 cm (55 inches) XR Series 4K Ultra HD Smart Full Array LED Google TV XR-55X90K (Black)" price={105000} rating={5} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/816pDYhthXL._SX679_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home