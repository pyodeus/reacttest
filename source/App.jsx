import React from 'react';
// import Dev from './dev/main';

import logo from './assets/images/logo.svg';

// - Mobile: 375px
// - Desktop: 1440px
// - Font size: 18px
// - Family: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
// - Weights: 400, 700

function Upper() {
  return (
    <div className="bg-clr-Softred text-clr-Cream overflow-hidden
      rounded-xl md:rounded-3xl ps-[1.2rem] pe-[1.5rem] pt-[1.1rem] pb-[1.2rem]
      md:pt-[1.6rem] md:px-8 md:pb-6 grid grid-cols-2 items-center mb-4 md:mb-6"
    >
      <span className="text-clrVerypaleorange winnerText text-base md:text-lg">My balance</span>
      <img src={logo} alt="logo" className="ml-auto row-span-2 max-w-[3.75rem] md:max-w-none md:mr-2" />
      <span className="font-bold text-[1.5rem] md:text-[2rem]">$921.48</span>
    </div>
  );
}
function LowerChart() {
  const chart = {
    mon: 28,
    tue: 57,
    wed: 85,
    thu: 51,
    fri: 39,
    sat: 70,
    sun: 41,
  };

  return (
    <div
      className="text-clr-Mediumbrown grid grid-cols-7 text-center items-start
      gap-3 md:gap-5 mb-[1.35rem] md:mb-8"
    >
      {
        Object.entries(chart).map(([key, value]) => {
          const style = {
            height: `${value}%`,
          };
          return (
            <div key={key}>
              <div className="grid mb-[0.3rem] h-[11rem] items-end grid-rows-1">
                <div
                  className={(key === 'wed')
                    ? 'bg-clr-Cyan rounded-sm'
                    : 'bg-clr-Softred rounded-sm'}
                  style={style}
                />
              </div>
              <span className="text-xs md:text-base">{key}</span>
            </div>
          );
        })
      }
    </div>
  );
}
function Lower() {
  return (
    <div className="bg-clr-Verypaleorange pb-[1.35rem] pt-[1.35rem] md:pt-7 md:pb-11 px-5 md:px-10 rounded-xl md:rounded-3xl">
      <h1 className="text-[1.49rem] font-bold mb-6 md:mb-9 md:text-[2.07rem]">Spending - Last 7 days</h1>
      <LowerChart />
      <div className="flex justify-between items-end pt-6 md:pt-7 pb-1 border-t-2 border-clr-Cream">
        <div>
          <h2 className="text-clr-Mediumbrown mb-1 md:mb-3 md:text-lg">Total this month</h2>
          <span className="text-3xl md:text-[3.1rem] font-bold">$478.33</span>
        </div>
        <div className="grid text-end leading-4 md:leading-6 text-[0.95rem] md:text-lg gap-1 md:gap-0">
          <span className="font-bold">+2.4%</span>
          <span className="text-clr-Mediumbrown">from last month</span>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    // <Dev>
    <main className="w-full max-w-[21.5rem] md:max-w-[33.75rem]">
      <Upper />
      <Lower />
    </main>
    // </Dev>
  );
}

export default App;
