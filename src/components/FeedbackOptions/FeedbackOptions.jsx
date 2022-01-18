import PropTypes from "prop-types";
import { FeedbackButton, Buttons } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map((opt) => (
        <FeedbackButton
          type="button"
          key={opt}
          onClick={() => onLeaveFeedback(opt)}
        >
          {opt}
        </FeedbackButton>
      ))}
    </Buttons>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
