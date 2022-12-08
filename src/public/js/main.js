// add detail products
var numRow = 0;

document.getElementById('add-product-btn').onclick = function add_row() {
    var size = document.querySelector('#size-input').value;
    var price = document.querySelector('#price-input').value;
    var discount_Percent = document.querySelector('#discount-percent-input').value;
    var discount_Minus = document.querySelector('#discount-minus-input').value;
    numRow++;
    if(numRow <=10){
        document.getElementById('numRow').setAttribute("value", numRow);
        var table = document.getElementById('detail-product-table');
        var row = table.insertRow(1);
        
        let namesize= "size"+ numRow;
        let nameprice= "price"+ numRow;
        let namediscount_Percent= "discount_Percent"+ numRow;
        let namediscount_Minus= "discount_Minus"+ numRow;
        
        row.insertCell(0).innerHTML = '<input type="text" class="w-25" name = "'+namesize+'"value = '+size+'>';
        row.insertCell(1).innerHTML = '<input type="number" class="w-50" name = "'+nameprice+'"value = '+price+'>';
        row.insertCell(2).innerHTML = '<input type="number" class="w-25" name = "'+namediscount_Percent+'"value = '+discount_Percent+'>';
        row.insertCell(3).innerHTML = '<input type="number" class="w-25" name = "'+namediscount_Minus+'"value = '+discount_Minus+'>';
    }
}

// remove detail products
document.getElementById('remove-product-btn').onclick = function remove_row() {

    var table = document.getElementById('detail-product-table');
    table.deleteRow(1)
}