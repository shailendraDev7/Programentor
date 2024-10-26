import React from 'react';

import section3Styles from '../cssmodules/section3.module.scss';

function renderSection3(props) {
  return (
    <section className={section3Styles.work_section}>
      <div className={section3Styles.content_box6}>
        <img className={section3Styles.image1} src={'/assets/197fda19da0478c7002e39880ae262c4.png'} alt="alt text" />

        <div className={section3Styles.flex_col}>
          <h2 className={section3Styles.hero_title2}>Work Experience</h2>

          <div className={section3Styles.grid}>
            <div className={section3Styles.item}>
              <div
                className={section3Styles.content_box2}
                style={{ '--src': `url(${'/assets/f8e3bf4b1d896b4024090754db370ea7.png'})` }}>
                <div className={section3Styles.flex_row}>
                  <img
                    className={section3Styles.image12}
                    src={'/assets/9140f821d40e5ce15c338d7504a5a769.png'}
                    alt="alt text"
                  />

                  <div className={section3Styles.flex_col1}>
                    <h3 className={section3Styles.medium_title1}>Email Marketing</h3>
                    <p className={section3Styles.desc}>
                      Take your client onboard seamlessly by our amazing
                      <br />
                      tool of digital onboard process.
                    </p>
                    <button className={section3Styles.btn}>
                      {/* TODO */}
                      LEARN MORE
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={section3Styles.item1}>
              <div
                className={section3Styles.content_box4}
                style={{ '--src': `url(${'/assets/f8e3bf4b1d896b4024090754db370ea7.png'})` }}>
                <div className={section3Styles.flex_row1}>
                  <img
                    className={section3Styles.image63}
                    src={'/assets/7ad4f651123910578910659350555850.png'}
                    alt="alt text"
                  />

                  <div className={section3Styles.flex_col2}>
                    <h3 className={section3Styles.medium_title11}>Chief Marketing Officer</h3>
                    <p className={section3Styles.desc1}>
                      Take your client onboard seamlessly by our amazing
                      <br />
                      tool of digital onboard process.
                    </p>
                    <button className={section3Styles.btn1}>
                      {/* TODO */}
                      LEARN MORE
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={section3Styles.item1}>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image18}
                  src={'/assets/bdda2483992aefd59849184af11bfd64.png'}
                  alt="alt text"
                />

                <div className={section3Styles.flex_col3}>
                  <h3 className={section3Styles.medium_title12}>IT Officer</h3>
                  <p className={section3Styles.desc}>
                    Take your client onboard seamlessly by our amazing
                    <br />
                    tool of digital onboard process.
                  </p>
                  <button className={section3Styles.btn}>
                    {/* TODO */}
                    LEARN MORE
                    <br />
                  </button>
                </div>
              </div>
            </div>

            <div className={section3Styles.item2}>
              <div className={section3Styles.flex_row3}>
                <img
                  className={section3Styles.image20}
                  src={'/assets/fd745755d62de8ce12c6af2320ec2ca4.png'}
                  alt="alt text"
                />

                <div className={section3Styles.flex_col4}>
                  <h3 className={section3Styles.medium_title13}>PHP Tutor and Supervisor</h3>
                  <p className={section3Styles.desc2}>
                    Take your client onboard seamlessly by our amazing
                    <br />
                    tool of digital onboard process.
                  </p>
                  <button className={section3Styles.btn2}>
                    {/* TODO */}
                    LEARN MORE
                    <br />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection3;
