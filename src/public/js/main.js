// add detail products
document.getElementById('add-product-btn').onclick = function add_row() {
    var size = document.querySelector('#size-input').value;
    var price = document.querySelector('#price-input').value;
    var discount_Percent = document.querySelector('#discount-percent-input').value;
    var discount_Minus = document.querySelector('#discount-minus-input').value;

    var table = document.getElementById('detail-product-table');
    var row = table.insertRow(1);
    row.insertCell(0).innerHTML = size;
    row.insertCell(1).innerHTML = price;
    row.insertCell(2).innerHTML = discount_Percent;
    row.insertCell(3).innerHTML = discount_Minus;
}

// remove detail products
document.getElementById('remove-product-btn').onclick = function remove_row() {

    var table = document.getElementById('detail-product-table');
    table.deleteRow(1)
}