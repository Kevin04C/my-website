import { FC } from 'react';

interface Props {
  name: string;
  description: string;
  technologies: string[];
  project: string;
  github: string;
}

export const Project: FC<Props> = ({ name, description, technologies, project, github }) => {
  return (
    <article className=" group bg-white border p-5 rounded-[5px] hover:border-primary-900 transition-colors hover:bg-primary-900 hover:bg-opacity-5">
      <header className="flex justify-between items-center mb-2">
        <a
          href={project}
          target="_blank"
          className="group/link flex space-x-3 items-center text-neutral-800 cursor-pointer ghover:text-primary-900">
          <h2 className="font-bold text-xl group-hover:text-primary-900 hover:opacity-60">
            {name}
          </h2>
          <i className="fa-solid fa-arrow-up-right-from-square font-black cursor-pointer group-hover:text-primary-900 group-hover/link:-translate-y-[1px] group-hover/link:text-opacity-60 transition-all text-[16px]"></i>
        </a>
        <a className="group" href={github} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 cursor-pointer group-hover:text-primary-900 group-hover:-translate-y-[2px] transition-transform hover:opacity-60"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
          </svg>
        </a>
      </header>
      <div className="mb-4">
        <p className="text-gray-600 leading-[22px]">{description}</p>
      </div>
      <div>
        <ul className="flex gap-2">
          {technologies.map((technology, i) => (
            <li
              key={i}
              className="py-1 px-2 rounded-[5px] text-xs font-semibold border border-primary-900 border-opacity-10 bg-primary-900 bg-opacity-10 text-primary-900 transition-all">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
