import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const models = [
    {
        id:1,
        name: "Name Surname 1",
        url: "https://images.pexels.com/photos/2726161/pexels-photo-2726161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        id:2,
        name: "Name Surname 2",
        url: "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        id:3,
        name: "Name Surname 3",
        url: "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        id:4,
        name: "Name Surname 4",
        url: "https://images.pexels.com/photos/5303015/pexels-photo-5303015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
]

const GaciRating = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }
    return (
        <div>
            <div className="navbar">
                <Link style={{textDecoration: 'none'}} to='/'><h3>Anasayfa</h3></Link>
                <p>Gaci Rating Yapim Asamasindadir.</p>
            </div>

            <div className="slider">
                <h2>1.Lig | Global Celebrities</h2>
                <div className="imageContainer">
                    {models.map(model => {
                        return(
                            <div>
                                <img src={model.url} className="image"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GaciRating
