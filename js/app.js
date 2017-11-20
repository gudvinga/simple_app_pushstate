var routes, router, contentEl, locationEl, menu;

contentEl = document.getElementById('content');
locationEl = document.getElementById('locationHref');
menu = document.getElementById('navigation');

routes = {
    '/': {
        title: 'Simple Application', 
        content: '<p>Welcome to the Simple Application<p>'
    }, 

    boolean: {
        title: "Boolean",
        content: `<h2>Boolean</h2><p>In computer science, a boolean is a logical data type that can have only the values true or false. For example, in JavaScript, boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops).</p>`
    },

    null: {
        title: "Null",
        content: `<h2>Null</h2><p>In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.</p>`
    },

    undefined: {
        title: "Undefined",
        content: `<h2>Undefined</h2><p>A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.</p>`,
    },

    number: {
        title: "Number",
        content: `<h2>Number</h2><p>In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.</p>`
    },

    string: {
        title: "String",
        content: `<h2>String</h2><p>JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.</p>`
    },

    symbol: {
        title: "Symbol",
        content: `<h2>Simbol</h2><p>Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called atoms. For more details see Symbol and the Symbol object wrapper in JavaScript.</p>`
    },
    
    object: {
        title: "Object",
        content: `<h2>Object</h2><p>Object refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.</p>`
    }
}

var updateState = function(e) {
    var state;

    if (e.target.tagName != 'A') return;

    e.preventDefault();
    state = {
        page: e.target.getAttribute('href')
    };
    history.pushState(state, '', state.page);
    router();
}

router = function() {
    let path = window.location.pathname.slice(1) || '/',
        curentRoute = routes[path];

    document.title = curentRoute.title;
    contentEl.innerHTML = curentRoute.content || 'Error 404. Page not found';
    locationEl.innerHTML = window.location.href;
}

menu.addEventListener('click', updateState);
window.addEventListener('load', router);
window.addEventListener('popstate', router);
