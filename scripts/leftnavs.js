function leftNav() {
    var x = window.matchMedia("(max-width: 600px)");
    if (x.matches) {
        $('.leftNavCon').css('display', 'none');
    };
    // FUNC FOR HOM
    // -------------
    // drop in home
    $('#flowHome').append(`
        <div id="indexBgNav">
            <div class="leftNavBod" style="width:100%; height:40px;">
                <p id="opnMainfd" class="p_subHsL" style="margin:0px; padding:10px; color:orange; cursor: pointer;"> <img src="img/home.png" alt="" width="20px" height="20px" id="homeind"> main feed</p>
            </div>
            <div class="leftNavBod" style="width:100%; height:40px;">
                <p id="opnExplrfd" class="p_subHs" style="margin:0px; padding:10px; cursor: pointer;"> <img src="img/exp.png" alt="" width="20px" height="20px" id="expind"> explore</p>
            </div>
            <span id="drop_left_navs"></span>
            <!-- div style="width:100%; height:40px;">
                <p id="opnTopsfd" style="margin:0px; padding:10px; color:grey; cursor: pointer;"> <img src="img/shop.png" alt="" width="20px" height="20px" id="topind"> top shop</p>
            </div -->
        </div>
    `);
    // nav left home
    $('#opnMainfd, #opnMainfd-xs').click(()=>{
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((data) => {
            if (data == 'light') {
                $('.p_subHs, .p_subHsL').css('color', 'grey');
            } else {
                $('.p_subHs, .p_subHsL').css('color', 'silver');
            }
            $('#opnMainfd').css('color', 'orange');
            $('#explflow, #topsflow').css('display', 'none');
            $('#mainflow, #reaOrStr').fadeIn();
            // for xs
            $('#opnMainfd-xs').css('border', 'solid 1px orange');
            $('#opnExplrfd-xs, #opnTopsfd-xs').css('border', 'solid 1px #dddddd');
            $('#redFlow').click();
            var x = window.matchMedia("(max-width: 600px)");
            if (x.matches) {
                $('#trndStrAr').css('display', 'none');
            };
        });
    });
    $('#opnExplrfd, #opnExplrfd-xs').click(()=>{
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((data) => {
            if (data == 'light') {
                $('.p_subHs, .p_subHsL').css('color', 'grey');
            } else {
                $('.p_subHs, .p_subHsL').css('color', 'silver');
            }
            $('#opnExplrfd').css('color', 'orange');
            $('#mainflow, #topsflow, #reaOrStr').css('display', 'none');
            $('#explflow').fadeIn();
            // for xs
            $('#opnExplrfd-xs').css('border', 'solid 1px orange');
            $('#opnMainfd-xs, #opnTopsfd-xs').css('border', 'solid 1px #dddddd');
            $('#redFlow-ex').click();
            var x = window.matchMedia("(max-width: 600px)");
            if (x.matches) {
                $('#trndStrAr').css('display', 'block');
                $('#trndStrAr').css('margin-bottom', '10px');
            };
        });
    });

}
leftNav();