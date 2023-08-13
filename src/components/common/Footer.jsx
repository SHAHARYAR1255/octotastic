import * as Route from '@/constants/routes'
import logo from '@/images/logo-wordmark.png'
import React from 'react'
import { useLocation, Link} from 'react-router-dom'
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

const Footer = () => {
  const { pathname } = useLocation()

  const visibleOnlyPath = [Route.HOME, Route.SHOP]

  // return !visibleOnlyPath.includes(pathname) ? null : (
  return (
    <footer>
      <Link to="/">
        <h2 className="footer__h2">GlowGauze</h2>
      </Link>

      <ul className="permalinks">
        <li>
          <Link to={Route.HOME}>Home</Link>
        </li>
        <li>
          <Link to={Route.SHOP}>Shop</Link>
        </li>
        <li>
          <Link to={Route.CONTACT}>Contact</Link>
        </li>
        <li>
          <Link to={Route.RECOMMENDED_PRODUCTS}>About Us</Link>
        </li>
        <li>
          <Link to={Route.PRIVACYPOLICY}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={Route.TERMS}>Terms & Conditions</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <Link to="#">
          <FacebookFilled />
        </Link>
        <Link to="#">
          <InstagramOutlined />
        </Link>
        <Link to="#">
          <TwitterOutlined />
        </Link>
      </div>
      <div className="footer__copyright">
        <small>
          Copyright &copy; 2019 -2022 GlowGauze, Inc. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
