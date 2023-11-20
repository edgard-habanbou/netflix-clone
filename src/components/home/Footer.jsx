import React from "react";
import SelectLanguage from "../../components/common/SelectLanguage";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a className="txt-color" href="/">
          Questions? Contact us.
        </a>
        <div className="flex row footer-anchors">
          <div className="anchors-columns">
            <ul>
              <li>
                <a className="txt-color" href="/">
                  FAQ
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Investor Relations
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div className="anchors-columns">
            <ul>
              <li>
                <a className="txt-color" href="/">
                  Help Center
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Jobs
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="anchors-columns">
            <ul>
              <li>
                <a className="txt-color" href="/">
                  Account
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Corporate Information
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <div className="anchors-columns">
            <ul>
              <li>
                <a className="txt-color" href="/">
                  Media Center
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="txt-color" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <SelectLanguage />
        </div>
        <p className="mt-2">
          <span className="txt-color ">Netflix Lebanon</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
