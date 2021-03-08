import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderSearchResults from './js/markupRender'

const infoContainerRef = document.querySelector('.js-countries-container');
const searchField = document.querySelector('#searchQuery');

searchField.addEventListener('input', onInput);

function onInput(event) {
	event.preventDefault();
	infoContainerRef.innerHTML = '';

	const searchQuery = event.currentTarget.value;
	if (searchQuery === '') return;

	searchCountry(searchQuery);
}

function searchCountry(searchQuery) {
	fetchCountries(searchQuery).then(countriesList => {
		renderSearchResults(countriesList, infoContainerRef);
  })
}