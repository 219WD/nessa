import React, { useEffect } from "react";
import "./app.css";
import img_1 from "./assets/01.jpg";
import img_2 from "./assets/02.jpg";
import img_3 from "./assets/03.jpg";
import img_4 from "./assets/04.jpg";
import img_5 from "./assets/05.jpg";
import img_6 from "./assets/06.jpg";
import img_7 from "./assets/07.jpg";
import img_8 from "./assets/08.jpg";
import img_9 from "./assets/09.jpg";
import img_10 from "./assets/10.jpg";
import img_11 from "./assets/11.jpg";
import img_12 from "./assets/12.jpg";
import img_13 from "./assets/13.jpg";
import img_14 from "./assets/14.jpg";
import img_15 from "./assets/15.jpg";
import img_16 from "./assets/16.jpg";
import img_17 from "./assets/17.jpg";
import img_18 from "./assets/18.jpg";
import img_19 from "./assets/19.jpg";
import img_20 from "./assets/20.jpeg";
import hero from './assets/hero.jpg';


const imagesData = [
  { src: img_1, alt: "Image 1", name: "Nuestra primera foto", id: 1 },
  { src: img_2, alt: "Image 2", name: "Esa forma de mirarnos", id: 2 },
  { src: img_3, alt: "Image 3", name: "Mis 2 amores", id: 3 },
  { src: img_4, alt: "Image 4", name: "Nuestra primer casita (QUE RICO LAMPRIAO)", id: 4 },
  { src: img_5, alt: "Image 5", name: "Cuanto llego 'esa cosita' ", id: 5 },
  { src: img_6, alt: "Image 6", name: "chocha ella con su bb", id: 6 },
  { src: img_7, alt: "Image 7", name: "nuestra segunda casita", id: 7 },
  { src: img_8, alt: "Image 8", name: "mendoza juntos", id: 8 },
  { src: img_9, alt: "Image 9", name: "acompañandote en tus momentos mas importantes", id: 9 },
  { src: img_10, alt: "Image 10", name: "cordoba juntos", id: 10 },
  { src: img_11, alt: "Image 11", name: "con tu tiki", id: 11 },
  { src: img_12, alt: "Image 12", name: "NO no, bueno si mi bibi jajaja", id: 12 },
  { src: img_13, alt: "Image 13", name: "juntos asi siempre", id: 13 },
  { src: img_14, alt: "Image 14", name: "nuestra 3era casa", id: 14 },
  { src: img_15, alt: "Image 15", name: "beboteando juntos siempre", id: 15 },
  { src: img_16, alt: "Image 16", name: "en nuestro prime", id: 16 },
  { src: img_17, alt: "Image 17", name: "carlos paz juntos", id: 17 },
  { src: img_18, alt: "Image 18", name: "nuestra 4ta casa", id: 18 },
  { src: img_19, alt: "Image 19", name: "por mas paseos como este", id: 19 },
  { src: img_20, alt: "Image 20", name: "por mas empanadas en el palenque", id: 20 }

];

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const imagesContainer = document.querySelector(".images");
      const preview = document.querySelector(".preview");
      const minimap = document.querySelector(".minimap");

      const getElementTop = (element) => {
        let top = 0;
        while (element) {
          top += element.offsetTop;
          element = element.offsetParent;
        }
        return top;
      };

      const imagesStart = getElementTop(imagesContainer);
      const imagesEnd = imagesStart + imagesContainer.offsetHeight;
      const viewportHeight = window.innerHeight;
      const previewHeight = preview.offsetHeight;
      const previewMaxTranslate = (minimap.offsetHeight - previewHeight) * 2.84;

      const scrollPosition = window.scrollY;
      const scrollRange = imagesEnd - imagesStart - viewportHeight;
      const previewScrollRange = Math.min(previewMaxTranslate, scrollRange);

      if (
        scrollPosition >= imagesStart &&
        scrollPosition <= imagesEnd - viewportHeight
      ) {
        let scrollFraction = (scrollPosition - imagesStart) / scrollRange;
        let previewTranslateY = scrollFraction * previewScrollRange;
        preview.style.transform = `translateX(-50%) translateY(${previewTranslateY}px)`;
      } else if (scrollPosition < imagesStart) {
        preview.style.transform = "translateX(-50%) translateY(0px)";
      } else {
        preview.style.transform = `translateX(-50%) translateY(${previewMaxTranslate}px)`;
      }

      const togglePoint = window.innerHeight * 4;
      const wrapper = document.querySelector(".wrapper");

      if (window.scrollY >= togglePoint) {
        wrapper.classList.add("dark-theme");
      } else {
        wrapper.classList.remove("dark-theme");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <nav>
        <a href="#">Nessa</a>
        <a href="#">Feliz Cumple</a>
      </nav>

      <div className="gallery">
        <div className="minimap">
          <div className="preview">
            {imagesData.map((image) => (
              <div className="item-preview" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="active-img-indicator"></div>
        </div>

        <div className="images">
          {imagesData.map((image) => (
            <div className="item" key={image.id}>
              <div className="item-img">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="item-copy">
                <p>{image.name}</p>
                <p>{String(image.id).padStart(2, "0")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1>
          Muy feliz cumple amor de mi vida, espero que se cumplan todos tus sueños
          y este año logremos al fin vivir ambos de lo que nos apasiona.
          Viajar por el mundo, comer cosas ricas y disfrutar de la vida juntos.
        </h1>
        <div className="hero-img">
          <img src={hero} alt="Hero" />
        </div>
        <h1>
          No puedo no pensar, que eres lo que quiero y mas, el amor de mi vida ey ey.
          No puedo no pensar, que eres lo que quiero y mas, una historia de amor sin final.
        </h1>
        <h1>
          Gracias por hacer feliz mis dias y mis noches. Por sacar siempre lo mejor de mi,
          y acompañarme en las buenas, en las malas y en las peores. Gracias por cuidar de mi
          y de nuestros bebes. Gracias por ser mi compañera de vida, mi amiga, mi amante, mi todo.
        </h1>
        <h1>Puro Cromo y Negro</h1>
      </div>
    </div>
  );
};

export default App;
