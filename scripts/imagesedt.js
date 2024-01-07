function Edit() {

    // IMAGE SATURATION AND OPACITY
    //------------------------------
    // for opacity
    $('#cbrit1').click(()=>{
        $('#brit1').css("display","block")
        $('#cbrit1').css("background-color","")
        $('#brit2, #brit3, #brit4, #brit5').css("display","none")
        $('#cbrit2, #cbrit3, #cbrit4, #cbrit5').css("background-color","#1a1a1a")
        $('#posterimage').css('opacity', '0.5');
        $('#filterimage').css('opacity', '0.6');
      });
      $('#cbrit2').click(()=>{
        $('#brit2').css("display","block")
        $('#cbrit2').css("background-color","")
        $('#brit1, #brit3, #brit4, #brit5').css("display","none")
        $('#cbrit1, #cbrit3, #cbrit4, #cbrit5').css("background-color","#1a1a1a")
        $('#posterimage').css('opacity', '0.6');
        $('#filterimage').css('opacity', '0.7');
      });
      $('#cbrit3').click(()=>{
        $('#brit3').css("display","block")
        $('#cbrit3').css("background-color","")
        $('#brit1, #brit2, #brit4, #brit5').css("display","none")
        $('#cbrit1, #cbrit2, #cbrit4, #cbrit5').css("background-color","#1a1a1a")
        $('#posterimage').css('opacity', '0.7');
        $('#filterimage').css('opacity', '0.8');
      });
      $('#cbrit4').click(()=>{
        $('#brit4').css("display","block")
        $('#cbrit4').css("background-color","")
        $('#brit1, #brit2, #brit3, #brit5').css("display","none")
        $('#cbrit1, #cbrit2, #cbrit3, #cbrit5').css("background-color","#1a1a1a")
        $('#posterimage').css('opacity', '0.8');
        $('#filterimage').css('opacity', '0.9');
      });
      $('#cbrit5').click(()=>{
        $('#brit5').css("display","block")
        $('#cbrit5').css("background-color","")
        $('#brit1, #brit2, #brit3, #brit4').css("display","none")
        $('#cbrit1, #cbrit2, #cbrit3, #cbrit4').css("background-color","#1a1a1a")
        $('#posterimage').css('opacity', '0.9');
        $('#filterimage').css('opacity', '1.0');
      });
      /* for saturation
      $('#csat5').click(()=>{
        $('#sat5').css("display","block")
        $('#csat5').css("background-color","")
        $('#sat2, #sat3, #sat4, #sat1').css("display","none")
        $('#csat2, #csat3, #csat4, #csat1').css("background-color","#1a1a1a")
        $('#posterimage').css('filter', 'grayscale(100%)');
        $('#filterimage').css('background-color', '');
    });
    $('#csat4').click(()=>{
        $('#sat4').css("display","block")
        $('#csat4').css("background-color","")
        $('#sat1, #sat3, #sat2, #sat5').css("display","none")
        $('#csat1, #csat3, #csat2, #csat5').css("background-color","#1a1a1a")
        $('#posterimage').css('filter', 'grayscale(75%)');
        $('#filterimage').css('background-color', '');
      });
      $('#csat3').click(()=>{
        $('#sat3').css("display","block")
        $('#csat3').css("background-color","")
        $('#sat1, #sat2, #sat4, #sat5').css("display","none")
        $('#csat1, #csat2, #csat4, #csat5').css("background-color","#1a1a1a")
        $('#posterimage').css('filter', 'grayscale(50%)');
        $('#filterimage').css('background-color', '');
      });
      $('#csat2').click(()=>{
        $('#sat2').css("display","block")
        $('#csat2').css("background-color","")
        $('#sat1, #sat4, #sat3, #sat5').css("display","none")
        $('#csat1, #csat4, #csat3, #csat5').css("background-color","#1a1a1a")
        $('#posterimage').css('filter', 'grayscale(25%)');
        $('#filterimage').css('background-color', '');
      });
      $('#csat1').click(()=>{
        $('#sat1').css("display","block")
        $('#csat1').css("background-color","")
        $('#sat5, #sat2, #sat3, #sat4').css("display","none")
        $('#csat5, #csat2, #csat3, #csat4').css("background-color","#1a1a1a")
        $('#posterimage').css('filter', 'grayscale(0%)');
        $('#filterimage').css('background-color', '');
      });*/

}
Edit();