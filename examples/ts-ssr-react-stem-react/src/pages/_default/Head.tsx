import logoUrl from "./logo.svg";

const description = "My first Vite/Stem app";

const Head = () => {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="description" content={description} />
    </>
  );
};

export { Head };
