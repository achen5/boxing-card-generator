# Boxing Trading Card Generator

Live demo: [https://achen5.github.io/boxing-card-generator/](https://achen5.github.io/boxing-card-generator/)

Create trading cards of your favorite boxers! Trading card assets and design are based off Pokemon Trading Cards. 

## Challenges

**Should I convert my app's state into nested objects?**

I decided not to. Reading the app's state may be easier if it was organized into objects. However, updating a property would require rerendering the property's object, instead of just the property. This could cause performance issues if the app were to expand in scope.

**How to I ensure that the user inputs the correct data type i.e. the user inputs a number in a number input and not a string?**

`<input>` elements in HTML5 allow developers to set a type. `<input type="number">` prevents the user from inputting the string.


## Future Developments
- Add a button that converts the user's generated card into an image file. That way, the user can download and share their card.
- Add a button that auto generates cards for popular boxers. The data will likely be obtained from [https://boxrec.com/](https://boxrec.com/).
- Make the app responsive. Its currently optimized for laptop screens or wider.









#
Trading card icons, style © Wizards of the Coast, Nintendo, Creatures, GAMEFREAK
