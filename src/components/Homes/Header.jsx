const Header = ({subtitle, title}) => {
  return (
    <>
      <p className="mb-2 font-semibold uppercase text-primary">{subtitle}</p>
      <h2 className="text-3xl font-bold dark:text-white sm:text-4xl capitalize px-5">
        {title}
      </h2>
    </>
  );
};

export default Header;
