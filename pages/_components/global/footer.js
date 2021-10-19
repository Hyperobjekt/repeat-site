import React from "react";

export default function RepeatFooter() {
  return (
    <footer className="flex mt-10 mb-32 pt-4 border-t-2 border-repeat container max-w-screen-lg h-full m-auto">
      <div className="flex-1">
        <img className="max-h-10" src="/images/princeton-logo.svg" alt="" />
      </div>
      <div className="flex-1 text-right">
      <a href="/" className="hidden inline-block pl-4 text-sm text-repeat-black font-semibold">
          Home
        </a>
        <a href="/about" className="hidden inline-block pl-4 text-sm text-repeat-black font-semibold">
          About
        </a>
        <a href="" className="hidden inline-block pl-4 text-sm text-repeat-black font-semibold">
          Policies
        </a>
        <a href="" className="hidden inline-block pl-4 text-sm text-repeat-black font-semibold">
          Media
        </a>
        <a href="" className="hidden inline-block pl-4 text-sm text-repeat-black font-semibold">
          NZAP
        </a>
      </div>
    </footer>
  );
}
