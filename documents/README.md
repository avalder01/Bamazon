# Bamazon
Amazon like store front application built using MySQL and Node

bamazonCustomer.js

This activity used MySQL workbench to create an inventory table. the table was structured as follows:

1) item_id-A unique number assigned to each product
2) product_name- The name of the product
3) department_name- The catagory the product would be placed under
4) price-How much the item costs 
5) stock_quantity-How much of the product is in stock.

This database was linked with a NODE.js application that allowed the user to shop for items listed in the table. The user is asked a series of questions that guides them into chosing what they wish to buy and how much they wish to buy. The user can checkout after buying one item or they can buy multiple items. The application tallies up their total purchase after eacg item is added to the cart. If the user tries to buy an item that is out of stock they will be notified they can not purchase it. 
