import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";
import ImgNextGen from "./utility/ImgNextGen";

const Service = ({ dark }) => {
  const [data, setData] = useState([]);
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/service.json"));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Our Services</span>
            <h3>What I Do for Clients</h3>
            <p>Transforming Ideas into Seamless Digital Experiences. Design, Development, eCommerce, Customization. Empowering Your Online Presence.</p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => "javascript:void(0)"}
                      >
                        <div className="list_inner tilt-effect" /* style={{ background: "linear-gradient(rgb(255 255 255 / 67%), rgb(255 255 255)), url(https://www.ideepak.me/img/service/react.png) no-repeat right top #fff" }} */>
                          <span className="icon">
                            <img
                              src={data.icon}
                              alt="image"
                            />
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            <span className="price">
                              <span>{data.price}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src="img/service/1.jpg"
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <ImgNextGen
            srcWebp="img/brushes/service-5.webp"
            fallback="img/brushes/service-5.png"
            alt="Our Services"
          />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <ImgNextGen
            srcWebp="img/brushes/service-6.webp"
            fallback="img/brushes/service-6.png"
            alt="Our Services"
          />
        </div>
      </div>
    </div>
  );
};
export default Service;
