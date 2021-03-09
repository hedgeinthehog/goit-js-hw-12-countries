import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderSearchResults from './js/markupRender';
import debounce from 'lodash.debounce';
import createErrorNotification from './js/notification';

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
	  .catch(err => createErrorNotification('No such country in database'))
}