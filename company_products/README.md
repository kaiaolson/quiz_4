# Part 3

Write a Rails application that has a company model and a product model. It should be set up as: company has many products. Your application should generate a JSON when you visit a link like (25%) :http://localhost:3000/companies.json that looks like:

```
{"companies":
  [
    {"name": "Apple", "products": ["iMac", "iPhone", "iPad"]},
    {"name": "Toyota", "products": ["Corolla", "Matrix", "Rav4"]}
  ]
}
```
