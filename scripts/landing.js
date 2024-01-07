function land() {

    // post date application
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
    // SmartDate Func
    const smartDate = (data, dateFlow) => {
        
        if (data.date[0] !== year) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[0]}`);
        }
        if (data.date[0] == year && data.date[2] == month && data.date[1] == day) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px;">Today.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] == 1) {
            $(`#${dateFlow}`).html(`<strong style="font-size:10px;">Yesterday.</strong> ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] == month && day - data.date[1] !== 1 && data.date[1] !== day) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }
        if (data.date[0] == year && data.date[2] !== month) {
            $(`#${dateFlow}`).html(`${data.date[2]} ${data.date[1]}, ${data.date[3]}:${data.date[4]}`);
        }

    }; 
    
    var flashCon = new Array();
    flashCon = [
        {
            title: '<strong>.Meet</strong> people from different places with different interests',
            img: 'img/downli3.jpg'
        },
        {
            title: '<strong>.Learning</strong> is the most important asset in information',
            img: 'img/downli2.jpg'
        },
        {
            title: '<strong>.Instant</strong> response when it comes to your news',
            img: 'img/downli4.jpg'
        },
        {
            title: '<strong>.Optimum</strong> functionalities to optimize your data and interest.',
            img: 'img/downli1.jpg'
        },
    ];
    const flash = () => {
        var i = 0;
        const change = () => {
            $('.flashC').css('background-image', `url(${flashCon[i].img})`);
            $('.flashCT').html(flashCon[i].title);
            $('.flashC').fadeIn(1000);
            setTimeout(() => {
                $('.flashC').css('display', 'none');
                i++;
                if (i == flashCon.length) {
                    i = 0;
                }
                change();
            }, 5000);
        }
        change();
    }
    setTimeout(()=>{
        flash();
    }, 4000);
    
    // ACTIONS
    // to login
    $('.to_login').click(()=>{
        window.open('http://localhost:2000/Login', '_blank');
    });
    // to home
    $('.to_home').click(()=>{
        location.replace('/home');
    });
    // to community
    $('.to_comm').click(()=>{
        location.replace('/community');
    });
    // to regs
    $('.to_regs').click(()=>{
        location.replace('/signup');
    });
    // to tutorials
    $('.to_tuto').click(()=>{
        location.replace('/tutorial');
    });

    // Log set
    $('.logged').css('display', 'none');
    $('.no_log').fadeIn(500);
    var lFlag = 'y';
    const checkLog = () => {
        fetch('/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((data) => {
            if (data == '' || data == undefined) {
                $('.logged').css('display', 'none');
                $('.no_log').fadeIn(500);
            } else {
                $('.no_log').css('display', 'none');
                $('.logged').fadeIn(500);
                if (lFlag == 'y') {
                    loop();
                    lFlag = 'n';
                }
            }
            setTimeout(() => {
                checkLog();
            }, 1000);
        });
    }
    setTimeout(() => {
        checkLog();
    }, 4000);

    // feed back loop
    // --------------
    const loop = () => {
        // set info
        var user = '';
        fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
            return response.json()
        }).then((data2) => {
            user = data2;
            $('.user_i').text(data2.user_name);
            getRevs();
        });

        // extract reviews
        // ---------------
        // get revs
        const getRevs = () => {
            fetch('/getExps', { method: 'get'}).then((response)=>{
                return response.json();
            }).then((data)=>{
                fetch('/getUsers', { method: 'get' }).then((responce)=>{
                    return responce.json();
                }).then((users)=>{
                    $('.exp_bod').remove();
                    for (let i = 0; i < data.length; i++) {
                        var usr = users.find(a=>a._id == data[i].user);
                        if (usr !== undefined) {
                            var type = 'ex';
                            if (data[i].user == user._id) {
                                type = 'me';
                            }
                            dropRev(data[i], usr, type);
                        }
                    }
                });
            });
        }
        // bodies
        const meRev = (info, ids, user) => {
            return `
            <div class="exp_bod" style="width: 85%; margin: 10px; float: right; margin-right: 5px; margin-bottom: 10px;  background-color: #f9f9f9; box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.253);">
                <div style="width: 95%; margin: auto; height: 25px; border-bottom: solid 1px #f0f0f0;">
                    <p style="margin: 0px; padding: 2px; font-size: 13px; color: grey; float: left;">${user.user_name}</p>
                    <p id="${ids.date}" style="margin: 0px; padding: 2px; font-size: 11px; color: grey; float: right;">date here</p>
                </div>
                <p style="margin: 0px; padding: 5px; font-size: 14.5px; color: #404040;">${info.review}</p>
            </div>
            `
        }
        const exRev = (info, ids, user) => {
            return `
            <div class="exp_bod" style="width: 85%; margin: 10px; float: left; margin-left: 5px; margin-bottom: 10px; background-color: white; box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.253);">
                <div style="width: 95%; margin: auto; height: 25px; border-bottom: solid 1px #f9f9f9;">
                    <p style="margin: 0px; padding: 2px; font-size: 13px; color: grey; float: left;">${user.user_name}</p>
                    <p id="${ids.date}" style="margin: 0px; padding: 2px; font-size: 11px; color: grey; float: right;">date here</p>
                </div>
                <p style="margin: 0px; padding: 5px; font-size: 14.5px; color: #404040;">${info.review}</p>
            </div>
            `
        }
        const dropRev = (data, user, type) => {
            const ids = {
                date: `exp_rev_date_${data._id}`
            };
            var x = window.matchMedia("(max-width: 600px)")
            if (x.matches) {
                if (type == 'me') {
                    $('#dropMyFeed_xs').append(meRev(data, ids, user));
                } else {
                    $('#dropFeed_xs').append(exRev(data, ids, user));
                }
            } else {
                if (type == 'me') {
                    $('#dropMyFeed').append(meRev(data, ids, user));
                } else {
                    $('#dropFeed').append(exRev(data, ids, user));
                }
            }
            smartDate(data, ids.date);
        }

        // add
        $('.sendFeed').click(()=>{
            if ($('.feedIn').val() !== '' || $('.feedIn_xs').val()) {
                var inp = '';
                var x = window.matchMedia("(max-width: 600px)");
                if (x.matches) {
                    inp = $('.feedIn_xs');
                } else {
                    inp = $('.feedIn');
                }
                fetch('/addReview', {
                    method: 'post',
                    body: JSON.stringify({ 
                        user: user._id, review: inp.val(), date: [year, day, month, hour, minute]
                    }),
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    } 
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    setTimeout(() => {
                        getRevs();
                    }, 1000);
                });
            } else {
                alert('include experience');
            }
        })
        
    }

    // xs
    $("#clsPopCon").click(()=>{
        $("#xsPopCon").slideUp(100);
    });

}
land();