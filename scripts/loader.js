function load() {
    
    $('#container-one').css('filter', 'blur(5px)');
    const load = () => {
        return `
        <div class="container-fluid" id="loadingScreen" style="display:none;">
            <div class="row" style="height: 100%;">
                <div class="col-xs-12 col-lg-12" style="height: 100%; position: fixed; z-index: 100; background-color: rgba(255, 255, 255, 0.85); filter: blur(10px);"></div>
                <div class="col-xs-12 col-lg-12" style="position: fixed; z-index: 101; height: 100%;">
                    <div style="width:100%; height:35%;"></div>
                    <div style="width:130px; height:130px; margin:auto;" class="icosaLoader">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    $('#dropLoading').append(load());
    $('#loadingScreen').fadeIn(50);
    setTimeout(() => {
        $('#container-one').css('filter', '');
        $('.icosaLoader').slideUp(500);
        $('#loadingScreen').slideUp(100);
    }, 4000);

}
load()