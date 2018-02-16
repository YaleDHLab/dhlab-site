import moment from 'moment';

(() => {

  /**
  * Globals
  **/

  // api endpoint for lab hours
  const url = 'https://api3.libcal.com/api_hours_grid.php?format=jsonld&iid=457&lid=4211&callback=handleHours';

  // active toggle target
  const selector = '#footer-on-campus';
  const target = document.querySelector(selector);

  /**
  * Set open lab hours
  **/

  window.handleHours = (data) => {
    const dh = data.department.filter((d) => {
      return d.name === 'Digital Humanities Lab';
    })[0];
    const hours = dh.openingHoursSpecification.filter((d) => {
      return d.validFrom === moment().format('YYYY-MM-DD');
    });

    // hours are served as an ordered array over time
    let open = parseHour(hours[0].opens) + '–' + parseHour(hours[0].closes);
    let close = parseHour(hours[ hours.length-1 ].opens) + '–' +
      parseHour(hours[ hours.length-1 ].closes);

    // add the hours to the page
    const timeElem = document.querySelector('#open-hours');
    timeElem.innerHTML = open + ' & ' + close;
  };

  const parseHour = (time) => {
    const split = time.split(':');
    const hours = parseInt(split[0]);
    const minutes = split[1];
    const suffix = hours >= 12 ? 'pm' : 'am';
    let hour = hours % 12;
    if (hour === 0) hour = 12;
    return hour + ':' + minutes + ' ' + suffix;
  }

  const requestHours = () => {
    const script = document.createElement('script');
    script.setAttribute('src', url);
    document.body.appendChild(script);
  }

  /**
  * Toggle footer active class
  **/

  const toggleActiveClass = (e) => {
    target.className.includes('active')
      ? target.className = e.target.className.replace(' active', '')
      : target.className += ' active';
  }

  /**
  * Main
  **/

  target.addEventListener('click', toggleActiveClass);
  setTimeout(requestHours, 50);

})();