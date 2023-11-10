# Phase-2-Project-Quote-Gems### 
### *By Irene Annah on 09/11/2023*


##  Description:
This project is a straightforward website designed to display a new inspiring and motivational quote every day when users visit the site. The website fetches a daily quote from a public quote API and presents it in a user-friendly manner.

##  API Used:
https://api.quotable.io/random. This API allows you to fetch random quotes and even get a daily quote which you'd like
## LIVE LINK 
https://654ddd1f3e992c465ea290dd--delightful-smakager-861f2a.netlify.app/
##  Features
Daily Inspirational Quotes:

Users can access a new inspirational quote every day.
The website automatically updates the daily quote without requiring user intervention.
Manual Quote Fetch:

Users have the option to manually fetch a new quote with the click of a button.
Favorite Quotes:

Users can add their favorite quotes to a favorites list.
Error Handling:

Basic error handling is implemented to notify users if there are issues with fetching a new quote or if the API request fails.

## Instructions
To access the Quote Gems Webbsite;

To access the Quote Gems website:

Simply visit the website [URL] to view the daily inspirational quote.
Use the "Get Another Quote" button to manually fetch a new quote.
Add your favorite quotes to the favorites list using the "Add to Favorites" button.


## Code organization
The project is organized into several components for better maintainability and readability. These components include:

~ Header
~ Quotes
~ Author
~ Footer
~ Button
~ FavoriteButton
~ FavoritesList

## Code Samples
 Explore the code samples in each component to understand the implementation details.

 // Function fetches a random quote from the quotable API
  const fetchRandomQuote = () => 
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.content && data.author) {
          setQuoteData({ quote: data.content, author: data.author });
        } else {
          console.error('No quotes available in the data.');
        }
      })
      .catch((error) => console.error(error));


##  Credits
Credits to the quotable API for providing the public API used in this project.


## Known Bugs
    No bugs detected. The programs runs perfectly.

##  Technologies Used- Javascript
-JavaScript
-HTML/CSS
-Terminal
-JSON Server

## Support and contact details
    - Email :: gitauirene56@gmail.com
    - Phone :: +254717035023