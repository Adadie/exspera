import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 700,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: true,
          color: '#9EB0B1',
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.001,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
          },
          onhover: {
            enable: true,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Experiment`,
    info: `Run experiments from your comfort zone`,
    image: `/images/vr-1.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Build`,
    info: `No need for luxurious materials to build prototypes`,
    image: `/images/vr-2.jpg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Explore`,
    info: `The sky is no longer the limit, your mind is!`,
    image: `/images/vr-3.jpg`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-gray-300 text-4xl lg:text-7xl font-bold text-center`)}>
          {' '}
          Get quality education and build beyond your expectations.
        </h1>
        {/* <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Don???t just take our word for it ??? see what leaders in digital are saying
        </p> */}
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.info}</p>
                </div>
              </div>
            ))}
            {/* <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all case studies
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
