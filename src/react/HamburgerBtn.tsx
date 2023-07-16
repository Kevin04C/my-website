import { useEffect, useState } from 'react';
import { Button } from './Button.js';

export const HamburgerBtn = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showMenu]);

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.375 10.2083H30.625M13.8396 17.5H30.625M4.375 17.5H8.73542M4.375 24.7916H30.625"
            stroke="#4617FF"
            strokeWidth="1.5"
            strokeLinecap="round"></path>
        </svg>
      </button>

      <div
        className={`${
          showMenu ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } absolute z-10 inset-0 w-full h-screen bg-black bg-opacity-70 flex justify-end transition-opacity duration-200 overflow-hidden`}
        onClick={toggleMenu}>
        <ul
          className={`${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col text-left gap-4 w-3/4 h-full bg-white p-8 transition-all duration-300`}
          onClick={e => e.stopPropagation()}>
          <li className="self-end">
            <button onClick={toggleMenu}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7909 10L19.4767 4.3142C20.1744 3.61648 20.1744 2.48523 19.4767 1.78693L18.2131 0.523295C17.5153 -0.174432 16.3841 -0.174432 15.6858 0.523295L10 6.20909L4.3142 0.523295C3.61648 -0.174432 2.48523 -0.174432 1.78693 0.523295L0.523295 1.78693C-0.174432 2.48466 -0.174432 3.61591 0.523295 4.3142L6.20909 10L0.523295 15.6858C-0.174432 16.3835 -0.174432 17.5148 0.523295 18.2131L1.78693 19.4767C2.48466 20.1744 3.61648 20.1744 4.3142 19.4767L10 13.7909L15.6858 19.4767C16.3835 20.1744 17.5153 20.1744 18.2131 19.4767L19.4767 18.2131C20.1744 17.5153 20.1744 16.3841 19.4767 15.6858L13.7909 10Z"
                  fill="#4617FF"
                />
              </svg>
            </button>
          </li>
          <li className="font-medium">
            <a
              href="#sobremi"
              className="hover:text-primary-900 transition-colors"
              onClick={toggleMenu}>
              SOBRE MI
            </a>
          </li>
          <li className="font-medium">
            <a
              href="#skills"
              className="hover:text-primary-900 transition-colors"
              onClick={toggleMenu}>
              SKILLS
            </a>
          </li>
          <li className="font-medium">
            <a
              href="#proyectos"
              className="hover:text-primary-900 transition-colors"
              onClick={toggleMenu}>
              PROYECTOS
            </a>
          </li>
          <li>
            <Button href="/blog" type="primary" text="Blog" />
          </li>
        </ul>
      </div>
    </>
  );
};
