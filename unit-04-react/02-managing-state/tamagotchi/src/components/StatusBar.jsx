import React from 'react';
import Meter from './Meter';
import PropTypes from 'prop-types';

function StatusBar(props) {
  function setColor(level) {
    let statusColor;
    if (level > 65) {
      statusColor = '#46da46';
    } else if (level > 35) {
      statusColor = 'yellow';
    } else {
      statusColor = 'red';
    }
    return statusColor;
  }

  return (
    <section>
      <style jsx>
        {`
          section {
            height: 105px;
            width: 100%;
            position: absolute;
            border-bottom: 1px solid #ccc;
            background-color: #fff;
            z-index: 100;
          }

          .status-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
            padding: 0 20px 20px;
          }

          h2 {
            text-align: center;
          }
        `}
      </style>
      <div className="status-container">
        <div>
          <h2>Hunger</h2>
          <Meter
            level={props.hungerLevel}
            color={setColor(props.hungerLevel)}
          />
        </div>
        <div>
          <h2>Energy</h2>
          <Meter level={props.energyLevel}
            color={setColor(props.energyLevel)}
          />
        </div>
        <div>
          <h2>Hygiene</h2>
          <Meter level={props.hygieneLevel}
            color={setColor(props.hygieneLevel)}
          />
        </div>
        <div>
          <h2>Happiness</h2>
          <Meter level={props.happinessLevel}
            color={setColor(props.happinessLevel)}
          />
        </div>
      </div>
    </section>
  );
}

StatusBar.propTypes = {
  hungerLevel: PropTypes.number.isRequired,
  energyLevel: PropTypes.number.isRequired,
  happinessLevel: PropTypes.number.isRequired,
  hygieneLevel: PropTypes.number.isRequired
};

export default StatusBar;
