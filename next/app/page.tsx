'use client'
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Home() {
  const [countdown, setCountdown] = useState<number>(1000000 * 60); // Specify type for countdown
  const [t, setT] = useState<boolean>(false); // Specify type for t

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          setT(true); // Corrected the state setter name
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className="big_imag h-fit w-fit flex items-center flex-col gap-2 px-4 text-center">
        <div className="big_logo min-h-60 min-w-60 h-full w-full overflow-hidden relative">
          <img src="../../favicon.ico" className="w-full h-full absolute object-contain" alt="" />
        </div>
        <div className="big_txt">
          <h1 className="text-8xl p-10 transition-all max-[800px]:text-6xl max-[600px]:text-4xl flex gap-5 items-center justify-center flex-col uppercase"><b>Gain Access</b></h1>
          <hr className="mt-2 opacity-[.4]" />
        </div>
        <div className="estimated">
          <h1 className="estimate flex items-center justify-center gap-2 flex-col">
            <div>Your estimated wait time is:</div>
            <div className="text-5xl font-bold text-blue-600">{formatTime(countdown)}</div>
            <div>Please wait for this countdown:</div>
          </h1>
        </div>

        {/* Use t instead of t */}
        {t && (
          <div className="modal_here p-5 flex items-center justify-center fixed top-0 left-0 w-full h-full z-[1000000000]">
            <div className="modsz h-full w-full dim top-0 left-0 fixed" />
            <div className="max_mh overflow-auto w-full rounded-lg shadow-lg h-full max-h-[600px] z-[10000000] bs">
              <div className="head_path uppercase text-center p-2 bd">
                Below are the needed info.
              </div>
              <div className="ayaing">

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
