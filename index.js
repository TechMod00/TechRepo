const node = $('.ansDiv1');
const node2 = $('.ansDiv2');
const node3 = $('.ansDiv3');

$(".faqbox1").on("click", function () {



    if (node.css('display', 'none')) {

        node.css('display', 'block');
        node2.css('display', 'none');
        node3.css('display', 'none');

    }

});


$('.faqbox2').on("click", function () {


    if(node2.css('display', 'none')){

        node2.css('display', 'block');
        node.css('display', 'none');
        node3.css('display', 'none');

    }
});


$('.faqbox3').on("click", function () {


    if(node3.css('display', 'none')){

        node3.css('display', 'block');
        node2.css('display', 'none');
        node.css('display', 'none');
    }
});

