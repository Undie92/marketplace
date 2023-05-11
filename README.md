# Marketplace

Marketplace is a site for users to sell their old items.

Users can register an account and upload images of their old items that they want to sell, set a price and description. Other users can then comment on the item they want, and get in touch with the post owner. Users can also like items/posts that they are interested in, and follow profiles that they feel have interesting items for sale.

![Am I responsive image](readme/)

[Link to the live website](https://marketplace-proj.herokuapp.com/)

## Table of Contents

- [Overview](#overview)
- [Agile Methodology](#agile-methodology)
- [User Experience (UX)](#user-experience-ux)
  - [Strategy / Site Goals](#strategy--site-goals)
  - [Structure / Design Choices](#structure--design-choices)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
  - [Forking the GitHub Repository](#forking-the-github-repository)
  - [Creating a Local Clone](#creating-a-local-clone)
- [Credits](#credits)

[Back To Top](#marketplace)


___
## Overview

Marketplace is a responsive, mobile-first built website It is compatible with all current major browsers. The website is built for educational purposes, using Bootstrap and the rest_framework. It gives users the ability to create an account and create posts on the website, to sell used-items to other users. giving the owner of the post full CRUD functionality on their posts.

[Back To Top](#table-of-contents)

___
## Agile Methodology

<details>
<summary>Screenshots of project board, Epics and User Stories</summary>

![Closed and done user stories](readme/)
![Open user stories](readme/)
![Kanban board for the website](readme/)

</details>

[Back To Top](#table-of-contents)

___
## User Experience (UX)

### Strategy / Site Goals

Marketplace targets people interested in selling their old stuff, giving t hem the chance to reach out to a number of users to find someone who's interested in buying their items. The site aims to be fully responsive throughout and easily navigated creating posts.

The target audience are people who wants to sell their own old stuff. 
___
### Scope / User Stories

This section aims to determine what a user would expect from interacting with the website. Each User Story was recorded in [GitHub Issues](https://github.com/Undie92/marketplace/issues). 

**As a User**
* As a user I can view a navbar from every page so that i can navigate easily between pages. [#1](https://github.com/Undie92/marketplace/issues/1)

___
### Structure / Design Choices

The website offers simplicity and consistency within its structure. Its structure was designed to be responsive on screens from 320px up to 2560px.

The navigation menu displays the RH Artshop logo and a hamburger button (on mobile) with links to the Home, About, Shop, Cart (if logged in), Logout (if logged in, else Login) and My Account (if logged in). 
The shop section got a dropdown list with 4 branches, All Products, Posters, Canvas and Frames. 

The Footer displays social media links which open in a separate tab for ease of use. It also displays "Copyright © Rebecka Hellström 2023(auto updated year).
The footer is repeated across all pages to keep the design all through.

The Home Page is acting like the landing page, with a simple picture and a button to take you directly to the shop. 

The About Page gives a bit more description of the Artist, who she is, and what she likes to do on her spare time. 

The Registration & Authentication Pages, also accessed through the Navigation Menu are simple to use.

The Account Page is only accessable by logged in users, and offers the user to change password, view orders, change user information, return orders, make custom poster request and last but not least, contact support if something has has gone wrong (most of these are not yet developed, as they are under construction, due to this beeing a project 4 fullstack development, did not have time to finish all the content as the project would have been as big as a project 5 website.)

The Products Page, gives the user a view of all the products available for purchase, where the user can filter through all the contents of the shop very easily by a click. Every product has a button to add the item to the cart, aswell as another button to redirect the user to a more detailed productview. 

Detailed Productview, this is where the user is redirected after pressing "View Item" presenting a bigger picture of the product, aswell as an add to cart button, a back button (to take you back to the all products page) and description of the product.

Cart Page, this page is accessed by users logged in and it shows all the products the user has put in the cart, and the total price of all the products, together with a checkout button (which is not implemented yet, also due to time constraint and not needed in the project 4)

 <details>
 <summary>The Database used for this project</summary>

 [Live website](https://backup-proj.herokuapp.com/)


 [Github Link](https://github.com/Undie92/backup-api)

 </details>


[Back To Top](#table-of-contents)
___
## Features

### Existing Features

**Header & Navigation**

Featured on all pages, the fully responsive header includes:

* R.H Artshop clickable text to redirect user to the frontpage
* Home clickable link to redirect user to the frontpage
* About clickable link to redirect user to About page, where user can read some info about the artist
* Shop dropdown list containing "All Products, Canvas, Frames, Posters" each link redirecting to the appropriate part of the shop
* If on mobile device, a hamburger button contains all the links above
* If logged in, Cart button which redirects user to the cart
* If logged in, Logout button that redirects user to a logout confirmation screen
* If logged in, My Account button that redirects user to their account page
* If not logged in, Login button that redirects user to login page
* If not logged in, Register button that redirects user to signup page

<details>
<summary>Click to view screenshots of Navigation features</summary>

        Navigation closed on mobile  
![Header on mobile closed](documentation/header-closed-mobile.png)

        Navigation open on mobile
![Header on mobile open](documentation/header-open-mobile-logged-out.png)

        Navigation open for logged user mobile
![Header on mobile logged user](documentation/header-open-mobile-logged-in.png)

        Navigation on tablets & desktops
![Header on tablet](documentation/header-logged-out.png)

        Navigation for logged user on tablets & desktops
![Header on tablet logged user](documentation/header-logged-in.png)

</details>

<br>

[Back To Top](#table-of-contents)
___
### Future Features

* 


[Back To Top](#table-of-contents)

___
## Technologies Used

* React
  * Main framework used to create the user interface
* Node
  * Package manager user to install dependencies
* Heroku
  * Used for application hosting
* ReactBootstrap
  * Used for styling
* Git
  * Version control software
* Github
  * Repository used to store base code and documents

## Packages

* "@testing-library/jest-dom@":"5.16.5"
* "@testing-library/react@":"11.2.7"
* "@testing-library/user-event@":"12.8.3"
* "axios@":"0.21.4"
* "bootstrap@":"4.6.2"
* "jwt-decode@":"3.1.2"
* "msw@":"0.35.0"
* "react-bootstrap@":"1.6.6"
* "react-dom@":"17.0.2"
* "react-infinite-scroll-component@":"6.1.0"
* "react-router-dom@":"5.3.4"
* "react-scripts@":"5.0.1"
* "react@":"17.0.2"
* "web-vitals@":"1.1.2"


## Tools

* W3C Validator
  * A validator which checks the markup validity of Web documents in HTML, XHTML, SMIL, MathML, etc
* W3C CSS Validation Service
  * A validator which checks the validity of CSS code
* JSLint
  * Javascript code quality and coverage tool
* Chrome DevTools and Lighthouse
  * Web Developer Tools


[Back To Top](#table-of-contents)

___
## Testing

### Google Dev Tools

For every page of the website, i used Lighthouse to check the rating all pages got.

<details>
<summary>Check screenshots for Lighthouse ratings on mobile</summary>

</details>

<details>
<summary>Check screenshots for Lighthouse ratings on desktop</summary>

</details>

___
## Manual Testing

<details>
<summary> Nav Bar For All Pages </summary>

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Home page | When clicking on the home link on the nav bar, the browser redirects to the home page. | PASS
About page | When clicking on the about link on the nav bar, the browser redirects to the about page | PASS
Shop dropdown list | When clicking on the shop link on the nav bar, the dropdown list shows all categories, aswell as "All Products" clicking on each item takes the user to the correct page  | PASS
Cart | If the user is logged in, they will have the cart button active and visible, allowing the user to access the cart page containing all items put into the cart | PASS
My Account | When user is logged in, they will have access to the My Account button in the nav bar to be able to access their account | PASS
Log in / Log Out Pages | When clicking on the log in or log out button the page redirects to the log in page or leads to confirmation page to log user out | PASS
Register Page | When clicking on the register button it redirects to the register page | PASS
Foreground and background | Checked foreground and background information is clearly legible | PASS
Text | Checked the text is clearly legible against the background | PASS
</details>

[Back To Top](#table-of-contents)

___
### Bugs

<details>
<summary>Creating post with category of food</summary>
When trying to create a post with category of food, you recieve "POST 

[https://backup-proj.herokuapp.com/posts/](https://backup-proj.herokuapp.com/posts/) 
400 (Bad Request)" And i have no idéa on why, and had no time to figure it out, due to time restraint of assignment. The category "Food" filter on Home page works.
</details>

[Back To Top](#table-of-contents)

___
## Deployment

For good practice, this project was deployed early to [Heroku](https://www.heroku.com) in order to save time and avoid nasty surprises later on.

<details>
<summary>Steps taken before deploying the project to Heroku</summary>

### Create the Heroku App

1. Login to Heroku and click on the top right button ‘New’ on the dashboard. 
2. Click ‘Create new app’.
3. Give your app a unique name and select the region closest to you. 
4. Click on the ‘Create app’ button.

</details>

<details>
<summary>First Deployment</summary>

1. Go back to the Heroku dashboard and click on the ‘Deploy’ tab.  

2. For deployment method, select ‘GitHub’ and search for the project’s repository from the list. 

3. Select and then click on ‘Deploy Branch’.  

4. When the build log is complete it should say that the app has been successfully deployed.

5. Click on the ‘Open App’ button to view it and the React icon will show up.
</details>

<details>
<summary>Final Deployment</summary>

1. Go back to the Heroku dashboard and click on the ‘Deploy’ tab.  

2. For deployment method, select ‘GitHub’ and search for the project’s repository from the list. 

3. Select and then click on ‘Deploy Branch’.  

4. When the build log is complete it should say that the app has been successfully deployed.

5. Click on the ‘Open App’ button to view the complete website, test it out so that it functions correctly.
</details>

___
### Forking the GitHub Repository

<details>
<summary>Steps to Fork the GitHub Repository</summary>

Forking allows you to view and edit the code without affecting the original repository

1. Locate the GitHub repository. Link to this repository can be found [here](https://github.com/Undie92/marketplace).
2. Click on 'Fork', in the top right-hand corner.
3. This will take you to your own repository to a fork with the same name as the original branch.

</details>

___

### Creating a Local Clone

<details>
<summary>Steps to Creating a Local Clone</summary>

1. Go to the GitHub repository. Link to this repository can be found [here](https://github.com/Undie92/marketplace).
2. Click on 'Code' to the right of the screen. This will open a dropdown. Click on HTTPs and copy the link.
3. Open Git Bash in your IDE and change the current working directory to the location where you want the cloned directory.
4. Type `git clone`, paste the URL you copied earlier, and press Enter to create your local clone.

More information on Creating and Managing repositories can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
<br>

</details>

[Back To Top](#table-of-contents)

___

## Credits


Pages I Referred to a lot:

* [Django Rest-Framework](https://www.django-rest-framework.org/)
* [React Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction)
* Code Institute LMS

[Back To Top](#table-of-contents)

___

