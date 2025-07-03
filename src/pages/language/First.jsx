const PageOne = (props) => {
  const { lang, texts } = props;

  return (
    <div>
      <h1>{texts[lang].pageOneTitle}</h1>
      <p>{texts[lang].pageOneDesc}</p>
    </div>
  );
};

export default PageOne;
