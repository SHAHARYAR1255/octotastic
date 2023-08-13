import React from 'react'
import { useDocumentTitle, useScrollTop } from '@/hooks';

function Contact() {
  useDocumentTitle('Contact Us | GlowGauze')
  useScrollTop()
  return (
    <div>Contact</div>
  )
}

export default Contact