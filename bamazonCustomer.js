
var mysql = require("mysql");
var inquirer = require("inquirer");
require('dotenv').config()
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "bamazon_DB"
});
connection.connect(function(err) {
    if (err) throw err;

    displayItems();
})

// displays the table with all the products

function displayItems() {
    console.log("");
    console.log("********************");
    console.log("Welcome to Bamazon!");
    console.log("********************");
   connection.query("SELECT * FROM products", function(err, res) {
       for(var i=0; i < res.length; i++) {
            console.log('\nItem ID: ' + res[i].item_id + " | " + 'Product Name: ' + res[i].product_name + " | " + 'Department: ' + res[i].department_name + " | " + 'Price: $' + res[i].price + " | " + 'Stock Left: ' + res[i].stock_quantity);
            
       }
       console.log("_________________________________________________________");
       start();
   })
}

// Inquirer for user commands

function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "product",
            message: "Enter the ID of Product to Buy: ",
            
        },

        {
            type: "input",
            name: "quantity",
            message: "Enter how many to buy: ",
         
        }
    ]).then(function(res) {
        var addItem = res.product;
        var quantity2 = res.quantity;

        connection.query("SELECT * FROM products WHERE ?", { item_id: addItem },
        function(err, response) {
            if (err) throw err;

            if (response.length === 0) {
                console.log("ERROR: select a valid Item ID");
                console.log("");
                displayItems();
            } else {
                var productRes = response[0];
                if (quantity2 <= productRes.stock_quantity) {
                    console.log("Item added to cart");
                    console.log("");

                    // Updating inventory

                    var updateInventory = 'UPDATE products SET stock_quantity = '
                     + (productRes.stock_quantity - quantity2) + ' WHERE item_id = ' + addItem

                     connection.query(updateInventory, function(err, data) {
                         if (err) throw err;

                         console.log("");
                         console.log("Your order has been placed; your total is $" 
                        + productRes.price * quantity2);
                        console.log("");
                        console.log("Thank you for shopping Bamazon");
                        console.log("");
                        continueShopping();
                     })
                } else {
                    console.log("This Item is Out of Stock\n");
                    console.log("");
                    continueShopping();
                }
            }
        })
    })
} 


function continueShopping() {
    inquirer.prompt([
        {
            type:"confirm",
            message: "Would you like to continue shopping?",
            name: "confirm"
        }
    ]).then(function(res) {
        if (res.confirm) {
            console.log("------------------------------------------------");
            displayItems();
            
        } else {
            console.log("");
            console.log("Thank you for choosing bamazon!");
            console.log("");
            connection.end();
        }
    })
}


