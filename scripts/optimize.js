// global variables
var all_scr = {str: [], thr: [], jrn: [], aut: []}; var tt_scr = {str_scr: [], jrn: {likes: [], comments: [], reads: [], score: 0}};
var tp = {sect: 'str', streak: 'recent'};
var date = new Date();
var year = date.getFullYear();
var day = date.getDate();
var month = date.getMonth();
var hour = date.getHours();
var minute = date.getMinutes();
var secnds = date.getSeconds();
if (month == 0) { month = 'January' }
if (month == 1) { month = 'Febuary' }
if (month == 2) { month = 'March' }
if (month == 3) { month = 'April' }
if (month == 4) { month = 'May' }
if (month == 5) { month = 'June' }
if (month == 6) { month = 'July' }
if (month == 7) { month = 'August' }
if (month == 8) { month = 'September' }
if (month == 9) { month = 'October' }
if (month == 10) { month = 'November' }
if (month == 11) { month = 'December' }
var mnths = new Array(); mnths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "Novbember", "December"]

// get posts
const setO = () => {
    all_scr = {str: [], thr: [], jrn: [], aut: []}; var tt_scr = {str_scr: [], jrn: {likes: [], comments: [], reads: [], score: 0}};
    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
        return response.json();
    }).then((pst)=>{
        // displayPosts(data);
        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
            return response.json();
        }).then((usrs)=>{
            // journals
            for (let z = 0; z < pst.length; z++) {
                if (pst[z].content_type == 'author_journal' || pst[z].content_type == 'usr_aut_book' || pst[z].content_type == 'admin_aut_journal' || pst[z].content_type == 'journal') {
                    if (pst[z].type == 'Author') {
                        all_scr.jrn[all_scr.jrn.length] = {journal: pst[z], likes: pst[z].likedBy, comments: pst[z].comments, reads: pst[z].reads, j_scre: 0, type: pst[z].content_type};
                    }else {
                        for (let x = 0; x < usrs.length; x++) {
                            if (usrs[x]._id == pst[z].user) {
                                all_scr.jrn[all_scr.jrn.length] = {journal: pst[z], user: usrs[x], likes: pst[z].likedBy, comments: pst[z].comments, reads: pst[z].reads, j_scre: 0, type: pst[z].content_type};
                            }
                        }
                    }
                }
                // str && thr
                if (pst[z].content_type == 'string') {
                    all_scr.str[all_scr.str.length] = {string: pst[z]._id, content: pst[z], type: pst[z].type, ties: []};
                }
            }
            // pass threads/ties
            for (let h = 0; h < all_scr.str.length; h++) {
                for (let p = 0; p < pst.length; p++) {
                    if (pst[p].content_type == 'thread' && pst[p].tied_to == all_scr.str[h].string) {
                        all_scr.str[h].ties[all_scr.str[h].ties.length] = {thread: pst[p]._id, content: pst[p]};
                    }
                }
            }
            // threads only
            for (let p = 0; p < pst.length; p++) {
                if (pst[p].content_type == 'thread') {
                    all_scr.thr[all_scr.thr.length] = {thread: pst[p], likes: pst[p].likedBy, comments: pst[p].comments};
                }
            }
            // author heirarchy
            for (let m = 0; m < usrs.length; m++) {
                if (usrs[m].user_type !== "user") {
                    if (usrs[m].user_type.status == "on") {
                        all_scr.aut[all_scr.aut.length] = {author: usrs[m], content: []};
                    }
                }
            }
            for (let m = 0; m < all_scr.aut.length; m++) {
                for (let i = 0; i < pst.length; i++) {
                    if (pst[i].content_type == 'author_journal' || pst[i].content_type == 'usr_aut_book') {
                        if (all_scr.aut[m].author._id == pst[i].user) {
                            all_scr.aut[m].content[all_scr.aut[m].content.length] = {journal: pst[i], user: all_scr.aut[m].author, likes: pst[i].likedBy, comments: pst[i].comments, reads: pst[i].reads, j_scre: 0, type: pst[i].content_type};;
                        }
                    }
                }
            }
            evaluate();
        });
    });
}


