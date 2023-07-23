// JavaScript source code
function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    

    if (name == "") {
        alert("Product Name is Required");
        return false;
    }

    if (age == "") {
        alert("Price is Required");
        return false;
    }
    else if (age < 1) {
        alert("Price must not be zero or less than zero");
        return false;
    }

    return true;
}

function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));

        }

        peopleList.push({
            name: name,
            age: age,
            
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    }

   
}

function deleteData(index) {
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));

    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}


var table = document.getElementById("crudTable");
function getSumOfColumn(table, columnIndex) {
    var sum = 0;
    for (var i = 0; i < table.rows.length; i++) {
        var value = parseInt(table.rows[i].cells[columnIndex].innerText);
        if (!isNaN(value)) {
            sum += value;
        }
    }

    return sum;
}

function updateSum() {
    var columnIndexToSum = 1; // Index of the column to sum (0 for the first column, 1 for the second, and so on)
    var columnSum = getSumOfColumn(table, columnIndexToSum);
    console.log("Sum of column:", columnSum);
    alert("Price= LKR " + columnSum);
}

// Function to clear all data from the table


function clearLocalStorageData() {
    
    function clearStorageData() {
        try {
            // Clear the table data by removing all rows from tbody
            const tbody = document.getElementById("tbody");
            tbody.innerHTML = "";

            // Clear the local storage
            localStorage.clear();

            console.log('Local storage data and table cleared successfully.');
        } catch (error) {
            console.error('Error while clearing local storage data and table:', error);
        }
    }

    clearStorageData();
}

// Call the function to clear local storage data
