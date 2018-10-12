import React, { Component } from 'react';
import './App.css';
import logo from '../img/logo.svg';
import menuIcon from '../img/menu.png';

const OPTION_HOME = 'Home';
const OPTION_SECTION = 'Section';
const DEFAULT_STATE = { selectedOption: OPTION_HOME, currentWidth: 0 };

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleWindowResize() {
    const currentWidth = this.refs.menu.offsetWidth;
    this.setState({ ...this.state, currentWidth });
  }

  componentDidMount () {
    window.addEventListener('resize', () => this.handleWindowResize());
    this.handleWindowResize()
  }

  generateButton(name, selectedOption) {
    const styleOfButton = { color: name === selectedOption ? 'grey' : 'white' };
    return <button
        type="button"
        className="btn-lg menuButton"
        style={styleOfButton}
        onClick={() => this.setState({ ...this.state, selectedOption: name })}>
        {name}
      </button>
  }

  getStylePropertiesOfMenuIcon() {
    return {
      width: 40,
      height: 42,
      paddingTop: '10px',
      paddingRight: '10px',
      float: 'right'
    }
  }

  render() {
    const { selectedOption, currentWidth } = this.state;
    return (
      <div ref='menu' className="menuClassNameOfComponent">
        <img alt='logo' src={logo} className="logo"/>;
        <div style={{display: currentWidth > 415 ? 'inline-block' : 'none', paddingTop: '10px'}}>
          {this.generateButton(OPTION_HOME, selectedOption)}
          {this.generateButton(OPTION_SECTION, selectedOption)}
        </div>
        <img alt='menuIcon' src={menuIcon} style={{...this.getStylePropertiesOfMenuIcon(), display: currentWidth <= 415 ? 'inline-block' : 'none'}}/>;
      </div>
    );
  }

}

export default Menu;
