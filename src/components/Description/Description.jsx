import css from "./Description.module.css";

const Description = ({ title, children }) => {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <p className={css.descriotion}>{children}</p>
    </>
  );
};

export default Description;
