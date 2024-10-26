import React from 'react';

import portfolioSectionStyles from '../cssmodules/portfolioSection.module.scss';

function renderPortfolioSection(props) {
  return (
    <section className={portfolioSectionStyles.portfolioSection}>
      {/* Portfolio showcase section */}

      <div className={portfolioSectionStyles.projectGallery}>
        <img
          className={portfolioSectionStyles.galleryImage}
          src={'/assets/e6fdc73212d719713de942ee6714730d.png'}
          alt="alt text"
        />

        <div className={portfolioSectionStyles.thumbnailContainer}>
          <img
            className={portfolioSectionStyles.thumbnailRight}
            src={'/assets/a5ad0a54c936233093f40f2003eacfdc.png'}
            alt="alt text"
          />
          <img
            className={portfolioSectionStyles.thumbnailLeft}
            src={'/assets/197fda19da0478c7002e39880ae262c4.png'}
            alt="alt text"
          />
        </div>
      </div>

      <div className={portfolioSectionStyles.featuredProjects}>
        {/* Featured projects showcase */}

        <article className={portfolioSectionStyles.projectCard}>
          <img
            className={portfolioSectionStyles.projectImage}
            src={'/assets/db50a724aba43f8f954e2c5659701cfb.png'}
            alt="alt text"
          />

          <div className={portfolioSectionStyles.projectDetails}>
            <p className={portfolioSectionStyles.projectLabel}>Featured  Project</p>
            <p className={portfolioSectionStyles.projectTitle}>Portfolio Maker</p>

            <div
              className={portfolioSectionStyles.projectDescription}
              style={{ '--src': `url(${'/assets/95089371131f648154070a6046a6e1d1.png'})` }}>
              <p className={portfolioSectionStyles.descriptionText}>
                A web app for visualizing personalized Spotify data. View your
                <br />
                top artists, top tracks, recently played tracks, and detailed audio
                <br />
                information about each track. Create and save new playlists of
                <br />
                recommended tracks based on your existing playlists and more.
              </p>
            </div>

            <div className={portfolioSectionStyles.techStack}>
              <img
                className={portfolioSectionStyles.techIcon}
                src={'/assets/af95ca2102ebcffbc23ea898bf3d0d04.png'}
                alt="alt text"
              />
              <img
                className={portfolioSectionStyles.techIcon1}
                src={'/assets/af95ca2102ebcffbc23ea898bf3d0d04.png'}
                alt="alt text"
              />
            </div>
          </div>
        </article>

        <article className={portfolioSectionStyles.projectCard1}>
          <img
            className={portfolioSectionStyles.projectImage1}
            src={'/assets/709892c3cf85b4f2ed25921534774a87.png'}
            alt="alt text"
          />

          <div className={portfolioSectionStyles.projectDetails1}>
            <div className={portfolioSectionStyles.projectInfo}>
              <p className={portfolioSectionStyles.projectLabel1}>Featured  Project</p>
              <p className={portfolioSectionStyles.projectTitle1}>Ecommerce Website</p>

              <div
                className={portfolioSectionStyles.projectDescription1}
                style={{ '--src': `url(${'/assets/212191363eb26ca2a811432659add981.png'})` }}>
                <p className={portfolioSectionStyles.descriptionText}>
                  A web app for visualizing personalized Spotify data. View your
                  <br />
                  top artists, top tracks, recently played tracks, and detailed audio
                  <br />
                  information about each track. Create and save new playlists of
                  <br />
                  recommended tracks based on your existing playlists and more.
                </p>
              </div>
            </div>

            <div className={portfolioSectionStyles.techStack1}>
              <img
                className={portfolioSectionStyles.techIcon2}
                src={'/assets/af95ca2102ebcffbc23ea898bf3d0d04.png'}
                alt="alt text"
              />
              <img
                className={portfolioSectionStyles.techIcon3}
                src={'/assets/af95ca2102ebcffbc23ea898bf3d0d04.png'}
                alt="alt text"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default renderPortfolioSection;
