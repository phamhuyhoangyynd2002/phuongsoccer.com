const cart = document.getElementsByClassName("pVY1dQ");
const cartold = document.getElementsByClassName("zpjHdRpVY1dQ");
// remove detail products
document.getElementById('0-').onclick = function remove_row() {
    if( document.querySelector('#0').value > 1 ){
        let v = document.querySelector('#0').value;
        v = v - 1;
        document.getElementById('0').value = "<input class='page-item zpjHdR pVY1dQ' type='number' name= '0' value="+ v + "id='0'>";
    }
}
document.getElementById('0+').onclick = function remove_row() {
    let v = document.querySelector('#0').value;
    v = v - 1;
    document.getElementById('0').value = "<input class='page-item zpjHdR pVY1dQ' type='number' name= '0' value="+ v + "id='0'>";
}