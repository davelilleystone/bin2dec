// TODO - check if value has been pasted into input

const binaryInput = document.querySelector('#binary-input');
const decimalOutput = document.querySelector('#decimal-output');

const binaryToDecimal = (value) => parseInt(value, 2);

const checkInputIsValid = (evt) => {
  if (evt.inputType === 'insertText') {
    if (evt.data === '0' || evt.data === '1') {
      console.log('valid input');
      decimalOutput.value = binaryToDecimal(binaryInput.value);
    } else {
      binaryInput.value = binaryInput.value.slice(
        0,
        binaryInput.value.length - 1
      );
      console.log('invalid input');
    }
    return;
  }

  if (binaryInput.value.length) {
    decimalOutput.value = binaryToDecimal(binaryInput.value);
    return;
  }

  decimalOutput.value = '';
};

binaryInput.addEventListener('input', checkInputIsValid);
