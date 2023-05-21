const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.png`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      9+
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      50+
                    </h3>
                    <span className="name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Web Developer`}</span>
                <h3>Empowering your web experiences!</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`I'm a passionate full stack developer, dedicated to crafting dynamic and immersive websites. With a keen eye for user-centric design and expertise in coding, I bring ideas to life, blending functionality and aesthetics to create memorable online experiences. Let's collaborate and bring your vision to the digital world!`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="https://www.upwork.com/freelancers/~016914610b6c056689">
                  <span>Hire Me on Upwork</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
