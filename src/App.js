import React, { Component } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notofication";
import { GlobalStyle } from "./components/Global.styled";
import { Container } from "./App.styled.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementState = (opt) => {
    this.setState((prevState) => ({
      [opt]: prevState[opt] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const summ = Math.round((good / total) * 100);
    return summ ? summ : "0";
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleIncrementState}
            />
          </Section>

          <Section title={"Statistics:"}>
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback!"></Notification>
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default App;
