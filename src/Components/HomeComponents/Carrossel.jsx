import { useState, useEffect } from "react";
import Slider from "react-slick";
import CardCamisa from "../CamisasComponents/CardComponent/CardCamisa.jsx";
import { CarrosselDiv } from './StyledCarrossel.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Carrossel = () => {
  const [camisas, setCamisas] = useState([]);

  useEffect(() => {
    axios("https://fg2-backend-2be0eab4ad81.herokuapp.com/api/camisas/maisVendidas")
      .then((response) => {
        setCamisas(response.data.camisas || [])
      })
      .catch((error) => console.error("Erro ao buscar camisas:", error));
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  };

  return (
    <div>
      <CarrosselDiv>
        <Slider {...settings}>
          {camisas.map(camisa => (
            <div key={camisa.id}>
              <CardCamisa
                src={camisa.url_imagem1}
                price={camisa.preco}
                description={camisa.descricao}
              />
            </div>
          ))}
        </Slider>
      </CarrosselDiv>
    </div>
  );
};

export default Carrossel;
