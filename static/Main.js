class Main {
    constructor () {
        this.getDataFromSite();
    }

    getDataFromSite(){
        $('#btAddUser').click(() => {
            let login = $('#inpLogin').val();
            let pass = $('#inpPass').val();
            console.log(login, pass);

            net.addUser(login, pass);
        })
    }

}