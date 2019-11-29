// classes

class MenuItem {
    constructor(name, eyeCatcher, description){
        _name = name;
        _eyeCatcher = eyeCatcher;
        _description = description;
    }
}

class Restaurant {
    constructor(name/*menuItems*/) {
        this._name = name;
        /*_menuItems = menuItems;*/
    }
    DisplayName = () => {
        document.getElementById("RestaurantTitle").innerText = this._name;
    }

}


// program
    // menu = [
    //     {
    //         name: 'Burger and Fries',
    //         catch: 'An American Classic!',
    //         description: 'Your choice - with or without cheese '
    //     }
    // ]

let InakinKita = new Restaurant(
    "Inakin Kita ");
console.log(InakinKita._name);