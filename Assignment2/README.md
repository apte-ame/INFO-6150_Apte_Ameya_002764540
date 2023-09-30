# INFO 6150: Ameya Apte 002764540

## Assignment 2

### Personal Portfolio Website

The website consists of one page with the following five subsections -

**1. Home:** used for displaying profile picture and basic information about me

**2. About:** used for my educational and professional history

**3. Skills:** used for displaying acquired skills and certifications.

**4. Projects:** used for displaying previous project information/demonstration videos

**5. Contact:** used for displaying contact information along with a form to contact me

A huge variety of HTML and HTML5 tags are used throughout the portfolio website. Some of the tags include the following:

1. **favicon**: A favicon is used to display an image icon besides the portfolio title. In my case, I have used to picture of capital letter `A` which denotes the first letter of my name. The favicon is specified in `index.html` using the `<link href>` tag along with the specified favicon icon's path link.
2. **table**: Tables are created using the `<table>` tag. The `<tr>` tag is used to specify the rows while the `th` tag denotes the column headers and `<td>` tags are used to column content. The tables are styled using various CSS selectors such as the `:nth-child()` or the `:hover` selector to perform various functions in case of respective mouse click events. In case of my website, the tables are used to display my educational and professional background, while the selectors are used to show additional popup `span` that show additional information about my respective experience.
3. **form**: Forms in HTML are created using `<form>` tag and are used to capture the user input. A form is used in my portfolio website to capture any user's details who is trying to contact me for some reason.
4. **images**: Images can be added to HTML pages by using `<img>` tag. We need to specify the path of the required image in the `src` parameter and also specify the `alt` text in case the image does not load due to any issues. Images are used at different places in the portfolio website such as my introduction image as well as images of my certifications.
5. **hyperlink**: Hyperlinks are created using the anchor `<a>` tag and can be used to link to some other HTML page or any other element in the same HTML page. Hyperlinks are used in the portfolio to help navigate through the different sections in the portfolio.
6. **button**: Buttons are created in an HTML page by using the `<button>` tag. A button is used in the portfolio website to capture the user contact information from the form in the contact page.
7. **audio**: An audio file can be embedded in an HTML document using the `<audio>` tag. We need to specify the path of the audio file using the `src` parameter along with the `type="audio/mpeg"` parameter to indicate that the specified file is an audio file. The audio tag is used in the portfolio website to embed a prerecorded short introduction about me.
8. **video**: Videos can be embedded in an HTML document using the `<video>` tag. We also need to specify the `src` parameter along with the `type="video/ogg"` to indicate that the specified file is a video file. Videos are used in the portfolio website to show demos of my projects.
9. **header**: A `<header>` tag is used to display the introduction and navigation menu of an HTML document. Header is used in the portfolio to display my name along with the navigation menu. The header is always having a fixed position at the top of the page to ensure easy navigation through different sections for the user.
10. **footer**: A `<footer>` tag is used for displaying the footer of an HTML page and it usually consists of copyright information. A footer is used in the portfolio website to declare that the website is my copyright content.
11. **summary**: A `<summary>` tag is used to display a heading element. The `<details>` tag then describes the heading upon a mouse click event. Summary is used in the to display a short introduction about me in the About section.
12. **menu**: A `<menu>` tag is usually used to display a list of commands or list items. Menu is used in the portfolio to display a list of all the roles that I am interested in pursuing a career in and also includes a hyperlink to respective GitHub repositories.
13. **tel for contact information**: The `<a href="tel:123-456-7890">` tag is used to define a callable telephone number in an HTML document. Upon clicking this number, the browser redirects us to any available dialer app for dialing in the specified number. This tag is used to display my contact number in the Contact section.
14. **mailto for contact information**: The `<a href="mailto:abcd123@xyz.com">` is used to define a mailable email address in an HTML document. Upon clicking this email address, the browser redirects the user to any available emailing app for messaging the specified email address. This tag is used to display my email address in the Contact section.

An external CSS file is used to describe the overall styling of the portfolio website. This external file is named `styles.css` and is attached to the `index.html` page using the `<link rel="stylesheet" href="styles.css">` tag which defines the external CSS file as a stylesheet file for the HTML document.

The `float` property is used throughout the website to float elements either to the left or right for better visual appeal. This tag is specifically used on the form sub-elements for styling purpose.

The `overflow` property is as well used in the About section where in my description is a bit longer than normal and so a `overflow: scroll` is applied to ensure the description remains within a controllable space.

The `column layout` structure is used in almost all the sections for the resolutions greater than 650px. The column layout is achieved using the `display: flex` and `flex: 50%` on the row and column `div` element respectively to ensure a two column layout at most of the places.

The `absolute` and `relative` positioning parameters are also used as and where necessary. Absolute positions are specified from the top of the HTML web page and are usual static while the relative positions are dynamic with respect to some parent element preceeding their occurances.

An image gallery is also created for the certifications which shows a enlarging effect upon mouse hovers to display a more clearer view of the required certification.

The website is made very responsive using the media queries. The `@media only screen and (max-width)` parameter is used for various screen sizes like 1300px, 900px, 800px, 650px, and 450px to ensure that the website never distorts and is fully responsive for all the possible screen sizes. Most of the elements are resized for each screen resolution to make sure the elements perfectly fit and do not overflow/break for any of the above screen resolution.
