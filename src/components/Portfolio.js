import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>Unlocking the Power of Digital Possibilities: Showcasing a Symphony of Innovative Web Solutions in My Portfolio.</p>
          </div>
          <div className="portfolio_filter">
            
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution 2</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution 3</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
