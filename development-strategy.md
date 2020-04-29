# Budget App: Development Strategy. 
Building this site one step at a time

## 0. Setup

> * `index.html`: basic HTML layout and references to external files.
> * `/css/bootstap.min.css`: CSS stylesheet Bootstrap v4.1.1
> * `webfonts`: folder with bootstrap fonts.
> * `/js/jquery-3.3.1.min.js`:  jquery syntax.
> * `/js/bootstrap.bundle.min.js`: Bootstrap javascript library.
> * `img`: Assets of the webpage image elements.
> * `/css/all.css`: Font Awesome Free 5.3.1
> * `/css/main.css`:CSS stylesheet for styling the HTML elements.
## 1. Data & Log

> * `ui.js` `log.js` `listeners.js` `handlers.js`: 
> * I create the initial UI class, the log array to store the user events history, the listeners, so that can add an event handler to an element in HTML or in the DOM, the handler for extract the data 

# 2. User Story: `Budget Method` 

> * The user can add a budget in the application in the input 'Please Enter Your Budget' the value has to be more than cero (empty value or negative) the user will be notified in case of an input error, if the amount is correct that will be loaded in the screen, and the final balance will be calculated. 
> * I wrote in `ui.js` `handlers.js`, the functions that allows to adding a budget and process. 



