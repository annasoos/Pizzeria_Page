# Pizzeria Restaurant

## Description

Webpage created (as a team project) to a fictional pizzeria, where users can browse the menu and book a table to the restaurant.

## Implementation

1. The landing page will not just introduce the user in the website, but show the menu also. The page is responsive.
    - When we get to the website, an image with the name of the pizzeria welcomes us
    - When we scroll down a short introduction present the business
    - Under the introduction, we can see the menu's options, the topping and the price

2. In the landing page there is a possibility to booking a table. The form is presented in a different page. The user needs to fill up a form with its name, email address, booking date and time and the number of seats the user want to book.
    - There is a `Booking a table` button in the bottom of the page and in the navigation bar (implemented with React Router) as well.
    - When we click the button a booking form shows up
    - All inputs are required
    - We can't book a table before the actual date
    - We can't book a table one hour before the actual time
 
### Built with

- Semantic HTML5 markup
- React.js
- Styled-components & SCSS
- Flexbox
- CSS Grid

## TODO

- Fix navigation from Booking page to About and Menu sections
- Use react modal package in case of booking form (instead of class name toggle)
- Set fire icons to show only on spicy pizzas in the menu
- Use more elegant solution to display confirmation message to user (eg. react tostify)

![rocketpizza](https://user-images.githubusercontent.com/83576776/130471974-4f0be77a-62ed-465e-8a5f-996ecb63730c.jpg)

