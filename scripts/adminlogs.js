function AdminLogs() {

    // genad: khaalilbaba@gmail.com, pwd: eedi4993
    // aut: khaalilbaba@gmail.com, pwd: fced7800

    // get current values
    const getCurUsrs = () => {
        //startGets
        //getUsers
        fetch('/getUsers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((users)=>{
            $('#totUsrs').text(users.length);
            var onL = 0;
            for (let x = 0; x < users.length; x++) {
                if (users[x].online == "on") {
                    onL++;
                }
            }
            $('#onlUsrs').text(onL);
        });
        // get Journals
        var jrnUsr = 0; var jrnBgj = 0;
        fetch('/post/getPosts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((jrns)=>{
            for (let x = 0; x < jrns.length; x++) {
                if (jrns[x].type == 'User') {
                    jrnUsr++;
                }          
                if (jrns[x].type == 'Author') {
                    jrnBgj++;
                }
            }
            $('#usrJrns').text(jrnUsr);
            $('#bgjJrns').text(jrnBgj);
        });
        // get strings && threads
        fetch('/strings/getStrings', { method: 'get' }).then((responce)=>{
            return responce.json();  
        }).then((str)=>{
            var pubStr = 0; var prvStr = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i].type == "Private") {
                    prvStr++;
                }else {
                    pubStr++;
                }   
            }
            $('#prvStr').text(prvStr);
            $('#pubStr').text(pubStr); 
            // threads      
            fetch('/strings/getThreads', { method: 'get' }).then((responce)=>{
                return responce.json();  
            }).then((thr)=>{
                $('#ttlThr').text(thr.length);
            });   
        });

    };
    getCurUsrs();
    
    // big journal login functions
    var bjmail = $('#bjemail');
    var bjpwd = $('#bjpwd');
    $('#bjsubmit').click(function() {
        if (bjmail !== "" && bjpwd !== "") {
            fetch('/adminlogs/authorlog', { 
                method: 'post',
                body: JSON.stringify({ mail: $(bjmail).val(), pwd: $(bjpwd).val() }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                  }
             }).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                if (data) {
                    fetch('/yesAuthor', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((data3)=>{
                        if (data3 == 'Yes') {
                            location.replace('/author');
                        }
                      });
                } else {
                    alert('Author not found!');
                }
            })
        } else {
            alert('Insert your login details!');
        }
    });

    // admin center logs
    var acmail = $('#acunme');
    var acpwd = $('#acpwd');
    $('#acsubmit').click(function() {
        if (acmail.val() !== "" && acpwd.val() !== "") {
            fetch('/adminlogs/aclogs', { 
                method: 'post',
                body: JSON.stringify({ mail: $(acmail).val(), pwd: $(acpwd).val() }),
                headers : {
                    "Content-type" : "application/json; charset=utf-8"
                }
            }).then((responce)=>{
                return responce.json();
            }).then((data)=>{
                if (data.cart == 'General Admin' || data.cart == "User Admin") {
                    fetch('/yesAdcenter', { method: 'get' }).then((res)=>{
                        return res.json();
                    }).then((data3)=>{
                        if (data3 == 'Yes') {
                            location.replace('/Gencenter');
                        }
                      });
                } else {
                    alert('Admin not found!');
                }
            })
        } else {
            alert('Insert your login details!');
        }
    });

    // admin community updates
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
    // get updts
    const getUpdtes = () => {
        $('.updts_body').remove();
        fetch('/adminlogs/getUpdts', { method: 'get'}).then((response)=>{
            return response.json();
        }).then((data)=>{
            for (let i = 0; i < data.length; i++) {
                console.log('drop update');
                appndUpdts(data[i]);
            }
        });
    };
    getUpdtes();

    const updtBody = (data, type, ids) => {
        return `
        <div class="updts_body" style="width: 99%; margin:auto; border-bottom: solid 0.6px #f0f0f0;">
            <br style="margin:5px;">
            <div class="" style="width:97.5%; margin: auto; background-color:white; border-radius: 10px; box-shadow: 0px 0px 20px -15px grey;">
                <div style="margin: 5px; width: 100%;"> 
                    <span style="font-size: 12.5px; color: skyblue; float: left; margin: 5px;">${type}</span> 
                    <span style="font-size: 12px; color: silver; float: right; margin: 5px; margin-right: 10px;" id="${ids.dateFlow}"></span> 
                </div>
                <hr style="width: 98%; margin: 5px;">
                <p style="color:#1a1a1a; margin:7px;">${data.heading}</p>
                <img id="${ids.openBod}" src="img/read.png" width="20px" height="20px" style="margin:5px; cursor:pointer;"><br style="5px">
                <div id="${ids.readBod}" style="width:97.5%; height:200px; margin:auto; background-color:#f9f9f9; border-radius:7px; margin-bottom:5px; display:none;">
                    <div style="width:100%; height:170px; overflow-y:auto;">
                        <p class="postBodtxt" style="margin:5px; font-size:13px;">${data.body}</p>
                    </div>
                    <div class="closeRdCon" style="width:100%; height:30px; border-top:solid 1px #f0f0f0; overflow-y:auto;">
                        <p id="${ids.closeRdId}" style="margin:3.5px; text-align:center; cursor:pointer;">
                            <img src="img/up.png" width="20px" height="10px">
                        </p>
                    </div>
                </div>
                <br style="5px">
            </div>
            <br style="margin:5px;">
        </div>
        `
    };

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

    // funcs
    const updtsOprtns = (ids) => {
        // open|close
        $(`#${ids.openBod}`).click(()=>{
            $(`#${ids.readBod}`).slideDown();
        });
        $(`#${ids.closeRdId}`).click(()=>{
            $(`#${ids.readBod}`).slideUp();
        });
    };

    // ids
    const crtUpdtsId = (id) => {
        return {
            dateFlow: `dateFlow_updt_${id}`,
            openBod: `openBod_updt_${id}`,
            readBod: `readBod_updt_${id}`,
            closeRdId: `closeRdId_updt_${id}`,
        }
    };
    //append updts
    const appndUpdts = (data) => {
        const ids = crtUpdtsId(data._id);
        if (data.type == 'Dev') {
            var tpe = ` <img src="img/cc.png" width="15px" height="15px"> Developers & technical admins`;
            $('#drp_updtes').append(updtBody(data, tpe, ids));
        }else {
            var tpe = ` <img src="img/authand.png" width="15px" height="15px"> Authors & content creators`;
            $('#drp_updtes').append(updtBody(data, tpe, ids));
        }
        updtsOprtns(ids);
        smartDate(data, ids.dateFlow);
    };

}
AdminLogs();