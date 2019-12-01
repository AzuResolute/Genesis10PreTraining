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
        document.getElementById("main")[0].appendChild((`<h1>${this._name}</h1>`));
    }
    PrintName = () => {
        return this._name;
    }

}


// store

let menu = [
    new MenuItem(
        "Burger and Fries",
        "An American Classic!",
        [
            "Your choice - with or without cheese",
            "Pickle, onion, tomato, and lettuce",
            "Served with our famous thick cut",
            "french fries"
        ],
        7.95
    ),
    new MenuItem(
        "Hot Dog",
        "An American Classic!",
        [
            "Your choice - with or without cheese",
            "Pickle, onion, tomato, and lettuce",
            "Served with our famous thick cut",
            "french fries"
        ],
        7.95
    ),

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