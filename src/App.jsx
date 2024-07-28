import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("saved-feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );

    // const savedFeedback = localStorage.getItem("saved-feedback");

    // if (savedFeedback !== null) {
    //   return JSON.parse(savedFeedback);
    // }

    // return {
    //   good: 0,
    //   neutral: 0,
    //   bad: 0,
    // };
  });

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType !== "reset")
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    else
      setFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <section className="feedback-section">
      <Description title="Sip Happens Café">
        Please leave your feedback about our service by selecting one of the
        options below.
      </Description>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </section>
  );
}

export default App;
