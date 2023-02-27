# Javascript Fundamentals

## How to Run Javascript Code

The simplest way to get started is to simply create an HTML file with the JavaScript code inside of it. Type the basic HTML skeleton into a file on your computer somewhere:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Save and open this file up in a web browser (you can use “Live Server” on Visual Studio Code to do this!) and then open up the browser’s console by right-clicking on the blank webpage and selecting “Inspect” or “Inspect Element”. In the ‘Developer Tools’ pane find and select the ‘Console’ tab, where you should see the output of our console.log statement.  

Another way to include JavaScript in a webpage is through an external script. This is very similar to linking external CSS docs to your website.  

```
<script src="javascript.js"></script>
```

## Variables

`let` to declare variables that can change.  

`const` to declare variables that don't change.  

## Numbers, Strings, and Conditionals

Very similar to Python

## Developer Tools

Developer Tools are useful for running JavaScript code, editing HTML and CSS styles without having to refresh the page, and viewing performance data.  

Use the keyboard shortcut F12 or CTRL + Shift + C (option + command + C on Mac)  

All html, css, and js files can be located under `Sources`.  

## Functions

Declaring a function is very similar to Python.  

```
function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))
```

## For and While Loops

Identical to C.

## Miscellaneous 

`prompt` is identical to `input` in Python.  

```
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
```

`console.log` is identical to `print` in Python.  

```
console.log(favoriteAnimal('Goat'))
```

