import React, { Component } from 'react';
import './ProgressTracker.css';
import Activity from './Activity';
import ActivityForm from './ActivityForm';
import uuid from 'uuid/v4';

export default class ProgressTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { activity: []}

    this.addActivity = this.addActivity.bind(this);
  }

  // Function that adds new activity onto state array of activity
  addActivity(item) {
    let newItem = {...item, id: uuid()};

    this.setState(state => ({
      activity: [...state.activity, newItem]
    }));
  }

  render() {

    let activities = this.state.activity.map(activity => {
      return(
      <Activity
        title={activity.title}
        desc={activity.desc}
        count={activity.count}
        timerMin={activity.timerMin}
        timerSec={activity.timerSec}
        breakMin={activity.breakMin}
        breakSec={activity.breakSec}
        key={activity.id}
      />
    )});

    return (
      <div className="progress-tracker">
        <section className="section--row">
          {activities}
          <ActivityForm addActivity={this.addActivity} />
        </section>        
      </div>
    );
  }
}