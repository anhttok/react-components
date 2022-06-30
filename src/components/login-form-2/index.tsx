import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Footer from './footer';
import Form from './form';
import Header from './header';
import './styles.scss';

type Props = {};
const backgroundUrl =
  'https://demo.w3layouts.com/demos_new/template_demo/27-02-2019/key-demo_Free/282453819/web/images/bg.jpg';
const LoginForm2 = (props: Props) => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="login-form-2">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fps_limit: 60,
          interactivity: {
            detect_on: 'canvas',
            events: {
              onclick: { enable: true, mode: 'push' },
              onhover: {
                enable: true,
                mode: 'attract',
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            line_linked: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: 'none',
              enable: true,
              out_mode: 'out',
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              anim: {
                enable: false,
                opacity_min: 0.1,
                speed: 1,
                sync: false,
              },
              random: false,
              value: 0.5,
            },
            shape: {
              character: {
                fill: false,
                font: 'Verdana',
                style: '',
                value: '*',
                weight: '400',
              },
              image: {
                height: 100,
                replace_color: true,
                src: 'images/github.svg',
                width: 100,
              },
              polygon: { nb_sides: 5 },
              stroke: { color: '#000000', width: 0 },
              type: 'circle',
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5,
            },
          },
          polygon: {
            draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: 'none',
            url: '',
          },
          retina_detect: true,
        }}
      />
      <div
        className="login-form-2__background"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <Header />
      <Form />
      <Footer />
      <div id="particles-js"></div>
    </div>
  );
};

export default LoginForm2;
