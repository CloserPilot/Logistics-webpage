import React from 'react';
import Contact from '../../components/Contact';
import { Footer, Header } from '../../components';

const ContactPage = () => {
  return (
    <>
      <Header/>
        <main>
          <Contact />
        </main>
      <Footer/>
    </>
  );
};

export default ContactPage;