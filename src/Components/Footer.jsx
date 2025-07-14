import React from 'react';
import Button from '@mui/material/Button';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="bg-primary pt-5 pb-2 px-3">
      <div className="row">
        {/* Brand Info */}
        <div className="col-md-4 mb-4">
          <h1 className="text-light">
            <span style={{ color: 'orange', fontSize: '40px', fontWeight: '600' }}>RB</span>uilder
          </h1>
          <p style={{ textAlign: 'justify' }} className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam minima harum labore
            placeat voluptas. Natus beatae ipsum quasi nisi error dolores, assumenda, reprehenderit
            repellendus iusto, quibusdam minima. Ratione, voluptas commodi.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-4 mb-4">
          <h1 className="text-light">
            <span style={{ color: 'orange', fontSize: '40px', fontWeight: '600' }}>Q</span>uick{' '}
            <span style={{ color: 'orange', fontSize: '40px', fontWeight: '600' }}>L</span>inks
          </h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-light text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-light text-decoration-none">
                Resume Creator
              </a>
            </li>
            <li>
              <a href="#" className="text-light text-decoration-none">
                History
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-md-4 mb-4 px-md-5">
          <h1 className="text-light">
            <span style={{ color: 'orange', fontSize: '40px', fontWeight: '600' }}>C</span>ontact{' '}
            <span style={{ color: 'orange', fontSize: '40px', fontWeight: '600' }}>U</span>s
          </h1>
          <form>
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="email"
                className="form-control me-3"
                placeholder="Enter Your Email..."
              />
              <Button variant="outlined" color="warning" className="py-1 px-4 text-light" type="submit">
                Subscribe
              </Button>
            </div>
          </form>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <ImFacebook2 className="fs-2 text-warning" />
            <FaInstagram className="fs-2 text-warning" />
            <FaLinkedin className="fs-2 text-warning" />
            <FaXTwitter className="fs-2 text-warning" />
          </div>
        </div>
      </div>

      <hr className="text-light w-75 mx-auto my-4" />

      <p className="text-center text-light">
        &copy; 2025 Luminar Technolab. ® All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
