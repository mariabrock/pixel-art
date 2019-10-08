import utilities from '../../helpers/utilities';

const colors = ['darkorchid', 'chartruse', 'papayawhip', 'tomato', 'cornsilk', 'almond'];

const printColorPicker = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `<div class="form-check form-check-inline">
  <input name="color" class="form-check-input clolor-choice" type="radio" id="${color}" value="${color}">
  <label class="form-check-label" for="${color}">${color}</label>
</div>
`;
  }
  utilities.printToDom('color-picker', domString);
};

export default { printColorPicker };
