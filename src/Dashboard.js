import React, { useState } from 'react';
import { Chart } from 'react-charts'

function LoginPage() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
  const [jobcoinBalance, setJobCoinBalance] = useState(12389);
  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            Jobcoin Balance
            <hr />
            {jobcoinBalance}
          </div>
          <div className="tile is-child box">
            Send Jobcoin
            <label style={{ display: 'block' }}>
              Destination Address
              <input style={{ display: 'block' }} type="text" />
            </label>
            <label style={{ display: 'block' }}>
              Amount to send
              <input style={{ display: 'block' }} type="text" />
            </label>
            <button>Send Jobcoins</button>
          </div>
        </div>
        <div className="tile box">
          Jobcoin History Graph
          {lineChart}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
