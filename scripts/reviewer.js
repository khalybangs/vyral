function Start() {
    
    const checkMode = () => {
        // light or dark effects
        fetch('/settings/darkOrlight', { method: 'get'}).then((responce)=>{ return responce.json(); }).then((mode) => {
            if (mode == 'light') {
                $('.notiCont').css('background-color', 'white');
                $('.notiCont').css('border', 'solid 1px #f0f0f0');
                $('.notiUNholder').css('border-bottom', 'solid 1px #f0f0f0');
            } else {
                $('.notiCont').css('background-color', '#292929');
                $('.notiCont').css('border', 'solid 1px #404040');
                $('.notiUNholder').css('border-bottom', 'solid 1px #404040');
            }
        });
    };
    checkMode();

}
Start();