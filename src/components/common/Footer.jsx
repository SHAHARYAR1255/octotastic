import * as Route from '@/constants/routes';
import logo from '@/images/logo-full.png';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {FacebookFilled, InstagramOutlined,TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  // return !visibleOnlyPath.includes(pathname) ? null : (
    return (
    <footer>
      <a href="#" className=''><h2>OCTOTASTIC
      </h2></a>

      <ul className='permalinks'>
        <li><a href={Route.HOME}>Home</a></li>
        <li><a href={Route.SHOP}>Shop</a></li>
        <li><a href={Route.FEATURED_PRODUCTS}>Featured</a></li>
        <li><a href={Route.RECOMMENDED_PRODUCTS}>Recommended</a></li>
        <li><a href={Route.CONTACT}>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#"><FacebookFilled /></a>
        <a href="#"><InstagramOutlined /></a>
        <a href="#"><TwitterOutlined /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright © 2018 -2022 Octotastic, Inc. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
