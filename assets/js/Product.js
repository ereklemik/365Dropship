export const generateProduct = (product) => `
        <div class="catalog__product">
            <div class="catalog__checkbox">
                <input type="checkbox" class="catalog__checkbox--btn">
            </div>
            <div class="catalog__photo">
                <img src="${product.image}" alt="">
            </div>
            <div class="catalog__title">
                ${product.title}
            </div>
            <div class="catalog__price">
                ${product.price}$
            </div>
        </div>
        `
