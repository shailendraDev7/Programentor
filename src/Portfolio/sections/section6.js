import React from 'react';

import section6Styles from '../cssmodules/section6.module.scss';

function renderSection6(props) {
  return (
    <section className={section6Styles.contact}>
      <div className={section6Styles.flex_col}>
        <h3 className={section6Styles.medium_title}>Contact</h3>
        <p className={section6Styles.highlight}>
          {`I'm currently looking to join a cross-functional team that values improving people's lives`}
          <br />
          {`through accessible design. or have a project in mind? Let's connect.`}
          <br />
          <br />
          shailendracool433@gmail.com
        </p>
        <img className={section6Styles.image58} src={'/assets/4b66669cb98d5228aacf711128e70945.svg'} alt="alt text" />
      </div>
    </section>
  );
}

export default renderSection6;
