 function Globe() {
     
     // checkk
     const getUser = () => {
        fetch('/adminlogs/sess', {method: "get"}).then((responce) => {
           return responce.json();
       }).then((data) => {
           if (data == '') {
               location.replace('/admin-community');
           } else {
               console.log('author loged-in');
           }
       });
   };
   getUser();

 }
 Globe();