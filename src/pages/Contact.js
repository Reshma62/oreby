import React from 'react'
import BreadCrumb from '../components/layout/BreadCrumb';
import Container from '../components/layout/Container';
import InputField from '../components/layout/InputField';

const Contact = () => {
  return (
    <Container>
      <BreadCrumb />
      <div className="mt-32 mb-11">
        <h2 className="font-dm text-4xl font-bold text-primary">
          Fill up a Form
        </h2>
      </div>
      <div className="w-1/2">
        <InputField as="input" title="name" placeholder="Your name here" />
        <InputField as="input" title="Email" placeholder="Your email here" />
        <InputField
          as="textArea"
          title="Message"
          placeholder="Your message here"
        />
      </div>
    </Container>
  );
}

export default Contact