class Net {
    constructor() {
        console.log('konstruktor klasy Net');
    }

    // wyslanie nazwy uzytkownika na serwer
    // odbior: canLogin, message, if(canLogin){to też users[]}
    addUser(login, pass) {
        $.ajax({
            url: '../server.js',
            data: { action: 'addUser', login: login, pass: pass},
            type: 'POST',
            success: function(data) {
                const obj = JSON.parse(data);
                console.log(obj);
            },
            error: function(xhr, status, error) {
                console.log(xhr, status, error);
            },
        });
    }
}