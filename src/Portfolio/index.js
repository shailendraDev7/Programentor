import './App.css';
import renderSection1 from './Portfolio/sections/section1';
import renderSection2 from './Portfolio/sections/section2';
import renderSection4 from './Portfolio/sections/section4';
import renderSection3 from './Portfolio/sections/section3';
import renderPortfolioSection from './Portfolio/sections/portfolioSection';
import renderSection6 from './Portfolio/sections/section6';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './cssmodules/index.module.scss';

function App(props) {
  return (
    <main
      className={cn(StyleSheet.main, props.className, 'untitled-page')}
      style={{ '--src': `url(${'/assets/bef8f25107b627dd95d637540901c772.png'})` }}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderPortfolioSection(props)}
      {renderSection6(props)}
    </main>
  );
}

App.propTypes = {
  className: PropTypes.string
};

export default App;
