import React from "react";
import RepeatHead from "./_components/global/head";
import RepeatHeader from "./_components/global/header";
import RepeatFooter from "./_components/global/footer";
import RepeatMedia from "./_components/static/media";

export default function MediaPage() {
  return (
    <React.Fragment>
      <RepeatHead />
      <a className="absolute -top-6 left-0 z-50 focus:-top-0" href="#maincontent">
        Skip to main
      </a>
      <RepeatHeader />
      <RepeatMedia />
      <RepeatFooter />
    </React.Fragment>
  );
}
