function Ads() {

    // date functionalities
    /*
                var targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 30);
                alert(targetDate);
                var dd = targetDate.getDate();
                var mm = targetDate.getMonth()+1; // 0 is January, so we must add 1
                var yyyy = targetDate.getFullYear();

                var dateString = dd + "/" + mm + "/" + yyyy;

                // So you can see the output
                alert(dateString);
    */
    
    // check users length
    const getUsersL = () => {
        fetch('/ads/checkusers', { method: 'get' }).then((responce)=>{
            return responce.json();
        }).then((data)=>{
            if (data.length < 1) {
                $('#openprofad').css('display', 'none');
            }else {
                $('#openprofad').css('display', 'block');
            }
        });
    };
    getUsersL();

}
Ads();