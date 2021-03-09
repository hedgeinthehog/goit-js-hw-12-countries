import '@pnotify/core/dist/BrightTheme.css';
import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 1800;

function createErrorNotification(message) {
	error({
		text: message,
	});
}

export default createErrorNotification;
