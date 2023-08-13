import React from 'react'
import { useDocumentTitle, useScrollTop } from '@/hooks'
// import { motion, useScroll } from 'framer-motion'

function PrivacyPolicy() {
  useDocumentTitle('Privacy Policy | GlowGauze')
  useScrollTop()
  // const { scrollYProgress } = useScroll()
  return (
    // <motion.div style={{ scaleX: scrollYProgress }}>
    <>
      <h1>PRIVACY POLICY</h1>
      <p>
        FUROR believes that its core responsibility is to ensure the privacy of
        all their customers is protected. We don’t mislead our customers to
        obtain their data for different uses. We want you to know about our
        privacy policy like the information we collect and where it is used. By
        shopping at furorjeans.com you automatically lie under our privacy
        policy agreement.
      </p>
      <h3>Personal identification information</h3>
      <p>
        We collect the customers personal identification information in
        different ways when they visit our website, when they fill any form or
        register on our webpage. We ask them to fill in different fields like
        name, email address, phone number and shipping addresses. They can also
        visit our web page as a guest. We only collect information when any
        customer submits their information voluntarily. They can also refuse to
        give any information while engaging in different activities or even when
        buying on our online shopping portal.
      </p>
      <h3>Non-personal identification information</h3>
      <p>
        We collect non-personal identification information of users when they
        visit or interact on our website. This information includes what kind of
        computer they are using, browsers, internet providers, operating systems
        or any technical information by which user is connected to our website.
      </p>
      <h3>Web browser cookies</h3>
      <p>
        To enhance user experience, we do not collect any “cookies” of those
        customers who interact on our website until or unless they voluntarily
        agree to it. Even if they have allowed us to save their cookies, they
        can refuse it anytime by changing their browser settings.
      </p>
      <h3>Sharing your personal information</h3>
      <p>
        We don’t sell, rent or trade our customers personal identification
        information. We strictly condemn the act of sharing it with any
        affiliates, advertisers and vendors. We might share general information
        like demographics, gender etc. which is not linked to any personal
        identification of any user.
      </p>
      <h3>Contacting us</h3>
      <p>
        If you have any queries or concerns regarding this Privacy Policy,
        please contact us at info@GlowGauze.com
      </p>
      <h3>Cookies</h3>
      <p>
        When you visit a website the “cookies” tend to store small amounts of
        data. The cookies cannot personally identify you however they can tell
        us about your computer settings and your internet connection e.g. your
        computer’s operating system and platform, IP address, your browsing
        timing, your area’s location and your browsing patterns.
      </p>
      </>
  )
}

export default PrivacyPolicy
