const CONTROL_INPUT = 'control-input';
const CONTROL_SUBMIT = 'control-submit';

export const renderInput = ({ type, placeholder, onSubmit }) => {
    const prevNode = document.getElementById(type);
    const container = document.getElementById(`${type}-container`);

    const input = `<input class="${CONTROL_INPUT}" placeholder="${placeholder}" />`;
    const submitBtn = `<button class="${CONTROL_SUBMIT}"></button>`;
    const newLayout = `<div id="${type}">${input}${submitBtn}</div>`;

    let value = '';

    if (prevNode) {
        prevNode
            .getElementsByClassName(CONTROL_INPUT)[0]
            .removeEventListener('change');
        prevNode
            .getElementsByClassName(CONTROL_SUBMIT)[0]
            .removeEventListener('click');
    }

    container.innerHTML = newLayout;
    container
        .getElementsByClassName(CONTROL_INPUT)[0]
        .addEventListener('change', ({ target: { value: newValue } }) => { value = newValue });
    container
        .getElementsByClassName(CONTROL_SUBMIT)[0]
        .addEventListener('click', () => { onSubmit(value) });
}