// evaluate scores
var evaluate = () => {
    /* set str scr
    for (let j = 0; j < all_scr.str.length; j++) {
        for (let m = 0; m < all_scr.str[j].ties.length; m++) {
            tt_scr.str_scr[tt_scr.str_scr.length] = all_scr.str[j].ties[j];
        }
    }
    var jrn_scr = 0;
    for (let n = 0; n < all_scr.jrn.length; n++) {
        for (let v = 0; v < all_scr.jrn[n].likes.length; v++) {
            tt_scr.jrn.likes[tt_scr.jrn.likes.length] = all_scr.jrn[n].likes[v];
        }
        for (let v = 0; v < all_scr.jrn[n].comments.length; v++) {
            tt_scr.jrn.comments[tt_scr.jrn.comments.length] = all_scr.jrn[n].comments[v];
        }
        for (let v = 0; v < all_scr.jrn[n].reads.length; v++) {
            tt_scr.jrn.reads[tt_scr.jrn.reads.length] = all_scr.jrn[n].reads[v];
        }
        tt_scr.jrn.score += all_scr.jrn[n].likes.length+all_scr.jrn[n].comments.length+all_scr.jrn[n].reads.length;
    }*/
    showO = {
        str_r: [], thr_r: [],
        books_r: {book_rd: [], book_r_asc: [], book_r_lkd: []}, 
        jrn_r: {jrn_r_asc: [], jrn_r_lkd: [], jrn_r_cmt: [], jrn_r_rd: []}, 
        aut_asc: []
    }
    var tps = new Array();
    tps = ["str_r", "thr_r", "book_r", "book_r_asc", "book_r_lkd", "genJrn_r_asc", "genJrn_r_lkd", "genJrn_r_cmt", "genJrn_r_rd", "aut_asc"];
    for (let o = 0; o < tps.length; o++) {
        var mainT = {act: tps[o], streak: tp.streak};
        optimize(mainT);
    }
};
// get specific
const getSpecO = (info) => {
    setO();
    var targetDate = new Date();
    targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
            //optimize(tp);
            var mainT = {act: info.act, streak: info.streak};
            optimize(mainT);
            clearInterval(x);
        }
    }, 1000);
}

