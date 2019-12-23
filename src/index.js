import * as Components from './components';
import { config } from './config';

const options = [...config].map(([id, {label}]) => ({ value: id, label }));

const getDefaultSrcConfig = () => config.get(options[0].value);

const renderInputs = e => {
    const selectedSrc = e && e.target && e.target.value;
    const selectedConfig = selectedSrc ? config.get(selectedSrc) : getDefaultSrcConfig();

    Components.renderInputs(selectedConfig);
};

const initialize = () => {
    Components.renderDropdown(options, renderInputs);
    renderInputs();
};

document.addEventListener('DOMContentLoaded', initialize);