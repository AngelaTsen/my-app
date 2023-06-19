import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { SliderMyCard } from "./SliderMyCard/SliderMyCard";
import "./SliderMy.scss";

export const SliderMy = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=k")
      .then((res) => res.json())
      .then((responseData) => setBlogData(responseData.meals))
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 733,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 533,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div>
      <div className="title">Сhoose a dish that you like:</div>

      <Slider {...settings}>
        {blogData.map((item) => (
          <SliderMyCard
            idMeal={item.idMeal}
            strMeal={item.strMeal}
            strCategory={item.strCategory}
            strMealThumb={item.strMealThumb}
          />
        ))}
      </Slider>
    </div>
  );
};
export default SliderMy;
