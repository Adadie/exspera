import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Schools`,
    description: `Whether it’s a trip to a virtual zoo or a science experiment done in a virtual lab, virtual reality helps students to not only see, but interact with the lessons they are being taught.`,
  },
  {
    title: `Engineers`,
    description: `Engineers are allowed to test a product in a safe environment. As a matter of fact, the use of VR in engineering allows engineers to create dangerous and hazardous situations that are usually challenging or even impossible to create in real life. As a result, engineers can make all the necessary adjustments that would allow them to tweak a product to perfection before it hits the production and assembly lines.`,
  },
  {
    title: `Scientists`,
    description: `Virtual reality environment offers scientists a more instinctive way to understand their data, whether it signifies an object such as a tumor or a molecule, or is represented in the form of a graph, with many variables plotted out.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>No more limitations</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your mind
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
