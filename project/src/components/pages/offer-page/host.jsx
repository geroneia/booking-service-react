import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';

function Host({host: {avatarUrl, name, isPro}, description}) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro && (
          <span className="property__user-status">Pro</span>
        )}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

Host.propTypes = {
  host: propType.user.isRequired,
  description: PropTypes.string.isRequired,
};

export default Host;
