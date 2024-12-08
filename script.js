const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');


sendInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        const purchaseText = sendInput.value;

        const newPurchase = document.createElement('div');
        newPurchase.classList.add('items');
        newPurchase.textContent = purchaseText;

        if (purchaseText != '') {
            itemsContainer.append(newPurchase);
        }

        sendInput.value = '';

        newPurchase.addEventListener('click', function () {
            newPurchase.classList.toggle('done');
        })
    }
})

/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
