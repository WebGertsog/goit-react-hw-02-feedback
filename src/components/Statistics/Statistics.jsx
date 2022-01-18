import PropTypes from "prop-types";
import {
  TextGood,
  TextNeutral,
  TextBad,
  TextTotal,
  StatText,
} from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const positive = () => {
    if (positivePercentage <= 33) {
      return "😔";
    }
    if (positivePercentage >= 33 && positivePercentage <= 66) {
      return "😐";
    }
    return "😃";
  };
  return (
    <>
      <TextGood>Good: {good}</TextGood>
      <TextNeutral>Neutral: {neutral}</TextNeutral>
      <TextBad>Bad: {bad}</TextBad>
      <TextTotal>Total: {total}</TextTotal>
      <StatText>
        Positive feedback: {positivePercentage}% {positive()}
      </StatText>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
