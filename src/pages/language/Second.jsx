import React from "react";

const PageTwo = (props) => {
  const { lang, texts } = props;
  console.log("hellotwo");
  return (
    <div>
      <h1>{texts[lang].pageTwoTitle}</h1>
      <p>{texts[lang].pageTwoDesc}</p>
    </div>
  );
};

export default PageTwo;

