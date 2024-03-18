function adjustQuantity(button, delta) {
    var quantityInput = button.parentElement.querySelector('input[type="number"]');
    var currentValue = parseInt(quantityInput.value);

    if (currentValue + delta >= 0) {
        quantityInput.value = currentValue + delta;
    }
}
