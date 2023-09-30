## INFO 6150: Ameya Apte 002764540

## Assignment 1

Website for Foody Box selling company

The website consists of three pages - 

**1. Home:** used for displaying information about the current food box being sold by the company and also includes it pictures and reviews

**2. About:** used for displaying information about the history of the company along with information about team

**3. Contact:** used for displaying contact information and newsletter subscription for the website users

A variety of HTML and HTML5 tags are used throughout the website but the most significant ones are as below:
1. **favicon**: A favicon is used to display an image icon besides the title of an HTML document. In this case, a food box image is used as a favicon. Favicon is specified using the `<link href>` tag along with the favicon icon path link as reference.
2. **table**: A table is created using the `<table>` tag. The `<tr>` and `<td>` tags are used to define the row and cell content respectively. In case of the website, the table tag is used to create the specifications table of the current Food Box.
3. **form**: A form in HTML is created using `<form>` tag and is used to enter and process the user inputs. Form is used in the website to capture the user's details to help subscribe to the company newsletter.
4. **images**: An image can be added to the HTML page by using `<img>` tag along with specifying the path of the required image in the `src` parameter. Images are used at a variety of places in the website such as the Foo Box images, office image as well as team images.
5. **hyperlink**: A hyperlink can be used by adding the `<a>` tag (anchor tag) to link it to some other HTML page/image/any other element. Hyperlinks are used in the website to help navigate through the three pages of the company.
6. **button**: A button can be created in an HTML page by using the `<button>` tag. In the website, the button is used for capturing the information that was input by the user for subscribing to the newsletter on the 'Contact Us' page.
7. **audio**: An audio can be used to embed an audio file in an HTML document using the `<audio>` tag. We also need the `src` parameter along with the audio tag to specify the source of the audio file and the `type="audio/mpeg"` parameter should be specified to indicate that the file at the specified path is an audio file. The audio tag is used in the website to embed an anonymous review by a beta user of the company.
8. **video**: A video can also be embedded in an HTML document using the `<video>` tag. Similar to the audio tag, we need to specify the 'src' parameter along with the `type="video/ogg"` to indicate it being a video file format. A video is used in the website to embed a video review by a tech reviewer.
9. **header**: A `<header>` tag is generally used for displaying the page introduction and navigation menu of an HTML document. Header is used in the website to display the company name along with the hamburger menu.
10. **footer**: A `<footer>` tag is used for displaying the footer of an HTML page which usually consists of copyright information or navigation links of a website. Footer is used in the website to declare the copyright content and hyperlinks to the company's twitter and facebook pages.
11. **summary**: A `<summary>` tag is used to display a heading element along with `<details>` tag which describes the mentioned heading element upon a mouse click. Summary is used in the website to display the features of the current food box of the company.
12. **menu**: A `<menu>` tag is usually used to display a list of commands or list items. Menu is used in the website to display a list of all available softwares on the food box sold by the company.
13. **tel for contact information**: The `<a href="tel:123-456-7890">` tag is used to define a callable telephone number in an HTML document. On clicking upon this telephone number, the browser redirects the user to any available calling app for dialing in this number. This tag is used to display the contact telephone number of the company.
14. **mailto for contact information**: The `<a href="mailto:abcd123@xyz.com">` is used to define a mailable email address in an HTML document. On clicking upon this email address, the browser redirects the user to any available mailing app for emailing to the specified email address. This tag is used to display the contact email address of the company.

An external CSS file is used to define the entire styling of the website. This external file is attached to the HTML pages using the `<link rel="stylesheet" href="styles.css">` tag which defines the external CSS file as a stylesheet file for the HTML document.