var showO = {
    str_r: [], thr_r: [],
    books_r: {book_rd: [], book_r_asc: [], book_r_lkd: []}, 
    jrn_r: {jrn_r_asc: [], jrn_r_lkd: [], jrn_r_cmt: [], jrn_r_rd: []}, 
    aut_asc: []
}
const optimize = (tp) => {
    // for journals
            const day = '';
            var dist = 0;
            if (tp.streak == "recent") {
                dist = 150;
            } 
            if (tp.streak == "today") {
                dist = 1;
            }
            if (tp.streak == "all") {
                dist = 0;
            }
            // trending string + threads
            // -----
            // most tied strings
            if (tp.act == 'str_r') {
                // for str
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].thr.length > 0) {
                            lenAll[lenAll.length] = ssc[i].thr.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].thr.length) {
                                showO.str_r[showO.str_r.length] = {content: ssc[m].str, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    //console.log(`day: ${nwD.getDate()}, month: ${mnths[nwD.getMonth()]}, year: ${nwD.getFullYear()}`);
                    // find if assigned alrdy
                    var flag = "n";
                    for (let m = 0; m < all_scr.str.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (ssc[i].str._id == all_scr.str[m].string) {
                                flag = 'y';
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.str.length; i++) {
                        if (flag == 'n') {
                            ssc[ssc.length] = {str:  all_scr.str[i].content, thr: []};
                        }
                        for (let m = 0; m < all_scr.str[i].ties.length; m++) {
                            if (all_scr.str[i].ties[m].content.tied_to == all_scr.str[i].content._id) {
                                if (all_scr.str[i].ties[m].content.date[0] == nDate.year && all_scr.str[i].ties[m].content.date[1] == nDate.day && all_scr.str[i].ties[m].content.date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].str._id == all_scr.str[i].content._id) {
                                            ssc[b].thr[ssc[b].thr.length] = all_scr.str[i].ties[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt()
            };
            // most asc thrs
            if (tp.act == 'thr_r') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].asc.length > 0) {
                            lenAll[lenAll.length] = ssc[i].asc.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 3) {
                        len = 3;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].asc.length) {
                                showO.thr_r[showO.thr_r.length] = {content: ssc[m].thr, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.thr.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (ssc[i].thr._id == all_scr.thr[m].thread._id) {
                                flag = 'y';
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.thr.length; i++) {
                        if (flag == 'n') {
                            ssc[ssc.length] = {thr: all_scr.thr[i].thread, asc: []};
                        }
                        for (let m = 0; m < all_scr.thr[i].likes.length; m++) {
                            //if (all_scr.thr[i].likes[m].date[0] == nDate.year && all_scr.thr[i].likes[m].date[1] == nDate.day && all_scr.thr[i].likes[m].date[2] == nDate.month) {
                                for (let b = 0; b < ssc.length; b++) {
                                    if (ssc[b].thr._id == all_scr.thr[i].thread._id) {
                                        ssc[b].asc[ssc[b].asc.length] = all_scr.thr[i].likes[m];
                                    }
                                }
                            //}
                        }
                        for (let m = 0; m < all_scr.thr[i].comments.length; m++) {
                            //if (all_scr.thr[i].comments[m].date[0] == nDate.year && all_scr.thr[i].comments[m].date[1] == nDate.day && all_scr.thr[i].comments[m].date[2] == nDate.month) {
                                for (let b = 0; b < ssc.length; b++) {
                                    if (ssc[b].thr._id == all_scr.thr[i].thread._id) {
                                        ssc[b].asc[ssc[b].asc.length] = all_scr.thr[i].comments[m];
                                    }
                                }
                            //}
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }

            // books
            // -----
            // most read
            if (tp.act == 'book_r') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].reads.length > 0) {
                            lenAll[lenAll.length] = ssc[i].reads.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].reads.length) {
                                showO.books_r.book_rd[showO.books_r.book_rd.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for reads - reads
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, reads: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].reads.length; m++) {
                                if (all_scr.jrn[i].reads[m].date[0] == nDate.year && all_scr.jrn[i].reads[m].date[1] == nDate.day && all_scr.jrn[i].reads[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].reads[ssc[b].reads.length] = all_scr.jrn[i].reads[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // most asc
            if (tp.act == 'book_r_asc') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].asc.length > 0) {
                            lenAll[lenAll.length] = ssc[i].asc.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].asc.length) {
                                showO.books_r.book_r_asc[showO.books_r.book_r_asc.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for books - asc
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, asc: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].reads.length; m++) {
                                if (all_scr.jrn[i].reads[m].date[0] == nDate.year && all_scr.jrn[i].reads[m].date[1] == nDate.day && all_scr.jrn[i].reads[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].reads[m];
                                        }
                                    }
                                }
                            }
                            for (let m = 0; m < all_scr.jrn[i].likes.length; m++) {
                                if (all_scr.jrn[i].likes[m].date[0] == nDate.year && all_scr.jrn[i].likes[m].date[1] == nDate.day && all_scr.jrn[i].likes[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].likes[m];
                                        }
                                    }
                                }
                            }
                            for (let m = 0; m < all_scr.jrn[i].comments.length; m++) {
                                if (all_scr.jrn[i].comments[m].date[0] == nDate.year && all_scr.jrn[i].comments[m].date[1] == nDate.day && all_scr.jrn[i].comments[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].comments[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // most liked
            if (tp.act == 'book_r_lkd') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].lks.length > 0) {
                            lenAll[lenAll.length] = ssc[i].lks.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].lks.length) {
                                showO.books_r.book_r_lkd[showO.books_r.book_r_lkd.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for books - lks
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, lks: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].likes.length; m++) {
                                if (all_scr.jrn[i].likes[m].date[0] == nDate.year && all_scr.jrn[i].likes[m].date[1] == nDate.day && all_scr.jrn[i].likes[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].lks[ssc[b].lks.length] = all_scr.jrn[i].likes[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // books + journals
            // -----
            // most asc
            if (tp.act == 'genJrn_r_asc') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].asc.length > 0) {
                            lenAll[lenAll.length] = ssc[i].asc.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 3) {
                        len = 3;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].asc.length) {
                                showO.jrn_r.jrn_r_asc[showO.jrn_r.jrn_r_asc.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for books - asc
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book" || all_scr.jrn[m].type == "author_journal" || all_scr.jrn[m].type == "admin_aut_journal" || all_scr.jrn[m].type == "journal") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book" || all_scr.jrn[i].type == "author_journal" || all_scr.jrn[i].type == "admin_aut_journal" || all_scr.jrn[i].type == "journal") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, asc: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].reads.length; m++) {
                                if (all_scr.jrn[i].reads[m].date[0] == nDate.year && all_scr.jrn[i].reads[m].date[1] == nDate.day && all_scr.jrn[i].reads[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].reads[m];
                                        }
                                    }
                                }
                            }
                            for (let m = 0; m < all_scr.jrn[i].likes.length; m++) {
                                if (all_scr.jrn[i].likes[m].date[0] == nDate.year && all_scr.jrn[i].likes[m].date[1] == nDate.day && all_scr.jrn[i].likes[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].likes[m];
                                        }
                                    }
                                }
                            }
                            for (let m = 0; m < all_scr.jrn[i].comments.length; m++) {
                                if (all_scr.jrn[i].comments[m].date[0] == nDate.year && all_scr.jrn[i].comments[m].date[1] == nDate.day && all_scr.jrn[i].comments[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.jrn[i].comments[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // most liked
            if (tp.act == 'genJrn_r_lkd') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].lks.length > 0) {
                            lenAll[lenAll.length] = ssc[i].lks.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 3) {
                        len = 3;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].lks.length) {
                                showO.jrn_r.jrn_r_lkd[showO.jrn_r.jrn_r_lkd.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for books - lks
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book" || all_scr.jrn[m].type == "author_journal" || all_scr.jrn[m].type == "admin_aut_journal" || all_scr.jrn[m].type == "journal") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book" || all_scr.jrn[i].type == "author_journal" || all_scr.jrn[i].type == "admin_aut_journal" || all_scr.jrn[i].type == "journal") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, lks: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].likes.length; m++) {
                                if (all_scr.jrn[i].likes[m].date[0] == nDate.year && all_scr.jrn[i].likes[m].date[1] == nDate.day && all_scr.jrn[i].likes[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].lks[ssc[b].lks.length] = all_scr.jrn[i].likes[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // most cmnt
            if (tp.act == 'genJrn_r_cmt') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].cmt.length > 0) {
                            lenAll[lenAll.length] = ssc[i].cmt.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 3) {
                        len = 3;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].cmt.length) {
                                showO.jrn_r.jrn_r_cmt[showO.jrn_r.jrn_r_cmt.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for books - lks
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book" || all_scr.jrn[m].type == "author_journal" || all_scr.jrn[m].type == "admin_aut_journal" || all_scr.jrn[m].type == "journal") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book" || all_scr.jrn[i].type == "author_journal" || all_scr.jrn[i].type == "admin_aut_journal" || all_scr.jrn[i].type == "journal") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, cmt: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].comments.length; m++) {
                                if (all_scr.jrn[i].comments[m].date[0] == nDate.year && all_scr.jrn[i].comments[m].date[1] == nDate.day && all_scr.jrn[i].comments[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].cmt[ssc[b].cmt.length] = all_scr.jrn[i].comments[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // most read
            if (tp.act == 'genJrn_r_rd') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].reads.length > 0) {
                            lenAll[lenAll.length] = ssc[i].reads.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].reads.length) {
                                showO.jrn_r.jrn_r_rd[showO.jrn_r.jrn_r_rd.length] = {content: ssc[m].jrn, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for reads - reads
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (all_scr.jrn[m].type == "usr_aut_book" || all_scr.jrn[m].type == "author_journal" || all_scr.jrn[m].type == "admin_aut_journal" || all_scr.jrn[m].type == "journal") {
                                if (ssc[i].jrn._id == all_scr.jrn[m].journal._id) {
                                    flag = 'y';
                                }
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.jrn.length; i++) {
                        if (all_scr.jrn[i].type == "usr_aut_book" || all_scr.jrn[i].type == "author_journal" || all_scr.jrn[i].type == "admin_aut_journal" || all_scr.jrn[i].type == "journal") {
                            if (flag == 'n') {
                                ssc[ssc.length] = {jrn:  all_scr.jrn[i].journal, reads: []};
                            }
                            for (let m = 0; m < all_scr.jrn[i].reads.length; m++) {
                                if (all_scr.jrn[i].reads[m].date[0] == nDate.year && all_scr.jrn[i].reads[m].date[1] == nDate.day && all_scr.jrn[i].reads[m].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].jrn._id == all_scr.jrn[i].journal._id) {
                                            ssc[b].reads[ssc[b].reads.length] = all_scr.jrn[i].reads[m];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
            // authors
            // -----
            // most asc
            if (tp.act == 'aut_asc') {
                var ssc = new Array(); var psh = new Array();
                var lenAll = [];
                const bottomEvl = () => {
                    for (let i = 0; i < ssc.length; i++) {
                        if (ssc[i].asc.length > 0) {
                            lenAll[lenAll.length] = ssc[i].asc.length;
                        }
                    }
                    lenAll.sort();
                    lenAll.reverse();
                    var len = 0;
                    if (lenAll.length > 10) {
                        len = 10;
                    } else {
                        len = lenAll.length;
                    }
                    for (let i = 0; i < len; i++) {
                        for (let m = 0; m < ssc.length; m++) {
                            if (lenAll[i] == ssc[m].asc.length) {
                                showO.aut_asc[showO.aut_asc.length] = {author: ssc[m].aut, points: lenAll[i]};
                                ssc.splice(m, 1);
                                break;
                            }
                        }
                    }
                }
                // for asc
                const strtIt = () => {
                    var nwD = new Date();
                    nwD.setDate(nwD.getDate()-dist);
                    var nDate = {day: nwD.getDate(), month: mnths[nwD.getMonth()], year: nwD.getFullYear()}
                    var flag = "n";
                    for (let m = 0; m < all_scr.aut.length; m++) {
                        for (let i = 0; i < ssc.length; i++) {
                            if (ssc[i].aut._id == all_scr.aut[m].author._id) {
                                flag = 'y';
                            }
                        }
                    }
                    for (let i = 0; i <  all_scr.aut.length; i++) {
                        if (flag == 'n') {
                            ssc[ssc.length] = {aut:  all_scr.aut[i].author, asc: []};
                        }
                        for (let p = 0; p < all_scr.aut[i].content.length; p++) {
                            for (let z = 0; z < all_scr.aut[i].content[p].reads.length; z++) {
                                if (all_scr.aut[i].content[p].reads[z].date[0] == nDate.year &&all_scr.aut[i].content[p].reads[z].date[1] == nDate.day && all_scr.aut[i].content[p].reads[z].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].aut._id == all_scr.aut[i].author._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.aut[i].content[p].reads[z];
                                        }
                                    }
                                }
                            }
                        }
                        for (let p = 0; p < all_scr.aut[i].content.length; p++) {
                            for (let z = 0; z < all_scr.aut[i].content[p].likes.length; z++) {
                                if (all_scr.aut[i].content[p].likes[z].date[0] == nDate.year &&all_scr.aut[i].content[p].likes[z].date[1] == nDate.day && all_scr.aut[i].content[p].likes[z].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].aut._id == all_scr.aut[i].author._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.aut[i].content[p].likes[z];
                                        }
                                    }
                                }
                            }
                        }
                        for (let p = 0; p < all_scr.aut[i].content.length; p++) {
                            for (let z = 0; z < all_scr.aut[i].content[p].comments.length; z++) {
                                if (all_scr.aut[i].content[p].comments[z].date[0] == nDate.year &&all_scr.aut[i].content[p].comments[z].date[1] == nDate.day && all_scr.aut[i].content[p].comments[z].date[2] == nDate.month) {
                                    for (let b = 0; b < ssc.length; b++) {
                                        if (ssc[b].aut._id == all_scr.aut[i].author._id) {
                                            ssc[b].asc[ssc[b].asc.length] = all_scr.aut[i].content[p].comments[z];
                                        }
                                    }
                                }
                            }
                        }
                    }
                    dist = dist-1;
                    var m1 = -1;
                    if (dist > m1) {
                        strtIt();
                    }else {
                        bottomEvl();
                    }
                };
                strtIt();
            }
}

