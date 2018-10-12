import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import './App.css';

const DEFAULT_STATE = { width: '100%', height: '100%' };

class Graph extends Component {

  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleWindowResize() {
    const { clientWidth, clientHeight } = this.refs.theWrapperOfTheCanvas;
    // The maximum width can't be greater that the height
    const width = Math.min(clientWidth, clientHeight);
    this.setState({ height: clientHeight, width });
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.handleWindowResize());
    this.handleWindowResize(this);
  }

  componentWillReceiveProps(nextProps) {
    // Get the data
    const { data } = nextProps;
    const keys = Object.keys(data);
    const months = keys.map ( (item) => {
      return data[item].month;
    });
    const prices = keys.map ( (item) => {
      return data[item].price_m2;
    });

    // Construct the chart
    const theChart = document.getElementById('theChart');
    new Chart(theChart, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '€ / m2 Barcelona',
                data: prices,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <div ref='theWrapperOfTheCanvas' className='graphClassNameOfComponent'>
        <canvas id='theChart' width={width} height={height} style={{maxWidth: width, maxHeight: height, marginLeft: 'auto', marginRight: 'auto' }}/>
      </div>
    );
  }

}

Graph.propTypes = {
  data: PropTypes.object.isRequired
};

export default Graph;
