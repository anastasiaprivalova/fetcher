const CONTAINER_ID = 'dropdown';
const SELECT_ID = 'fetcherSelect';

export const renderDropdown = (options = [], onSelect = () => {}) => {
    if (options.length === 0) return;

    const container = document.getElementById(CONTAINER_ID);
    const optionsLayout = options.reduce(
        (result, {label, value}) => `${result}<option value="${value}">${label}</option>`,
    '');
    const select = `<select class="dropdown" id="${SELECT_ID}">${optionsLayout}</select>`;

    container.innerHTML = select;
    document.getElementById(SELECT_ID).addEventListener('change', onSelect);
}