/* var display these on end
    if (sttc.media_flow[p].plays[y].date[0] == year && sttc.media_flow[p].plays[y].date[2] == month && sttc.media_flow[p].plays[y].date[1] == day) {
                                                                audioMediaTdy[f].plays[audioMediaTdy[f].plays.length] = sttc.media_flow[p].plays[y];
                                                            }
var dispOs = {g_str: [], j_lk: []};
var j_lk = new Array();
const optimize = (tp) => {
    fetch('/post/getPosts', { method: 'get'}).then((response)=>{
        return response.json();
    }).then((pst)=>{
        // displayPosts(data);
        fetch(`/getUsers`, { method: 'get' }).then((response)=>{
            return response.json();
        }).then((usrs)=>{
            
            // trending string
            if (tp.act == 'str') {
                var ssc = new Array();
                for (let i = 0; i <  all_scr.str.length; i++) {
                    ssc[ssc.length] = {str:  all_scr.str[i].str, thr: all_scr.str[i].ties.length};
                }
                var lenAll = [];
                for (let i = 0; i < ssc.length; i++) {
                    if (ssc[i].thr !== 0) {
                        if (lenAll.length < 1) {
                            lenAll[0] = ssc[i].thr;
                        }else {
                            lenAll[lenAll.length] = ssc[i].thr;
                        }
                    }
                }
                lenAll.sort();
                lenAll.reverse();
                console.log(lenAll);
            };
            // most likes
            if (tp.act == 'lk') {
                console.log('ttl scr: '+tt_scr.jrn.likes.length);
                var nJ = new Array();
                if (tp.streak == 'all') {
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                        if (all_scr.jrn[m].likes.length > 0) {
                            nJ[nJ.length] = all_scr.jrn[m].likes.length;
                        }
                    }
                }
                if (tp.streak == 'td') {
                    for (let m = 0; m < all_scr.jrn.length; m++) {
                       
                    }
                };
                nJ.sort();
                nJ.reverse();
                for (let z = 0; z < nJ.length; z++) {
                    for (let l = 0; l < all_scr.jrn.length; l++) {
                        if (nJ[z] == all_scr.jrn[l].likes.length) {
                            all_scr.jrn[l].likes.splice(l, 1);
                            break;
                        }
                    }
                }
            }
            // most read
            // most
        });
    });

};*/

