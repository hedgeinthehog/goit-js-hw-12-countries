import countryInfoTpl from '../templates/info-about-country.hbs';
import countryListTpl from '../templates/list-of-countries.hbs';
import createErrorNotification from './notification';

function renderSearchResults(countries, containerRef) {
	const countriesCount = countries.length;

	if (countriesCount > 10) {
		createErrorNotification('Too many matches founs. Please enter a more specific query');
		return;
	}

	if (countriesCount <= 10 && countriesCount > 1) {
		const markup = countryListTpl(countries);
		containerRef.insertAdjacentHTML('beforeend', markup);
		return;
	}

	const markup = countryInfoTpl(countries[0]);
	containerRef.insertAdjacentHTML('beforeend', markup);	
}

export default renderSearchResults;