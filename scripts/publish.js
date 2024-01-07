function pub() {

    var user; var cats = new Array();
    fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response) => {
        return response.json()
    }).then((data) => { 
            if (data !== 'none') {
               user = data._id;
               catsFunc();
               $('.all_p_bods').css('display', 'none');
                if (data.user_type.type && data.user_type.status == 'on') {
                    $('#pub-cong').fadeIn();
                }else {
                    $('#reg-pub-con').fadeIn();
                }
            }else {
                location.replace('/Login');
            }
    });
    
    // navs
    $('#cls-pub-info').click(()=>{
        $('#pub-info-con').fadeOut();
    });
    $('.cls-pubinfo').click(()=>{
        $('#pub-allinfo').css('display', 'none');
        $('#reg-pub-con').fadeIn();
    });
    // minor
    $('#learnPubAll').click(()=>{
        $('#reg-pub-con').css('display', 'none');
        $('#pub-allinfo').fadeIn();
    });
    $('.cls-pubinfo').click(()=>{
        $('#pub-allinfo').css('display', 'none');
        $('#reg-pub-con').fadeIn();
    });
    
    // categories funcs
    var avail = new Array(); 
    const catsFunc = () => {
        var clsCatLst = 'n';
        // ADDED CATS
        //-----------
        // drop genres
        const genFuncsRem = (gen, gIds) => {
            $(`#${gIds.remID}`).click(()=>{
                for (let i = 0; i < avail.length; i++) {
                    if (avail[i] == gen) {
                        avail.splice(i, 1);
                    }
                }
                checkCat();
            });
        }
        const genBodyAdd = (gen, gIds) => {
            return `
            <div class="genCatLstBodyRem" id="${gIds.bodyId}" style="float:left; margin:3px; height:33px; background-color:white; border-radius:15px; border:none; margin-bottom:5px;z">
                <p style="float:left; margin:5px; padding:2px; color:rgb(255, 149, 0); font-size:13.5px; margin-top:5px;"> ${gen} </p>
                <p style="float:right; margin:5px; font-size:25px; color:orangered; margin-top:-2px; cursor:pointer;" id="${gIds.remID}">-</p>
            </div>
            `;
        }
        const createCatIdsAdd = (i) => {
            return {
                bodyId: `cat_added_list_bodyId_${i}`,
                remID: `cat_added_list_remID_${i}`,
            }
        }
        const drpCatChs = (cat, i) => {
            const gIds = createCatIdsAdd(i);
            $('#dropChsCats').prepend(genBodyAdd(cat, gIds));
            genFuncsRem(cat, gIds);
        }
        const checkCat = () => {
            $('.genCatLstBodyRem').remove();
            $('#chCatsNo').text(avail.length);
            if (avail.length == 5) {
                clsCatLst = 'y';
                $('#slsctCatsCon').slideUp();
            }else {
                if (clsCatLst == 'y') {
                    clsCatLst = 'n';
                    $('#slsctCatsCon').fadeIn();
                }
            }
            if (avail.length > 0) {
                $('#chsCatsCon').fadeIn();
                for (let u = 0; u < avail.length; u++) {
                    drpCatChs(avail[u], u);
                }
            }else {
                $('#chsCatsCon').css('display', 'none');
            }
            extractCat();
        }
        
        // ADD CATS TO GRP
        // ---------------
        // cat Ids
        const catBod = (cat, ids) => {
            return `
            <div class="genCatLstBody" id="${ids.catBod}" style="float:left; margin:3px; height:33px; background-color:white; border-radius:15px; border:none; cursor:pointer; margin-bottom:5px;">
                <p style="float:left; margin:3px; padding:5px; color:grey; font-size:13.5px; margin-top:2px;"> ${cat} </p>
                <p style="float:right; margin:5px; font-size:20px; color:rgb(0, 183, 255); margin-top:-1px;" id="${ids.addCat}">+</p>
            </div>
            `;
        }
        const availFuncs = (cat, ids) => {
            $(`#${ids.addCat}`).click(()=>{
                avail[avail.length] = cat;
                checkCat();
            });
        }
        const createCatId = (cat, id) => {
            return {
                addCat: `addCat_${id}`,
                catBod: `catBod_${id}`,
            }
        }
        // drop
        const dropCat = (cat, id) => {
            const ids = createCatId(cat, id);
            $('#dropCats').append(catBod(cat, ids));
            availFuncs(cat, ids);
        }
        // extract
        const extractCat = () => {
            $('.genCatLstBody').remove();
            fetch('/getGlbCol', {
                method: 'get',
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                }
            }).then((res)=>{
                return res.json();
            }).then((glob)=>{
                for (let i = 0; i < glob.categories.length; i++) {
                    if (avail.length > 0) {
                        var f = 'n';
                        for (let x = 0; x < avail.length; x++) {
                            if (avail[x] == glob.categories[i]) {
                                f = 'y';
                            }
                        }
                        if (f  == 'n') {
                            dropCat(glob.categories[i], i);
                        }
                    }else {
                        dropCat(glob.categories[i], i);
                    }
                }
            });
        }
        extractCat();
    };
    // done publish
    $('#nxt-pub-done').click(()=>{
        if (avail.length > 0) {
            fetch('/settings/setUsrtp', {
                method: 'post',
                body: JSON.stringify({ user_type: {type: 'publisher', categories: avail, subscritpions: [], subscribers: [], status: 'on', price: 'none', background: 'none'} }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                } 
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if (data) {
                    $('#reg-pub-con').css('display', 'none');
                    $('#pub-cong').fadeIn();
                }
            });
        }else {
            alert('choose between 1 and 5 categories!');
        }
    });

}
pub();