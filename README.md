# Quiz Four

## Instructions

1. Visit this page http://vancouver.craigslist.ca and write a piece of jQuery code that changes all the links on the home page to have a color red if the link's anchor text includes the pattern eal (20%)

2. Visit a Wikipedia page like this one: https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming) then write a peice of jQuery code that will fadeOut any link you click on without following the link. (15%)

3. Write a Rails application that has a company model and a product model. It should be set up as: company has many products. Your application should generate a JSON when you visit a link like (25%):http://localhost:3000/companies.json that looks like:

```
{"companies":
  [
    {"name": "Apple", "products": ["iMac", "iPhone", "iPad"]},
    {"name": "Toyota", "products": ["Corolla", "Matrix", "Rav4"]}
  ]
}
```
4. Build an HTML page separate from your Rails application with jQuery that connects via AJAX to the Rails application and then lists all the companies with the products they have separated by commas. (20%) 

5. Enable "liking" a company by clicking "like" link near its title. You don't need need to worry about user authentication and permissions at this point. Just increment a "like" counter by 1 and show that counter beside the title on the company listing. (10%) 

6. Make the list of companies fadeIn to the page instead of just appearing, they should appear 50ms apart. So the first one should fadeIn right away, the second one should fadeIn after 100ms, the third should fadeIn after 150ms an so on. (10%)

**Bonus:** 

1. Redo Part 2 using API versioning and have display JSON without adding .json to the end. The url should be something like: http://localhost:3000/api/v1/campaigns (+10%) 

2. Redo part 3 by using Node.js (+15%) 

3. Redo Part 4 and Part 5 with React.js (with jQuery being used only for the AJAX part) (+20%)
