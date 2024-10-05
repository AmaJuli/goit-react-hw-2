import React, { Component } from 'react';
import Section from './Section'; // Імпорт вашого компонента
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    document.title = 'HW-2 Feedback';
  }

  onClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <Section 
        title="Sip Happens Café" 
        subtitle="Please leave your feedback about our service by selecting one of the options below" // Передаємо підзаголовок
      >
        <FeedbackOptions
          onClick={this.onClick}
          feedbackOptions={this.state}
        />
        <Statistics feedbackOptions={this.state} />
      </Section>
    );
  }
}
