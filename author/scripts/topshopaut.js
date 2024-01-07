function Start() {
    
    $('#topsGo').click(()=>{
        // efct
        $('#topsGo').removeClass('btn-default');
        $('#topsGo').addClass('btn-info');
        $('#cartsGo').removeClass('btn-info');
        $('#cartsGo').addClass('btn-default');
        // go
        $('#cartBod').css('display', 'none');
        $('#topsBod').fadeIn();
    });

    var cart = $('#currencyType');
    var jhead = $('#topHead');
    var bjsrc = ('#topsrc');
    var bjsrcpg = ('#topsrcpg');
    var bjlctp = ('#locTypeTop');

    // post date application
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours();
    var minute = date.getMinutes();
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

      /**
       * ADDING TOPS
       */
      $('#ClickImgInTop').click(()=>{
        $('#postImageTop').click();
      });
      const getInfo = () => {
        fetch('/adminlogs/sess', {method: "get"}).then((responce) => {
            return responce.json();
        }).then((ses) => {
            fetch('/author/allAuthors', {method: "get"}).then((responce) => {
                return responce.json();
            }).then((data) => {
                var nw = '';
                for (let v = 0; v < data.length; v++) {
                    if (data[v]._id == ses) {
                        nw = data[v];
                    }
                }
                if (nw.first_name == '') {
                    location.replace('/Login');
                }else {
                    pushIt(nw);
                    getExisting(nw);
                }
            });
        });
    }
    getInfo();
    // get tops
    // get existing posts
    const getExisting = (data) => {
        $('.postBOd').remove();
        fetch('/shop/getTops', { method: 'get' }).then((response)=>{ return response.json() }).then((data2)=>{
                if (data2.length>0) {
                $('#checknum-j').css('display', 'none');
                for (let i = 0; i < data2.length; i++) {
                    if (data2[i].type == 'Author') {
                        if (data2[i].user == data.first_name + " " + data.last_name) {
                            displayPost(data2[i], data);   
                        }
                    }
                }
                // for posts data
                var pstTdy = 0; var ttPst = 0; var ttLks = 0; var ttCmt = 0;
                for (let z = 0; z < data2.length; z++) {
                    if (data2[z].type == 'Author') {
                        if (data2[z].user == data.first_name + " " + data.last_name) {
                            ttPst += 1; ttLks += data2[z].likedBy.length; ttCmt += data2[z].comments.length;
                            if (data2[z].date[0] == year && data2[z].date[2] == month && data2[z].date[1] == day) {
                                pstTdy += 1;
                            }
                        }
                    }
                }
                /*$('#pstTdy').text(pstTdy);
                $('#ttPst').text(ttPst);
                $('#ttLks').text(ttLks);
                $('#ttCmt').text(ttCmt);*/
            }
        });
    }
    const pushIt = (udata) => {
        $('#postTop').click(()=>{
            if ($('#topHead').val() !== "") {
              fetch('/post/getHanger', { method: 'get' }).then((res)=>{
                  return res.json();
              }).then((test)=>{
                  if (test > 0 && jhead.val() !== '') {
                      var testar = [];
                      for (let i = 0; i < test; i++) {
                          testar[i] = `imgHangerFltrd-autops${i}`;
                      }
                      var encount = [];
                      for (let i = 0; i < test; i++) {
                          var tter = testar[i];
                          encount[i] = {
                              path: $(`#${tter}`).attr('src'),
                              class: $(`#${tter}`).attr('class')
                          };
                      }
                      if (test != 0) {
                        fetch('/shop/addTops', { 
                            method: 'post',
                            body: JSON.stringify({ type: 'Author', user: udata.first_name + " " + udata.last_name, mail: udata.mail, admin: "Author", source: $(bjsrc).val(), source_page: $(bjsrcpg).val(), location: $(bjlctp).val(), currency: $(cart).val(), heading: $(jhead).val(), price: $('#topPrice').val(), img: encount, vid: '', comments: [], likedBy: [], date: [year, day, month, hour, minute] }),
                            headers : {
                                "Content-type" : "application/json; charset=utf-8"
                                }  
                        }).then((responce)=>{ return responce.json(); }).then((data)=>{
                            if (data) {
                                location.reload();
                            }
                        });
                    }else{
                        alert('Insert images/image to complete post!');
                    }
                  }
              });
          }
        });
    };

}
Start();