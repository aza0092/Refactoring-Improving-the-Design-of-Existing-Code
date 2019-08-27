![Guard-Clauses](/Conditional-Logic/Replace-Nested-Conditional-with-Guard-Clauses/img/Guard-Clauses.PNG)

# Replace Nested Conditional with Guard Clauses


## Motivation:
- A guard clause is a type of if-else check where one leg is normal and the other is an unusual condition
- The strategy here is to do something and get out via 'return' statements


## Mechanics:
- Select outermost condition that needs to be replaced, and change it into a guard clause, return statements
- Repeat as needed

[Example](https://github.com/aza0092/Refactoring-Improving-the-Design-of-Existing-Code/commit/64b1c03212c560de122a294e2db3840e9a8ab831)
[Another Example](https://github.com/aza0092/Refactoring-Improving-the-Design-of-Existing-Code/commit/e9814659ad3984f2d1e7f66631730341d3a10f7e)