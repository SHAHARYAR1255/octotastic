import React from 'react'
import { useDocumentTitle, useScrollTop } from '@/hooks';

const Terms = () => {
  useDocumentTitle('Terms & Conditions | GlowGauze')
  useScrollTop()

  return (
    <div className=''>
      <h2>TERMS AND CONDITIONS</h2>
      <p>
        Once an order is placed, it is validated and forwarded to the processing
        department. Usually, it takes about 24-48 hours for the order to be
        shipped. Currently, we are offering FREE* shipping all over Pakistan on
        all the orders above and upto 2000/- Rs. *Conditions apply on shipping
        charges at Deals with respect to them. The usual turnaround time is
        about 1 week for orders outside Pakistan and 2 to 3 days within country.
        However, delays in transit are possible due to conditions of the
        metropolitan or any other uncontrollable circumstances. The package will
        be delivered via Courier Companies and will have a tracking number
        available to track the status of the order. *Credit Card orders required
        48 working hours for verification from the bank.
      </p>
      <h3>PACKAGES LOST IN TRANSIT:</h3>
      <p>
        If your order is lost in transit, Furor.com will investigate with the
        Shipping carrier. It may take 2-3 days for this process. If the package
        is still not located, we will issue/offer a replacement.
      </p>
      <h3>PRODUCT IS DAMAGED OR STOLEN IN SHIPPING:</h3>
      <p>
        A Product is considered damaged if the product received was physically
        damaged in a material way. A product is considered stolen if the package
        received is in open condition and is empty. In either case, you may
        contact our Customer Support department. We are going to investigate
        this issue and may ask for a digital picture of the received
        package/product or any other proof for claim purpose as well.
      </p>
      <h3>ORDER CANCELATION:</h3>
      <p>
        Orders can be cancelled upon customer’s request any time before it is
        processed. FurorJeans reserves the right to cancel orders for any
        reasons of the following reasons:
      </p>
      <ul>
        <li>Articles Out-Of-Stock</li>
        <li>Pricing Difference</li>
        <li>Shipping Cost Difference</li>
        <li>Technical Error</li>
      </ul>
      <p>
        In case of a cancellation, the amount paid via bank transfer or
        credit/debit card shall be refunded within 20 days of receipt of the
        order.
      </p>
      <h3>Refund And Exchange Policy</h3>
      <p>
        Though we strive to give you a great customer experience each time you
        shop with us, if you find any damage or faulty article or product or
        sizes, we offer you to Exchange Your Order within 15 Days of Delivery on
        all fresh items. That’s true! All you need to do is to give us a call or
        drop an email at info@furorjeans.com within a period of 15 days, from
        the date of delivery. However, you must understand that we can’t bear a
        loss either; so exchange of products will be accepted only if the
        products are returned in an UN-USED condition with the tags intact and
        in their original packaging, in an unwashed and undamaged condition and
        only on Fresh items which are not on promotion or discounts. Exchanges
        will be only catered at the shop. However, an exchange is subject to
        availability of the item in our stock or items not on promotion or
        discount. Damages due to neglect, improper usage or application will not
        be covered under our exchange Policy.
      </p>
      <p>
        If you choose to exchange an item for reason of mismatch of size or
        receipt of a defective item, you will be provided with a replacement of
        the item, free of cost. Refund is only valid for international orders
        only. However, an exchange is subject to availability of the item in our
        stock. Exchange of Sizes/ replacement for goods/ merchandise is subject
        to inspection and checking by our QA team. For more information and
        details about Refund and Exchange, kindly visit our FAQ page. Or call us
        from Monday to Saturday between 10 AM to 06 PM (PST) at the numbers
        below.
      </p>
      <h2>Contact us :</h2>
      <h4>Email </h4>
      <p>info@GlowGauze.com</p>
      <h4>Phone </h4>
      <p>(021) 46465664</p>
      <h4>WhatsApp</h4>
      <p> 03546446466</p>
    </div>
  )
}

export default Terms
