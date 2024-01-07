function scripts() {

    // check subs and del expired
    const removeSub = (user, subrs) => {
        console.log('remove sub');
        fetch('/extractEx/setUsrtp', {
            method: 'post',
            body: JSON.stringify({ id: user._id, user_type: {type: user.user_type.type, categories: user.user_type.categories, subscritpions: user.user_type.subscritpions, subscribers: subrs, status: user.user_type.status, price: user.user_type.price, background: user.user_type.background} }),
            headers : {
                "Content-type" : "application/json; charset=utf-8"
            } 
        }).then((response)=>{
            return response.json();
        }).then((rd)=>{
        });
    }
    var checkAllSubs = () => {
        var nw = new Date();
        var fullD = Math.floor(nw/8.64e7);
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{ 
            if (users.length > 0) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].user_type !== 'user' && users[i].user_type.status == 'on') {
                        var subrs = new Array();
                        subrs = users[i].user_type.subscribers; len = users[i].user_type.subscribers.length;
                        for (let p = 0; p < subrs.length; p++) {
                            if (subrs[p].exp < fullD) {
                                subrs.splice(p, 1);
                            }
                        }
                        if (subrs.length !== len) {
                            removeSub(users[i], subrs);
                        }
                    }
                }
            }
            resartCheck();
        });
    };
    const resartCheck = () => {
        setTimeout(() => {
            checkAllSubs();
        }, 1);
    }
    checkAllSubs();
    
    // get locales
    fetch('/lclJs', { method: 'get' }).then((res)=>{
        return res.json();
    }).then((tpe)=>{
        if (tpe == 'lgn') {
            $('#drp-scrpts').after(`
                <script src="alerts.js"></script>
                <script src="login.js"></script>
                <script src="logvalidations.js"></script>
            `);
        }
        if (tpe == 'rg') {
            $('#drp-scrpts').after(`
                <script src="reg.js"></script>
            `);
        }
        if (tpe == 'ttrl') {
            $('#drp-scrpts').after(`
                <script src="tutorials.js"></script>
            `);
        }
        if (tpe == 'hom') {
            $('#drp-scrpts').after(`
                <script src="head.js"></script>
                <script src="minnav.js"></script>
                <script src="globe.js"></script>
                <script src="alerts.js"></script>
                <script src="leftnavs.js"></script>
                <script src="topshop.js"></script>
                <script src="images.js"></script>
                <script src="imagesedt.js"></script>
                <script src="video.js"></script>
                <script src="settings.js"></script>
                <script src="noti.js"></script>
                <script src="search.js"></script>
                <script src="bjextractor.js"></script>
                <script src="dark.js"></script>
                <script src="carties.js"></script>
                <script src="reviewer.js"></script>
            `);
        }
        if (tpe == 'cht') {
            $('#drp-scrpts').after(`
                <script src="head.js"></script>
                <script src="globe.js"></script>
                <script src="alerts.js"></script>
                <script src="settings.js"></script>
                <script src="noti.js"></script>
                <script src="search.js"></script>
                <script src="leftnavs.js"></script>
                <script src="dark.js"></script>
                <script src="chats.js"></script>
                <script src="images.js"></script>
                <script src="imagesedt.js"></script>
                <script src="video.js"></script>
                <script src="carties.js"></script>
                <script src="reviewer.js"></script>
            `);
        }
        if (tpe == 'fgp') {
            $('#drp-scrpts').after(`
                <script src="alerts.js"></script>
                <script src="fpass.js"></script>
                <script src="login.js"></script>
                <script src="logvalidations.js"></script>
            `);
        }
        if (tpe == 'pf') {
            $('#drp-scrpts').after(`
                <script src="globe.js"></script>
                <script src="head.js"></script>
                <script src="alerts.js"></script>
                <script src="settings.js"></script>
                <script src="images.js"></script>
                <script src="imagesedt.js"></script>
                <script src="video.js"></script>
                <script src="search.js"></script>
                <script src="noti.js"></script>
                <script src="reviewer.js"></script>
                <script src="ads.js"></script>
                <script src="dark.js"></script>
                <script src="carties.js"></script>
                <script src="reviewer.js"></script>
            `);
        }
        if (tpe == 'epf') {
            $('#drp-scrpts').after(`
                <script src="head.js"></script>
                <script src="alerts.js"></script>
                <script src="images.js"></script>
                <script src="imagesedt.js"></script>
                <script src="video.js"></script>
                <script src="noti.js"></script>
                <script src="search.js"></script>
                <script src="dark.js"></script>
                <script src="carties.js"></script>
                <script src="reviewer.js"></script>
                `);
            }
    });

}
scripts()