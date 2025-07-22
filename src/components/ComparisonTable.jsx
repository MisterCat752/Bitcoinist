import React from 'react';

const features = [
  'No logs stored of any kind',
  'All messages are End-to-End encrypted between the clients',
  'Keep your mobile number private',
];

const apps = [
  { name: 'Session', icon: '/session.png' },
  { name: 'Slack', icon: '/slack.png' },
  { name: 'Signal', icon: '/signal.png' },
  { name: 'Telegram', icon: '/telegram.png' },
];

const matrix = [
  // [Session, Slack, Signal, Telegram]
  [true, false, false, false],
  [true, false, true, false],
  [true, false, false, false],
];

export function ComparisonTable() {
  return (
    <div className='w-full max-w-3xl mx-auto'>
      {/* Desktop Table */}
      <div className='hidden md:grid grid-cols-[2fr_repeat(4,1fr)] gap-2  rounded-xl p-4'>
        <div className='font-bold col-span-1 text-[32px] text-white '>
          APPLICATIONS
        </div>
        {apps.map((a) => (
          <div key={a.name} className='flex justify-center   '>
            <img src={a.icon} alt={a.name} className='w-10 h-10' />
          </div>
        ))}
        {features.map((feature, i) => (
          <React.Fragment key={feature}>
            <div className='flex items-center  font-medium text-white bg-[linear-gradient(180deg,#344949_0%,#63909C_100%)]   rounded-lg px-2 py-3'>
              {feature}
            </div>
            {matrix[i].map((ok, ai) => (
              <div
                key={ai}
                className='flex justify-center   bg-[#191A1D] items-center'
              >
                {ok ? <CheckIcon /> : <CrossIcon />}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile List */}
      <div className='flex flex-col gap-3 md:hidden bg-[#191A1D] rounded-xl p-2'>
        {features.map((feature, i) => (
          <div key={feature} className='rounded-lg bg-[#232528] p-2'>
            <div className='text-xs font-semibold text-white mb-2 text-center'>
              {feature}
            </div>
            <div className='flex justify-around'>
              {apps.map((a, ai) => (
                <div key={a.name} className='flex flex-col items-center gap-1'>
                  <img src={a.icon} alt={a.name} className='w-8 h-8' />
                  {matrix[i][ai] ? <CheckIcon /> : <CrossIcon />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Можно заменить красивыми svg-иконками:
function CheckIcon() {
  return <span className='text-green-400 text-lg'>✔️</span>;
}
function CrossIcon() {
  return <span className='text-red-400 text-lg'>❌</span>;
}
