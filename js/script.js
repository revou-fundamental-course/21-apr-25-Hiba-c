document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is working (DOMContentLoaded)!');
  
    let currentConversion = 'CtoF'; // Default konversi Celsius to Fahrenheit
  
    const inputField = document.getElementById('konversi-input');
    const resultField = document.getElementById('result-input');
    const detailField = document.getElementById('calculate-detail');
    const labelInput = document.getElementById('label-input');
    const labelResult = document.getElementById('label-result');
  

    function validateForm() {
        const input = inputField.value.trim();
        if (input === '') {
          alert('Input tidak boleh kosong!');
          return;
        }
        const numInput = parseFloat(input);
        if (isNaN(numInput)) {
          alert('Masukkan angka yang valid!');
          return;
        }
        if (currentConversion === 'CtoF') {
          const result = (numInput * 9/5) + 32;
          resultField.value = result.toFixed(2);
          detailField.value = `F = (C × 9/5) + 32 = (${numInput} × 9/5) + 32 = ${result.toFixed(2)} °F`;
        } else {
          const result = (numInput - 32) * 5/9;
          resultField.value = result.toFixed(2);
          detailField.value = `C = (F - 32) × 5/9 = (${numInput} - 32) × 5/9 = ${result.toFixed(2)} °C`;
        }
      }
  
    function resetForm() {
      inputField.value = '';
      resultField.value = '';
      detailField.value = '';
    }
  
    function reverseConversion() {
      if (currentConversion === 'CtoF') {
        currentConversion = 'FtoC';
        labelInput.innerHTML = 'Fahrenheit (&deg;F):';
        labelResult.innerHTML = 'Celcius (&deg;C):';
      } else {
        currentConversion = 'CtoF';
        labelInput.innerHTML = 'Celcius (&deg;C):';
        labelResult.innerHTML = 'Fahrenheit (&deg;F):';
      }
  
      const inputValue = inputField.value.trim();
      if (inputValue === '') {
        // No input, clear outputs
        resultField.value = '';
        detailField.value = '';
        return;
      }
  
      const numInput = parseFloat(inputValue);
      if (isNaN(numInput)) {
        resultField.value = '';
        detailField.value = '';
        return;
      }
  
      if (currentConversion === 'CtoF') {
        const result = (numInput * 9/5) + 32;
        resultField.value = result.toFixed(2);
        detailField.value = `F = (C × 9/5) + 32 = (${numInput} × 9/5) + 32 = ${result.toFixed(2)} °F`;
      } else {
        const result = (numInput - 32) * 5/9;
        resultField.value = result.toFixed(2);
        detailField.value = `C = (F - 32) × 5/9 = (${numInput} - 32) × 5/9 = ${result.toFixed(2)} °C`;
      }
    }
  
    // Pasang event listener tombol
    document.getElementById('btn-konversi').addEventListener('click', validateForm);
    document.getElementById('btn-reset').addEventListener('click', resetForm);
    document.getElementById('btn-reverse').addEventListener('click', reverseConversion);
  });
  