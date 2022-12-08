const cart = document.getElementsByClassName("pVY1dQ");
const cartold = document.getElementsByClassName("zpjHdRpVY1dQ");
// remove detail products
document.getElementByClassName('pVY1dQ').onclick = function remove_row() {
    
    for (i = 0; i < cart.length; i++) {
        if(cart[i].innerHTML !=  cartold[i].innerHTML ) cartold[i].innerHTML = cart[i].innerHTML;
    }
}