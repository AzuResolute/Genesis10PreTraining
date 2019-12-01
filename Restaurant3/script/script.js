// classes

class MenuItem {
    constructor(name, eyeCatcher, description, price){
        _name = name;
        _eyeCatcher = eyeCatcher;
        _description = description;
        _price = price;
    }
}

class Restaurant {
    constructor(name/*menuItems*/) {
        this._name = name;
        /*_menuItems = menuItems;*/
    }
    DisplayName = () => {
        document.getElementsByTagName("main")[0].appendChild((`<h1>${this._name}</h1>`));
    }
    PrintName = () => {
        return this._name;
    }

}


// store

let menu = [

]

let InakinKita = new Restaurant(
    "Inakin Kita ");

// program
    // menu = [
    //     {
    //         name: 'Burger and Fries',
    //         catch: 'An American Classic!',
    //         description: 'Your choice - with or without cheese '
    //     }
    // ]

// console.log(InakinKita.PrintName());
InakinKita.DisplayName();