/**
 * AUTHOR OPT
 */
/*body
const autB =  () => {
    return `
    <div style="width:215px; height: 100%; float: left; margin-left:10px;">
        <div style="height:25px; width:100%;">
        <p style="text-align: center; margin:0px; padding:2px; font-size:20px; color:silver;">1</p>
        </div>
        <div style="height:200px; width:100%;">
        <br>
        <div style="border:solid 2px #404040; border-radius: 5px; width:100px; height: 100px; margin:auto; margin-top:-10px; margin-bottom:5px; background-color:#1a1a1a; background-image: url(img/profb.png); background-size: 100% 100%;"></div>
        <p style="text-align: center; margin: 0px; padding:1px; font-size: 10px;"> <img src="img/authand2.png" width="13px" height="13px" alt=""> </p>
        <p style="text-align: center; margin: 0px; padding:1px; color:silver; font-size: 12px;"> Profie Name </p>
        <p style="text-align: center; margin: 0px; padding:1px; font-size: 10px;"> <span style="color:grey;">@user</span> </p>
        <p style="text-align: center; margin: 0px; padding:1px; font-size: 10px;"> <img src="img/read.png" width="15px" height="15px" alt=""> <span style="color:grey; font-weight: normal;">100K</span> </p>
        </div>
        <div style="height:50px; width:100%;">
        <p style="text-align: center; margin:0px; padding:2px;">
            <button class="btn btn-default btn-xs" style="border:solid 1px #ff8c00; color:darkorange; border-radius:5px; background:transparent; font-size:14px;">SUBSCRIBE <img src="img/sub.png" width="16.5px" height="14px" alt=""> </button>
        </p>
        </div>
    </div>
    `
}*/

const startO = () => {
    setO();
    var targetDate = new Date();
    targetDate.setMilliseconds(targetDate.getMilliseconds() + 1);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
            //optimize(tp);
            clearInterval(x);
        }
    }, 1000);
};
startO();

export {setO, showO, getSpecO};