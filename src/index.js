import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderSearchResults from './js/markupRender';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const infoContainerRef = document.querySelector('.js-countries-container');
const searchField = document.querySelector('#searchQuery');

searchField.addEventListener('input', debounce(onInput, 500));

function onInput(event) {
	event.preventDefault();

	infoContainerRef.innerHTML = '';
	const searchQuery = event.target.value;
	if (searchQuery === '') return;

	searchCountry(searchQuery);
}

function searchCountry(searchQuery) {
	fetchCountries(searchQuery)
		.then(countriesList => {
		  renderSearchResults(countriesList, infoContainerRef);
	  })
	  .catch(err => {
		  error({
		  	text: 'No such country in database',
		  })
	  })
}