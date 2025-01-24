document.addEventListener('DOMContentLoaded', () => {
    const pandaImage = document.getElementById('pandaImage');
    const passwordFields = document.querySelectorAll('input[type="password"]');

    passwordFields.forEach(field => {
        field.addEventListener('focus', () => {
            pandaImage.src = 'close.png';
        });

        field.addEventListener('blur', () => {
            pandaImage.src = 'open.png';
        });
    });
});
