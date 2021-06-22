






- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Project Title** # chargePoint

This is an application that will allow e-bike users to the ablity blog about and share locations in their city that are friendly places to charge their e-bikes. Range anxiety is a real issue for any user of electirc vehicles. This application will create a community that will bridge the gap between business owners and their customers that ride ebikes. Users will be able to add their own locations and edit posts they make. User will also be able to search other posts by zip code. 




<br>

## MVP

Allow uers the ability to create a profile and share locations/businesses that are friendly places to charges. Users will be able to create and edit posts and also favorite most popular locations

<br>

### Goals

- Create a full stack application with full CRUD capability 
- Allow users with register the ability to read/edit/delete posts
- create a social network for the urban electric vehical community 

<br>

### Libraries and Dependencies


|     Library      | Description                               			 |
| :--------------: | :----------------------------------------- 		 |
|      Rails       |  software library that extends the Ruby programming language|
|   React Router   |  collection of navigational components  			 |

<br>

### Client (Front End)

- React.js
- JavaScript (ES6)
- HTML5
- CSS


#### Wireframes



https://whimsical.com/chargepoint-CDz95W7KyeG4i7tELAoW4A

!https://www.figma.com/file/0AokfLB3knVn8tpqpY2wqh/Untitled?node-id=5%3A79

- Homepage

![Homepage](https://i.imgur.com/KJpfxPN.png)

- Sign up

![signup](https://i.imgur.com/qNmyfhQ.png)

- All posts

![All](https://i.imgur.com/PScCz7d.png)

- add comment

![add comment](https://i.imgur.com/JZJXnyl.png)

#### Component Tree


https://whimsical.com/chargepoint-WjnMJVcyw63HDFBmWKu1JG
#### Component Architecture



``` structure


src
|__ assets/
      |__ images
      |__ fonts
|__ components/
      |__ Layout
	    |_ Layout.jsx
	    |_ Layout.css
      |__ Nav
	    |_ Nav.jsx
	    |_ Nav.css
      |__ Footer
	    |_ Footer.jsx
	    |_ Footer.css
      |__ Home
	    |_ Home.jsx
	    |_ Home.css
      |__ Login
	    |_ Login.jsx
	    |_ Login.css
      |__ Register
	    |_ Register.jsx
	    |_ Register.css
      |__ CreatePost
	    |_ CreatePost.jsx
	    |_ CreatePost.css
      |__ EditPost
	    |_ EditPost.jsx
	    |_ EditPost.css
      |__ CreateComment
	    |_ CreateComment.jsx
	    |_ CreateComment.css
      |__ EditComment
	    |_ EditComment.jsx
	    |_ EditComment.css
```

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Intial planning     |    H     |     3 hrs      |     TBD       |     TBD     |
| BACKEND Setup       |    H     |     4 hrs      |     TBD       |     TBD     |
| Front End Setup     |    H     |     4 hrs      |     TBD       |     TBD     |
| Forms               |    L     |     6 hrs      |     TBD       |     TBD     |
| Posts component     |    H     |     3 hrs      |     TBD       |     TBD     |
| UserModel           |     H    |     3 hrs      |     TBD       |     TBD     |
| Location Model      |    H     |     3 hrs      |     TBD       |     TBD     |
| CSS                 |    H     |     8 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     37 hrs     |     TBD       |     TBD     |
  
>

<br>

### Server (Back End)

#### ERD Model

> https://drive.google.com/file/d/1Wc5rXon1BewMPtvwbObvLxzOn8prikyu/view?usp=sharing

<br>

***

## Post-MVP

- Allow locations to be searched on a map. 
- Allow Business owners ablity to create corproate accounts and incentivize app users to their locations.
  



***

## Code Showcase


## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
