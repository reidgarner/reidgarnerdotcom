import Head from 'next/head'
import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
import s from '../styles/Home.module.scss'

const Home = () => {
  const form = useRef(null);
  init("oFD5VZK1JRV47qKYr");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8il61ud","template_bv22tqj", form.current)
      .then((result) => {
        console.log('ONE');
        console.log(result.text);
      }, (error) => {
        console.log('TWO');
          console.log(error.text);
      });
  };

  return (
    <div className={s.landing}>
      <Head>
        <title>ReidGarner Dot Com</title>
        <meta name="description" content="ReidGarner Dot Com" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <main className={s.contentContainer}>
        <h2 className={s.formHeader}>Contact Reid</h2>
        <form
          className={s.form}
          ref={form}
          onSubmit={sendEmail}
        >
          <div className={s.topInputsContainer}>
            <label className={s.inputContainer}>
              Name:
              <input className={s.input} type="text" name="name" required />
            </label>
            <label className={s.inputContainer}>
              Phone:
              <input className={s.input} type="text" name="phone" />
            </label>
            <label className={s.inputContainer}>
              Email:
              <input className={s.input} type="text" name="email" required />
            </label>
          </div>
          <label className={s.commentContainer}>
            Comment:
            <textarea className={`${s.input} ${s.comment}`} type="text" name="comment" required />
          </label>
          <input className={s.submitButton} type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}

export default Home;