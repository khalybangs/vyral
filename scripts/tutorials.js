function Start() {

    $(`#stat`).text('Journals');
    $('#statnum').text(1);
    $(`#pre`).fadeOut();
    // funcs starts here
    var data = ["tut1", "tut2", "tut3", "tut4", "tut5"];
    $(`#${data[0]}`).fadeIn();
    var right = $(`#nex`);
    var left = $(`#pre`);
    var num = 0;
    
    // check length to get status
    const getStat = (data) => {
        if (data == 0) {
            $(`#stat`).text('Journals');
            $('#statnum').text(1);
            $(`#pre`).css('display', 'none');
            $(`#nex`).fadeIn();
            $('#doneTut').css('display', 'none');
        }
        if (data == 1) {
            $(`#stat`).text('categories');
            $(`#nex, #pre`).css('display', 'block');
            $('#doneTut').css('display', 'none');
        }
        if (data == 2) {
            $(`#stat`).text('Strings');
            $(`#nex, #pre`).css('display', 'block');
            $('#doneTut').css('display', 'none');
        }
        if (data == 3) {
            $(`#stat`).text('Chats');
            $(`#nex, #pre`).css('display', 'block');
            $('#doneTut').css('display', 'none');
        }
        if (data == 4) {
            $(`#stat`).text('Settings');
            $(`#nex`).css('display', 'none');
            $(`#pre`).fadeIn();
            $('#doneTut').css('display', 'inline');
        }
    };

    right.click(function() {
        $(`span`).css('display', 'none');
        num++;
        if (num >= data.length) {
            num = 0;
        }
        $(`#${data[num]}`).fadeIn();
        $('#statnum').text(num+1);
        getStat(num);
    });
    
    left.click(function() {
        $(`span`).css('display', 'none');
        num--;
        if (num < 0) {
            num = data.img.length-1;
        }
        $(`#${data[num]}`).fadeIn();
        $('#statnum').text(num+1);
        getStat(num);
    });


    // DONE!!!!!!
    $('#doneTut').click(()=>{
        fetch('/tutorialOff', { method: 'get' }).then((res)=>{
            return res.json();
        }).then((data)=>{
            if (data == 'Done') {
                location.replace('/Login');
            }
        });
    });
    
}
Start();