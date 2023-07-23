// JavaScript source code
function validateForm() {
    var date = document.getElementById("date").value;
    var nameP = document.getElementById("nameP").value;
    var quantityP = document.getElementById("quantityP").value;
    var buyP = document.getElementById("buyP").value;
    var sellP = document.getElementById("sellP").value;


    

    if (nameP == "") {
        alert("Product Name is Required");
        return false;
    }

    if (quantityP == "") {
        alert("Quantity is Required");
        return false;
    }

    if (buyP == "") {
        alert("Price is Required");
        return false;
    }
    else if (buyP < 1) {
        alert("Price must not be zero or less than zero");
        return false;
    }

    if (sellP == "") {
        alert("Price is Required");
        return false;
    }
    else if (sellP < 1) {
        alert("Price must not be zero or less than zero");
        return false;
    }

    return true;
}

function showData() {
    var itemList;
    if (localStorage.getItem("itemList") == null) {
        itemList = [];
    }
    else {
        itemList = JSON.parse(localStorage.getItem("itemList"));

    }

    var html = "";

    itemList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.date + "</td>";
        html += "<td>" + element.nameP + "</td>";
        html += "<td>" + element.quantityP + "</td>";
        html += "<td>" + element.buyP + "</td>";
        html += "<td>" + element.sellP + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {
        var date = document.getElementById("date").value;
        var nameP = document.getElementById("nameP").value;
        var quantityP = document.getElementById("quantityP").value;
        var buyP = document.getElementById("buyP").value;
        var sellP = document.getElementById("sellP").value;

        var itemList;
        if (localStorage.getItem("itemList") == null) {
            itemList = [];
        }
        else {
            itemList = JSON.parse(localStorage.getItem("itemList"));

        }

        itemList.push({
            date: date,
            nameP: nameP,
            quantityP: quantityP,
            buyP: buyP,
            sellP: sellP,


        });

        localStorage.setItem("itemList", JSON.stringify(itemList));
        showData();
        document.getElementById("date").value = "";
        document.getElementById("nameP").value = "";
        document.getElementById("quantityP").value = "";
        document.getElementById("buyP").value = "";
        document.getElementById("sellP").value = "";
    }


}

function deleteData(index) {
    if (localStorage.getItem("itemList") == null) {
        itemList = [];
    }
    else {
        itemList = JSON.parse(localStorage.getItem("itemList"));

    }

    itemList.splice(index, 1);
    localStorage.setItem("itemList", JSON.stringify(itemList));
    showData();
}


