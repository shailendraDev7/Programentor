import React from 'react';

import section1Styles from '../cssmodules/section1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.nav_section}>
      <div
        className={section1Styles.container}
        style={{ '--src': `url(${'/assets/334984f11cd33ff53bade477cf054625.png'})` }}>
        <div className={section1Styles.navbar}>
          <img className={section1Styles.logo} src={'/assets/c4ebe4f202c8892ceb297e6e9eee8ffd.png'} alt="alt text" />

          <div className={section1Styles.menubar}>
            <h3 className={section1Styles.menuitem}>Home</h3>
            <h3 className={section1Styles.menuitem1}>About</h3>
            <h3 className={section1Styles.menuitem2}>Lab</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection1;