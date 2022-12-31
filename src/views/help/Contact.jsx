import React from 'react'
import { useDocumentTitle, useScrollTop } from '@/hooks';

function Contact() {
  useDocumentTitle('Contact Us | Octotastic')
  useScrollTop()
  return (
    <div>Contact</div>
  )
}

export default Contact