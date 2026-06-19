// Create menu object
const menu = {
  _meal: '',
  _price: 0,

  // Setter for meal
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },

  // Setter for price
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },

  // Getter for today's special
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

// Set values using setters
menu.meal = 'Pasta';
menu.price = 12;

// Get today's special
console.log(menu.todaysSpecial);