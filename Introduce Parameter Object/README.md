![Pr-Obj](Pr-Obj.PNG)

# Introduce Parameter Object

## Motivation:
- Groups of data items that regularly travel together, appearing in function after function is a **data clump** 
- Replace it with a single data structure
- Grouping data into a structure is valuable because it makes explicit the relationship between the data items
- It reduces the size of parameter lists

## Mechanics:
- Create data structure, usually via a class
- Use Change Function Declaration to add a parameter for the new structure
- For each element of the new structure, replace the use of the original parameter with the element of the structure