document.addEventListener('DOMContentLoaded', function() {
    const toggleButtonState = (groupSelector) => {
        const buttons = document.querySelectorAll(`${groupSelector} .donation-option, ${groupSelector} .amount-option`);
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
                this.classList.add('active'); // Add active class to clicked button
            });
        });
    };

    // Initialize toggle states for both button groups
    toggleButtonState('#donationOptions');
    toggleButtonState('#amountOptions');

    const customAmountInput = document.querySelector('.custom-amount-input');
    const amountButtons = document.querySelectorAll('#amountOptions .amount-option');

    customAmountInput.addEventListener('focus', () => {
        amountButtons.forEach(button => button.classList.remove('active'));
    });

    customAmountInput.addEventListener('input', () => {
        customAmountInput.value = customAmountInput.value.replace(/\D/g, '');
    });
});