const mainfig = document.querySelector("figure");
const enterProduct = document.querySelector("input");
const addButton = document.querySelector("button");
const wait = document.querySelector("#wait");
const bought = document.querySelector("#bought");



function addProduct() {

const enterValue = enterProduct.value;

if (enterValue.trim() === "") return;

let innerBox = document.createElement("section");
innerBox.classList.add("inner-box");

let hr = document.createElement("hr");

let productName = document.createElement("p");
productName.textContent = enterValue;
productName.classList.add("biscuts");

let subNumber = document.createElement("button");
subNumber.textContent = "-";
subNumber.classList.add("sub-count-dis");

let number = document.createElement("figure");
number.textContent = "1";
number.classList.add("number");

let addNumber = document.createElement("button");
addNumber.textContent = "+";
addNumber.classList.add("add-count");

let buy = document.createElement("button");
buy.textContent = "Куплено";
buy.classList.add("buy");

let cancel = document.createElement("button");
cancel.textContent = "X";
cancel.classList.add("cancel");

let buyFig = document.createElement("section");
buyFig.classList.add("buy-show");

let product = document.createElement("p");
product.textContent = enterValue;
product.classList.add("small-font");

let label = document.createElement("label");
label.textContent = "1";
label.classList.add("small-label");

mainfig.appendChild(hr);
mainfig.appendChild(innerBox);
innerBox.appendChild(productName);
innerBox.appendChild(subNumber);
innerBox.appendChild(number);
innerBox.appendChild(addNumber);
innerBox.appendChild(buy);
innerBox.appendChild(cancel);

wait.appendChild(buyFig);
buyFig.appendChild(product);
buyFig.appendChild(label);

enterProduct.value = "";
enterProduct.focus();
};

addButton.addEventListener("click", addProduct);

enterProduct.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addProduct();
    }
});

