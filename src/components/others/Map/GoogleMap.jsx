import React from 'react'

const GoogleMap = () => {

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d155788.15711309793!2d69.2485558412089!3d41.30466031379187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1714922556892!5m2!1sru!2s"
        width="1110"
        height="322"
        className='border-0 focus:border-0 rounded-[14px]'
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>   
  )
}

export default GoogleMap
