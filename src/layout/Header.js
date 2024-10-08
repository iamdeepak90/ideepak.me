import ImgNextGen from "../components/utility/ImgNextGen";

const Header = ({ logo }) => {
  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="https://www.ideepak.me/">
            <ImgNextGen
              srcWebp=""
              fallback="img/ideepak.png"
              alt="iDeepak.me"
            />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="https://www.ideepak.me/#home">Home</a>
              </li>
              <li>
                <a href="https://www.ideepak.me/#about">About</a>
              </li>
              <li>
                <a href="https://www.ideepak.me/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="https://www.ideepak.me/#service">Service</a>
              </li>
              <li>
                <a href="https://www.ideepak.me/#blog">Blog</a>
              </li>
              <li>
                <a href="https://www.ideepak.me/#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a href="https://www.upwork.com/freelancers/~016914610b6c056689"><span>Hire Me</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
