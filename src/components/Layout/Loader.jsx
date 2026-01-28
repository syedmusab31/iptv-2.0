import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div aria-hidden className="w-12 h-12 rounded-full border-4 border-white/10 border-t-cyan-400 animate-spin" />
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default Loader;
