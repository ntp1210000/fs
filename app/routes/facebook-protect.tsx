import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';
import Imgfacebookprotect from '@/assets/facebookprotect.jpg';
const FacebookProtect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  }, []);

  const handleContinue = () => {
    navigate('/live');
  };

  return (
    <div className="sm:w-11/12 md:w-2/3 lg:w-2.5/5 xl:w-2/5 w-11/12 mx-auto pt-2">
      <div className="rounded-lg overflow-hidden mb-3">
        <img src={Imgfacebookprotect} alt="Facebook Protect" className="mx-auto block w-full" />
      </div>

      <p className="font-bold text-2xl">Welcome To Facebook Protect.</p>
      <p className="my-3">
        Your page's accessibility is limited, so we ask that higher security requirements be applied to that account. 
        We created this security program to unlock your Pages.
      </p>

      <div className="px-[14px]">
        <ol className="relative text-gray-500 border-s-2 border-gray-200">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#C4C4C4] rounded-full -start-[14px] ring-4 ring-white">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </span>
            <h3 className="text-black">We've enabled advanced protections to unlock your Page.</h3>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-facebook rounded-full -start-[14px] ring-4 ring-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 1 0 2Z" />
              </svg>
            </span>
            <h3 className="text-black">Below, we walk you through the process in detail and help you fully activate to unlock your Page.</h3>
          </li>
        </ol>
      </div>

      <button
        id="btn-continue"
        onClick={handleContinue}
        className="block text-lg cursor-pointer bg-blue-500 w-full text-center xl:py-3 sm:py-3 py-3 text-white rounded-lg font-semibold"
      >
        Continue
      </button>

      <p className="text-center mt-3 mb-5">
        Your page was restricted on <strong id="current-date"></strong>.
      </p>
    </div>
  );
};

export default FacebookProtect;