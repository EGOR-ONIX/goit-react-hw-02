import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <ul className={css["list-options"]}>
      <li>
        <button type="button" onClick={() => updateFeedback("good")}>
          <span className={css["button-text"]}>Good</span>
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("neutral")}>
          <span className={css["button-text"]}>Neutral</span>
        </button>
      </li>
      <li>
        <button type="button" onClick={() => updateFeedback("bad")}>
          <span className={css["button-text"]}>Bad</span>
        </button>
      </li>
      {totalFeedback !== 0 && (
        <li className={css.reset}>
          <button type="button" onClick={() => updateFeedback("reset")}>
            <span className={css["button-text"]}>Reset</span>
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
