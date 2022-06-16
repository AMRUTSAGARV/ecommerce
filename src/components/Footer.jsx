import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/* Column1 */}
              <div className="col">
                <h4>LA COLLECTION</h4>
                <h1 className="list-unstyled">
                  <li>109-666-0204</li>
                  <li>Los Angeles, USA</li>
                  <li>MX-Street, Westside</li>
                </h1>
              </div>
              {/* Column2 */}
              <div className="col">
                <h4>SERVICES</h4>
                <ui className="list-unstyled">
                  <li>Marketing</li>
                  <li>Development</li>
                  <li>Design</li>
                </ui>
              </div>
              {/* Column3 */}
              <div className="col">
                <h4>SOCIAL</h4>
                <ui className="list-unstyled">
                  <li>FaceBook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Youtube</li>
                </ui>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} LA COLLECTION | All rights reserved |
                Terms Of Service | Privacy
              </p>
            </div>
          </div>
        </div>
      );
}

export default Footer