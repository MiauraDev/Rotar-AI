import React from 'react'
import spotify from '../../assets/icons/spotify.svg'
import microsoft from '../../assets/icons/microsoft.svg';
import mcafee from '../../assets/icons/mcafee.svg';
import google from '../../assets/icons/google.svg';
import fedex from '../../assets/icons/fedex.svg';
import styles from './Companies.module.css'

const Companies = () => {
  return (
    <section className={styles.companies}>
      <img src={spotify} alt="spotify" />
      <img src={microsoft} alt="microsoft" />
      <img src={mcafee} alt="mcafee" />
      <img src={google} alt="google" />
      <img src={fedex} alt="fedex" />
    </section>
  )
}

export {Companies}