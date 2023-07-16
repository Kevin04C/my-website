import { FC } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

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
          className="group/link flex space-x-2 items-center text-neutral-800 cursor-pointer ghover:text-primary-900">
          <h2 className="font-bold text-xl group-hover:text-primary-900 hover:opacity-60">
            {name}
          </h2>
          <HiMiniArrowUpRight className="font-black cursor-pointer group-hover:text-primary-900 group-hover/link:-translate-y-[1px] group-hover/link:text-opacity-60 transition-all" />
        </a>
        <a className="group" href={github}>
          <VscGithubAlt
            size={20}
            className="text-gray-600 cursor-pointer group-hover:text-primary-900 group-hover:-translate-y-[2px] transition-transform hover:opacity-60"
          />
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