mainfig.addEventListener("click", (event) => {

    if (event.target.classList.contains("cancel")) {

        const innerBoxing = event.target.closest(".inner-box");

        const product = innerBoxing.querySelector(".biscuts");

        event.target.parentElement.remove();

        let list = wait.children
        for (let l of list){
            let text = l.querySelector(".small-font");
            if (text.textContent == product.textContent){
                l.remove();
                break;
            }
        }
    }

    if (event.target.classList.contains("add-count")) {

        const innerBoxing = event.target.closest(".inner-box");
        const number = innerBoxing.querySelector(".number");
        let num = Number(number.textContent);
        num++;
        number.textContent = num;

        if(num == 2){
            const sub = innerBoxing.querySelector(".sub-count-dis");
            sub.classList.remove("sub-count-dis");
            sub.classList.add("sub-count");
        }

        const product = innerBoxing.querySelector(".biscuts");

        let list = wait.children
        for (let l of list){
            let text = l.querySelector(".small-font");
            let label = l.querySelector(".small-label");
            if (text.textContent == product.textContent){
                label.textContent = num;
                break;
            }
        }
    }

    if (event.target.classList.contains("sub-count")) {

        const innerBoxing = event.target.closest(".inner-box");
        const number = innerBoxing.querySelector(".number");
        let num = Number(number.textContent);
        num--;
        number.textContent = num;

        if(num == 1){
            event.target.classList.remove("sub-count");
            event.target.classList.add("sub-count-dis");
        }

        const product = innerBoxing.querySelector(".biscuts");

        let list = wait.children
        for (let l of list){
            let text = l.querySelector(".small-font");
            let label = l.querySelector(".small-label");
            if (text.textContent == product.textContent){
                label.textContent = num;
                break;
            }
        }
    }

    if (event.target.classList.contains("biscuts")) {

        const name = event.target;

        let changeProduct = document.createElement("input");
        changeProduct.type = "text";
        changeProduct.classList.add("product-add");

        let list = wait.children
        for (let l of list){
            let text = l.querySelector(".small-font")
            if (text.textContent == event.target.textContent){
                l.remove();
                break;
            }
        }

        name.replaceWith(changeProduct);
        changeProduct.focus();
    }

    if (event.target.classList.contains("buy")) {

        const innerBoxing = event.target.closest(".inner-box");

        const product = innerBoxing.querySelector(".biscuts");
        product.classList.remove("biscuts");
        product.classList.add("tomato");

        const minus = innerBoxing.querySelector(".sub-count");
        if (minus != null){
            minus.remove();
        }else {
            const minusDis = innerBoxing.querySelector(".sub-count-dis");
            minusDis.remove();
        }
        const plus = innerBoxing.querySelector(".add-count");
        plus.remove();

        const number = innerBoxing.querySelector(".number");
        number.classList.remove("number");
        number.classList.add("number-buy");
        let num = Number(number.textContent);

        event.target.remove();
        let cancel = innerBoxing.querySelector(".cancel");
        cancel.remove();

        let noBuy = document.createElement("button");
        noBuy.textContent = 'Не куплено'
        noBuy.classList.add("buy-no");

        let buyFig = document.createElement("section");
        buyFig.classList.add("buy-show");

        let prod = document.createElement("p");
        prod.textContent = product.textContent;
        prod.classList.add("small-font-dis");

        let label = document.createElement("label");
        label.textContent = num;
        label.classList.add("small-label-dis");

        let list = wait.children
        for (let l of list){
            let text = l.querySelector(".small-font")
            if (text.textContent == product.textContent){
                l.remove();
                break;
            }
        }

        innerBoxing.appendChild(noBuy);

        bought.appendChild(buyFig);
        buyFig.appendChild(prod);
        buyFig.appendChild(label);
    }

    if (event.target.classList.contains("buy-no")) {

        const innerBoxing = event.target.closest(".inner-box");

        const product = innerBoxing.querySelector(".tomato");
        product.classList.remove("tomato");
        product.classList.add("biscuts");

        const number = innerBoxing.querySelector(".number-buy");
        number.classList.remove("number-buy");
        number.classList.add("number");
        let num = Number(number.textContent);

        event.target.remove();

        let subNumber = document.createElement("button");
        subNumber.textContent = "-";
        if (num == 1){
            subNumber.classList.add("sub-count-dis");
        }else {
            subNumber.classList.add("sub-count");
        }

        let addNumber = document.createElement("button");
        addNumber.textContent = "+";
        addNumber.classList.add("add-count");

        let Buy = document.createElement("button");
        Buy.textContent = "Куплено";
        Buy.classList.add("buy");

        const cancel = document.createElement("button");
        cancel.textContent = "X";
        cancel.classList.add("cancel");

        let buyFig = document.createElement("section");
        buyFig.classList.add("buy-show");

        let prod = document.createElement("p");
        prod.textContent = product.textContent;
        prod.classList.add("small-font");

        let label = document.createElement("label");
        label.textContent = num;
        label.classList.add("small-label");

        let list = bought.children
        for (let l of list){
            let text = l.querySelector(".small-font-dis")
            if (text.textContent == product.textContent){
                l.remove();
                break;
            }
        }

        number.before(subNumber);
        innerBoxing.appendChild(addNumber);
        innerBoxing.appendChild(Buy);
        innerBoxing.appendChild(cancel);

        wait.appendChild(buyFig);
        buyFig.appendChild(prod);
        buyFig.appendChild(label);
    }

});

mainfig.addEventListener("focusout", (event) => {

    if (event.target.classList.contains("product-add")) {

        const name = event.target;
        const newProduct = event.target.value;
        if (newProduct.trim() === "") return;

        let changeProduct = document.createElement("p");
        changeProduct.textContent = newProduct;
        changeProduct.classList.add("biscuts");

        const innerBoxing = event.target.closest(".inner-box");
        const number = innerBoxing.querySelector(".number");
        let num = Number(number.textContent);

        name.replaceWith(changeProduct);

        let buyFig = document.createElement("section");
        buyFig.classList.add("buy-show");

        let prod = document.createElement("p");
        prod.textContent = changeProduct.textContent;
        prod.classList.add("small-font");

        let label = document.createElement("label");
        label.textContent = num;
        label.classList.add("small-label");

        wait.appendChild(buyFig);
        buyFig.appendChild(prod);
        buyFig.appendChild(label);
    }
});

