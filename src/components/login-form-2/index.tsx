import React from 'react';
import Footer from './footer';
import Form from './form';
import Header from './header';
import SideBar from './sidebar';
import './styles.scss';

type Props = {};
const backgroundUrl =
  'https://demo.w3layouts.com/demos_new/template_demo/27-02-2019/key-demo_Free/282453819/web/images/bg.jpg';
const LoginForm2 = (props: Props) => {
  return (
    <div className="login-form-2">
      <div
        className="login-form-2__background"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <Header />
      <Form />
      <SideBar />
      <Footer />
    </div>
  );
};

export default LoginForm2;
