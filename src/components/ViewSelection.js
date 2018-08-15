import React from 'react';

const ViewSelection = (props) => (
  <div className="tab">
    <button
      className={props.showUnanswered ? 'active' : 'notactive' }
      onClick={props.showUnanswered ? undefined : props.handleToggle}>
      Unanswered
    </button>
    <button
      className={props.showUnanswered ? 'notactive' : 'active' }
      onClick={props.showUnanswered ? props.handleToggle : undefined}>
      Answered
    </button>
  </div>
)
  
export default ViewSelection;