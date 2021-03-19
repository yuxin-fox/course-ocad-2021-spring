var seat = $('#seat1');
var seatImg = $('.seat-img');
seat.click(function () {
    console.log("dfd");
    seatImg.animate({
        opacity: 0.9,
        top: '500px',
        left:'150px',
        width: '420px',
        height: '315px',
    }, 3000, function () {
    $(this).css('opacity', '0.0').css('width', '0px').css('height', '0px');
    })
});

function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
    }
    $(document).ready(function(){
        $().UItoTop({ easingType: 'easeOutQuart' });
});
