// TODO - check if value has been pasted into input

const binaryInput = document.querySelector('#binary-input');
const decimalOutput = document.querySelector('#decimal-output');
const errorDiv = document.querySelector('.error-message');

const binaryToDecimal = (value) => parseInt(value, 2);

const checkInputIsValid = (evt) => {
  if (evt.inputType === 'insertText') {
    if (evt.data === '0' || evt.data === '1') {
      decimalOutput.value = binaryToDecimal(binaryInput.value);
      if (!errorDiv.classList.contains('hidden')) {
        errorDiv.classList.add('hidden');
      }
    } else {
      binaryInput.value = binaryInput.value.slice(
        0,
        binaryInput.value.length - 1
      );
      if (errorDiv.classList.contains('hidden')) {
        errorDiv.classList.remove('hidden');
      }
      return;
    }
  }

  if (binaryInput.value.length) {
    decimalOutput.value = binaryToDecimal(binaryInput.value);
    return;
  }

  decimalOutput.value = '';
};

binaryInput.addEventListener('input', checkInputIsValid);
