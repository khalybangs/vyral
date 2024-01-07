function Extract() {
    
    // extract all with conditions to display depending on cartegory and page
    const getBj = () => {
        fetch('/bjextract/getbjPosts', { method: 'post', body: JSON.stringify({ holding: "General posts" }), headers:{
            "Content-type" : "application/json; charset=utf-8"
            } }).then((response)=>{
            return response.json();
        }).then((data)=>{
            fetch('/axsInfo', { method: 'post', body: JSON.stringify({ axs: "get user info" }), headers: { "Content-type" : "application/json; charset=utf-8" } }).then((response)=>{
                return response.json();
            }).then((dataun)=>{
                if (data) {
                    for (let i = 0; i < data.posts.length; i++) {
                        if (data.posts[i].cartegory === "Sports") {
                            $('#dropbox-spt').prepend(autbodyJourn(data.posts[i])); 
                        }
                        if (data.posts[i].cartegory === "Art") {
                            $('#dropbox-art').prepend(autbodyJourn(data.posts[i])); 
                        }
                        if (data.posts[i].admin === "Author") {
                            $('#dropbox-index').prepend(autbodyJourn(data.posts[i])); 
                        }else {
                            if (dataun.user_name === data.posts[i].user) {
                                $('#dropbox-index').prepend(bodyJourn(data.posts[i])); 
                            }
                        }
                    }
                }
            });
        });
    }
    getBj();

    // post formats
    // -------------------
    // author journ containing body
    const autbodyJourn = (data) => { return `
        <div style="width:100%; background-color:white; border-top:solid 0.3px skyblue;">
            <div style="width:100%; height:30px; border-bottom:solid 1px #f9f9f9;">
                <p style="float:left; margin:5px;"> <img id="" src="img/profb.png" alt="" width="20px" height="20px" style="border-radius:100%;"><span id="">${data.user}</span></p>
                <img src="img/opt.png" alt="" width="10px" height="20px" style="margin:5px; float:right;">
                <i style="float:right; margin:5px; color:silver; font-size:10px;" id=""></i>
            </div>
            <p style="padding:5px; margin:5px;" id="">${data.heading}</p>
            <hr style="margin:5px;">
            <i style="margin:5px; color:skyblue; font-size:10px;">${data.cartegory}</i>
            <div style="width:100%; height:35px; border-bottom:solid 1px #f0f0f0;">
                <img id="" src="img/like.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;">
                <img id="" src="img/comment.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;">
                <img id="" src="img/share.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
                <img id="" src="img/read.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
            </div>
            <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
            <div style="height:20px;">
                <a href="${data.source_page}"> <i style="color:grey; font-size:13px;padding:5px; color:silver;">${data.source}</i> </a>
            </div>
        </div>
        `;
    };

    // user-journ containing body
    const bodyJourn = (data) => {
        return `
        <div style="width:100%; background-color:white; border-top:solid 1px #f0f0f0;">
            <div style="width:100%; height:30px; border-bottom:solid 1px #f9f9f9;">
                <p style="float:left; margin:5px;"> <img id="" src="img/profb.png" alt="" width="20px" height="20px" style="border-radius:100%;"> <a href="${data.user}" style="text-decoration:none; color:skyblue;"><span id="">${data.user}</span></a></p>
                <img src="img/opt.png" alt="" width="10px" height="20px" style="margin:5px; float:right;">
                <i style="float:right; margin:5px; color:silver; font-size:10px;" id="">${data.date}</i>
            </div>
            <p style="padding:5px; margin:5px;" id="">${data.heading}</p>
            <div style="width:100%; height:35px;">
                <img id="" src="img/like.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;">
                <img id="" src="img/comment.png" alt="" width="25px" height="25px" style="margin:5px; cursor:pointer;">
                <img id="" src="img/share.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
                <img id="" src="img/read.png" alt="" width="25px" height="25px" style="margin:5px; float:right; cursor:pointer;">
            </div>
            <div style="width:98%; margin:auto; height:200px; background-color:#f9f9f9; border-radius:5px; padding-bottom:5px; border:solid 1px #f0f0f0; display:none;" id=""></div>
            <div style="height:10px;"></div>
        </div>
        `;
    }

}
Extract();
