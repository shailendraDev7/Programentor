import React from 'react';

import section2Styles from '../cssmodules/section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.hero_section}>
      <div className={section2Styles.flex_col}>
        <div className={section2Styles.group}>
          <div className={section2Styles.flex_col1}>
            <h3 className={section2Styles.subtitle3_box}>
              <span className={section2Styles.subtitle3}>
                <span className={section2Styles.subtitle3_span0}>Hello! I Am </span>
                <span className={section2Styles.subtitle3_span1}>Shailendra Shrestha</span>
              </span>
            </h3>
            <h3 className={section2Styles.subtitle1}>A developer who</h3>
            <h2 className={section2Styles.hero_title1_box}>
              <span className={section2Styles.hero_title1}>
                <span className={section2Styles.hero_title1_span0}>
                  Makes informed <br />  
                </span>
                <span className={section2Styles.hero_title1_span1}>Decision</span>
                <span className={section2Styles.hero_title1_span2}>...</span>
              </span>
            </h2>
            <div className={section2Styles.info}>Because if the cover does not impress you what else can?</div>
          </div>

          <img className={section2Styles.image8} src={'/assets/6f2ef90f79424a3748c8551e8882b384.png'} alt="alt text" />

          <div
            className={section2Styles.content_box1}
            style={{ '--src': `url(${'/assets/3a738fb4715bad9c17690b9f2de84ceb.png'})` }}>
            <img
              className={section2Styles.image7}
              src={'/assets/03033ebfcfd0f49350c95eadc175cc28.png'}
              alt="alt text"
            />
            <img
              className={section2Styles.image60}
              src={'/assets/8777c82f2b2f33597e99ee1b0b5341e4.png'}
              alt="alt text"
            />
          </div>
        </div>

        <div className={section2Styles.flex_col2}>
          <h2 className={section2Styles.hero_title}>{`I'm a Frontend Developer.`}</h2>

          <div className={section2Styles.flex_row}>
            <h3 className={section2Styles.subtitle4}>Currently, working at Solution Gate Pvt. LTd.</h3>
            <img
              className={section2Styles.image11}
              src={'/assets/7dd01af375789098c8e3a3750b5acd5b.png'}
              alt="alt text"
            />
          </div>

          <h3 className={section2Styles.subtitle2}>
            I’m a self-taught developer, engaged in the industry for 4+ years now.
            <br />I believe that every digital products must contribute more for the user needs and business goals.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;
