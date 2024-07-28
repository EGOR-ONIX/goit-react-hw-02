import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <ul className={css["list-options"]}>
      <li>
        <button type="button" onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {totalFeedback !== 0 && (
        <li className={css.reset}>
          <button type="button" onClick={() => updateFeedback("reset")}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
