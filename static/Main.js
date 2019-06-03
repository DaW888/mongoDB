class Main {
    constructor () {
        this.getDataFromSite();
        this.data = [];
    }

    getDataFromSite(){
        $('#btAddUser').click(() => {
            let login = $('#inpLogin').val();
            let pass = $('#inpPass').val();
            console.log(login, pass);

            net.addUser(login, pass);
        })

        $('#btRefreshUsers').click(() => {
            net.refreshUsers();
        })

        $('#btRemoveUser').click(() => {
            const id = $('#selUsers').val();
            console.log(id);
            net.removeUser(id);
        })

        $('#selUsers').change(()=>{
            console.log($('#selUsers').val());
            let thisEl = this.data.find((el)=>{
                return el._id == $('#selUsers').val();
            })
            console.log(thisEl);
            $('#inpLogin').val(thisEl.login);
            $('#inpPass').val(thisEl.pass);
        })

        $('#btUpdatePass').click(() => {
            const id = $('#selUsers').val();
            console.log(id);
            const pass = $('#inpPass').val();
            console.log(pass);
            net.updatePass(id, pass);

        })
    }

    getData(data){
        this.data = data;
        let dataString = JSON.stringify(data, null, 4);
        console.log(data);
        $('#textArea').val(dataString);
        
        $('#selUsers').html('');
        data.forEach(el => {
            $('<option>').val(el._id).text(el._id).appendTo($('#selUsers'));
            console.log(el._id);
        });
    }

}