function Guide() {

    $('.abtBtn').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.abtBtn').css('background-color', '#e65300');
        $('#abtFuncBpod').fadeIn();
        chkPresAGree();
        var i = 0; loop(i);
    });

    $('.privBtn').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.privBtn').css('background-color', '#e65300');
        $('#privPolBod').fadeIn();
        chkPresAGree();
        var i = 1; loop(i);
    });

    $('.termBtn, #goToTerms').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.termBtn').css('background-color', '#e65300');
        $('#TermSerBod').fadeIn();
        chkPresAGree();
        var i = 2; loop(i);
    });

    $('.ComgBtn, #goToComm').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.ComgBtn').css('background-color', '#e65300');
        $('#comGuiBod').fadeIn();
        chkPresAGree();
        var i = 3; loop(i);
    });

    $('.autBtn, #autBtn').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.autBtn').css('background-color', '#e65300');
        $('#autInfoC').fadeIn();
        chkPresAGree();
        var i = 4; loop(i);
    });

    $('.tecBtn').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies').css('display', 'none');
        $('.tecBtn').css('background-color', '#e65300');
        $('#tecOptC').fadeIn();
        chkPresAGree();
        var i = 5; loop(i);
    });

    $('.agreeBtn, #agreeBtn').click(()=>{
        $('.grbtns').css('background-color', '');
        $('.allBodies, #chkNewNoti').css('display', 'none');
        $('.agreeBtn').css('background-color', '#e65300');
        $('#comAgreeBod').fadeIn();
    });

    var flashCon = new Array();
    flashCon = [
        {
            title: '<span style="font-weight:normal;">About</span>',
            img: 'img/downli4.jpg'
        },
        {
            title: '<span style="font-weight:normal;">Data Policy</span>',
            img: 'img/downli6.jpg'
        },
        {
            title: '<span style="font-weight:normal;">Terms of Services</span>',
            img: 'img/downli13.jpg'
        },
        {
            title: '<span style="font-weight:normal;">Community Guidelines</span>',
            img: 'img/downli12.jpg'
        },
        {
            title: '<span style="font-weight:normal;">Author Account</span>',
            img: 'img/downli9.jpg'
        },
        {
            title: '<span style="font-weight:normal;">Tech & Optimization</span>',
            img: 'img/downli1.jpg'
        }
    ];

    const loop = (i) => {
        $('.flashC').css('display', 'none');
        $('.flashC').css('background-image', `url(${flashCon[i].img})`);
        $('.flashCT').html(flashCon[i].title);
        $('.flashC').fadeIn(1000);
        setTimeout(() => {
        }, 1);
    }
    var i = 0;
    loop(i);
    
    const chkPresAGree = () => {
        fetch('/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((data) => {
            if (data == '') {
                //location.replace('/Login');
                $('#chkNewNoti, .agreeBtn').css('display', 'none');
            } else {
                fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
                    return response.json()
                }).then((data2) => { 
                    if (data2) {
                        if (data2.terms == 'unsigned') {
                            $('#chkNewNoti, .agreeBtn').fadeIn();
                            $('.myUnme').text(data2.user_name);
                        }else {
                            $('#chkNewNoti, .agreeBtn').css('display', 'none');
                        }
                    }
                });
            }
        });
    };
    chkPresAGree();

    // agree
    $('#AgreeToNew').click(()=>{
        fetch('/AgreeToTerms', { 
            method: 'post', 
            body: JSON.stringify({ terms: 'agreed' }),
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            }
        }).then((response) => { return response.json() }).then((data)=> {
            if (data) {
                location.reload();
            }
        })
    });

}
Guide();