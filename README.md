...
======
Task 1
======
Write a program, that outputs all numbers between 1 and 1000 that are both prime
and in the Fibonacci sequence.
You can use a language of your choice, bonus points for using JavaScript or Golang.
Sample output:
2
3
5
13
...
Modify the program to output numbers that are both Fibonacci and a sum of two prime numbers.
*Sample output:*

![image](https://user-images.githubusercontent.com/6148608/177623667-ac04bbb3-caeb-486c-a61d-921f32218f23.png)


...
======
Task 2
======
You own a fruit shop. You buy fruit from suppliers by weight (cost per kg),
and then you sell it either loose or pre-packaged for a fixed price.
For example, a typical sale could be:
1. Apples Pink Lady 1.360kg x $3.50/kg = $4.76
2. Pears Golden 3.400kg x $1.75/kg = $5.95
3. Apples Green Smith 2.180kg x $2.50/kg = $5.45
4. Breakfast package 2x $5/pk = $10
5. Mandarins package 1x $3/pk = $3
---
Total $29.16
Where "Breakfast package" might consist of:
a. Bananas Cavandish 500g
b. Apples Green Smith 500g
c. Mandarin Imperial 500g
And "Mandarins package" is:
a. Mandarins Imperial 600g
b. Mandarins Queens 400g
*** Questions ***
1. Create a relational database schema to record your stock and sales.
2. Write a report that shows how much profit you made last month by fruit type
 (i.e. all apples, all pears, all mandarins, etc), as well as by
 individual fruit variety (i.e. Pink Lady apples, Green Smith apples, etc).
3. Write a report that shows the best and worst selling fruit per month for the past year.
4. Write a report that forecasts which type of fruit will run out of stock
 in the next 7 days, based on sales data from the past 7 days.
 
...
======
Task 3
======

For this task, you can use any front-end framework and/or library.
Bonus points if you write it in plain HTML and vanilla JavaScript.
Create a simple web page that shows a list of items,
and two buttons next to each item - add and delete.
When you click the add button, it should make a copy of the item and place it underneath.
When you click the delete button, it should delete the item.
Sample mock-up:

Foo [+] [-]

Bar [+] [-]

Foobar [+] [-]


When you click the add button next to "Bar", the list becomes:

Foo [+] [-]

Bar [+] [-]

Bar [+] [-]

Foobar [+] [-]


When you then click the delete icon next to "Foo", the list becomes:

Bar [+] [-]

Bar [+] [-]

Foobar [+] [-]

