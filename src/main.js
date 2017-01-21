import React from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './SiteContainer';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(SiteContainer),
    document.getElementById('mount')
  );
});
