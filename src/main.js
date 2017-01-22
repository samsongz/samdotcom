import React from 'react';
import ReactDOM from 'react-dom';
import SiteContainer from './SiteContainer';

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(SiteContainer),
    document.getElementById('mount')
  );

  const title = document.querySelector('.title');
  const nav = document.querySelector('.nav');

  function moveOnScroll() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 100 && (title.className.includes('fixed-title') == false)) {
      title.classList.add('fixed-title');
      nav.classList.add('fixed-nav');
    }
    else if( scrollTop < 100 && (title.className.includes('fixed-title'))) {
      title.classList.remove('fixed-title');
      nav.classList.remove('fixed-nav');
    }

  }



  window.addEventListener('scroll', debounce(moveOnScroll));
});
