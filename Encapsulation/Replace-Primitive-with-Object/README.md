![PrmObj](/Encapsulation/Replace-Primitive-with-Object/img/Prm-Obj.PNG)

# Replace Primitive with Object

## Motivation:
- Early development often has simple items, which get complicated over time 
- Growing data with increasing behaviour needs is best handled when creating a class to represent it as objects
- Grouping data into a structure is valuable because it makes explicit the relationship between the data items
- It reduces the size of parameter lists

## Mechanics:
- Create class and provide getter/setter to encapsulate the values
- Change  setter to create new instance of the value class and store it

#[Example](https://github.com/aza0092/Refactoring-Improving-the-Design-of-Existing-Code/commit/93c0eeab81f18316478979dbcf0d29decd3c5b87)
