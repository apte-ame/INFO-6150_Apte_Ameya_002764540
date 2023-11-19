# Assignment 9

## MERN Stack Application:

`Backend:`

1. Created CRUD operation for the User
2. Stored the Fullname, email Id and the password in mongodb
3. Ensured that it follows REST API folder hierarchy i.e. MVC architecture

`Frontend:`

1. Created a login form in the frontend so the user can log in using their email id and password
2. Once the user is authenticated, the user is redirected to the homepage where they can view a navigation bar
3. In the homepage, there are 4 cards displaying an image, a title and some text
4. Through the navigation bar, the user can view the about page, Jobs page and the contact page
5. The cards that are visible in all 4 page is through a reusable card component in the components folder
6. The data that is shown in the cards is stored in an object and then a map function is used to map through the object and display the data in cards
7. For styling, bootstrap is used.
8. If the user is not authenticated, then a proper error message is displayed.
