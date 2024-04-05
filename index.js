const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const qty = document.querySelector("#qtyBox");
const btn = document.querySelector(".btn");

addBtn.addEventListener("click", () => {
    qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener("click", () => {
    if (qty.value <= 0) {
        qty.value =parseInt(qty.value) - 1;
    } else {
        qty.value = parseInt(qty.value) - 1;
    }
});

btn.addEventListener("click", () => {
    qty.value = 0;
})