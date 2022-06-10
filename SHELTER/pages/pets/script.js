let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
    productsInCart = [];
}