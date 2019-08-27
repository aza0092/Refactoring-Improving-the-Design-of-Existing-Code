![poly](/Conditional-Logic/Replace-Conditional-with-Polymorphism/img/poly.PNG)

# Replace Conditional with Polymorphism


## Motivation:
- Seperate complex conditional logic using classes and polymorphism
- This helps make the seperation more explicit
- Common patterns: set of types - base case with many variants


## Mechanics:
- Create polymorphic behavior
- Use factory function
- Move conditional to superclass
- Pick subclasses and build methods that replace the conditionals
- Leave default case for the superclass