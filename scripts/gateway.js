
     // date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var secnds = date.getSeconds();
    if (month === 0) { month = 'January' }
    if (month === 1) { month = 'Febuary' }
    if (month === 2) { month = 'March' }
    if (month === 3) { month = 'April' }
    if (month === 4) { month = 'May' }
    if (month === 5) { month = 'June' }
    if (month === 6) { month = 'July' }
    if (month === 7) { month = 'August' }
    if (month === 8) { month = 'September' }
    if (month === 9) { month = 'October' }
    if (month === 10) { month = 'November' }
    if (month === 11) { month = 'December' }

    // import { convert, tr } from "./pay.js";
    // converter
    var tr = 'none';
    const convert = (pay, tpe, usr, mainUser) => {
        var reciept = '';
        if (tpe == 'usr_sub') {
            reciept = {type: pay.transact.type, amount: pay.transact.amount, date: pay.info.date, user: mainUser._id};
        }
        fetch('/transct/reciept', {
            method: 'post',
            body: JSON.stringify({ type: pay.transact.type, amount: pay.transact.amount, date: pay.info.date, user: mainUser._id }),
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            } 
        }).then((response)=>{
            return response.json();
        }).then((rd)=>{
            tr = 'successful'
        });
    }

    export {convert, tr};
