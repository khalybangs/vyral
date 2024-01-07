function Naver() {

    const home = () => {
        return `
        <div style="width:100%; height:100%;" id="indexmin">
            <p id="hmeIndct" style="margin:0px; font-size:15px; color:orange; padding:5px; display:inline;"></p>
            <button id="opnMainfd-xs" class="btn btn-default btn-xs" style="border-radius:10px; border:solid 1px orange; color:darkorange; background-color:transparent; display:inline; margin:10px;"> <img src="img/home.png" width="8px" height="10px"> main feed </button>  
            <button id="opnExplrfd-xs" class="btn btn-default btn-xs" style="border-radius:10px; border:solid 1px #dddddd; color:darkorange; background-color:transparent; display:inline; margin:10px;"> <img src="img/exp.png" width="10px" height="10px"> explore </button>  
            <button id="opnShlf-xs" class="btn btn-default btn-xs" style="border-radius:10px; border:solid 1px #dddddd; color:darkorange; background-color:transparent; display:inline; margin:10px;"> <img src="img/bread.png" width="10px" height="10px"> book shelf </button>  
            <!-- <button id="opnTopsfd-xs" class="btn btn-default btn-xs" style="border-radius:10px; border:solid 1px #dddddd; color:darkorange; background-color:transparent; display:inline; margin:10px;"> <img src="img/shop.png" width="10px" height="8px"> top shop </button>  -->
        </div>
        `
    };
    $('#minnaver').append(home());
}
Naver();