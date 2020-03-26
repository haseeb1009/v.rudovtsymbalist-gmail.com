import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../styles/StepsCard.scss';

const StepsCard = props => {
  return (
    <div id={props.id} style={{ width: '60vw' }} className="stepsCard">
      <TransitionGroup>
        <div id="row-tag">
          <CSSTransition key={props.number} timeout={1000} classNames="stepscardAnimation">
            <div className="number" style={{ background: props.numberbckg }}>
              {props.number}
            </div>
          </CSSTransition>
          <CSSTransition key={props.h2} timeout={1000} classNames="stepscardAnimation">
            <h2 style={{ width: props.h2width, color: props.h2color, textAlign: 'start' }}>
              {props.h2}
            </h2>
          </CSSTransition>
        </div>
        <CSSTransition key={props.p} timeout={1000} classNames="stepscardAnimation">
          <p style={{ width: '50vw' }}>{props.p} </p>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default StepsCard;
