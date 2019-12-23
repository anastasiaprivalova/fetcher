import { renderDropdown } from './dropdown';
import { renderInput } from './input';

const CONTROLS_CONTAINER = 'controls';

const TYPES = {
    URL: 'url',
    SEARCH: 'search',
};

const renderInputs = ({ urlParser, searchHandler }) => {
    const urlControl = urlParser ? `<div id="${TYPES.URL}-container"></div>` : '';
    const searchControl = searchHandler ? `<div id="${TYPES.SEARCH}-container"></div>` : '';

    document.getElementById(CONTROLS_CONTAINER).innerHTML = `${urlControl}${searchControl}`;

    if (urlParser) {
        renderInput({ type: TYPES.URL, placeholder: 'URL', onSubmit: urlParser });
    }

    if (searchHandler) {
        renderInput({ type: TYPES.SEARCH, placeholder: 'Search', onSubmit: searchHandler });
    }
};

export {
    renderDropdown,
    renderInputs,
};