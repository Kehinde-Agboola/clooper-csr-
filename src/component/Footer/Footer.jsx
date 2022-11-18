import React from "react";
import cl from ".././img/cl.svg";
import linkedin from ".././img/linkedin.svg";
import instagram from ".././img/instagram.svg";
import youtube from ".././img/youtube.svg";
import twitter from ".././img/twitter.svg";
import facebook from ".././img/facebook.svg";
import "./footer.css";
const Footer = () => {
  return (
    <main className="footer__bg py-10">
      <section>
        <div className="footer__links md:grid md:grid-cols-4 gap-[2rem]">
          <div className="logo__div text-white">
            <img scr={cl} alt="logo" />
            <p>© 2022 | Clooper</p>
          </div>
          <div className="service__link">
            <p>
              <a href="#">Service</a>
            </p>
            <ul>
              <li>
                <a href="#">Short Term Lets</a>
              </li>
              <li>
                <a href="#">Long Term Lets</a>
              </li>
              <li>
                <a href="#">Long Term Accommodations</a>
              </li>
              <li>
                <a href="#">Corporate Housing</a>
              </li>
              <li>
                <a href="#">Holiday Lets</a>
              </li>
            </ul>
          </div>
          <div className="resource__link">
            <p>
              <a href="#">Resources</a>
            </p>
            <ul>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Cut my bills</a>
              </li>
              <li>
                <a href="#">Switch my broadband</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
          <div className="company__link">
            <p>
              <a href="#">Company</a>
            </p>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">CSR</a>
              </li>
              <li>
                <a href="#">We’re Hiring!</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__img md:grid md:grid-cols-5">
          <img scr={linkedin} alt="Linkedin" />
          <img scr={instagram} alt="Instagram" />
          <img scr={youtube} alt="Youtube" />
          <img scr={facebook} alt="facebook" />
          <img scr={twitter} alt="Twitter" />
        </div>
      </section>
    </main>
  );
};
export default Footer;
