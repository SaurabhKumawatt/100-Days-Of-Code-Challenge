
$(document).ready(function () {
    console.log('I am in a new file now');

    //Your jquery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()

    //clicks on all the p elements.
    // $('p').click(); //click on p
    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });
    // $('p').hover(function () {
    //     console.log('you hoverd on: ', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // },
    // function (){

    //     console.log('Thanks for coming')
    // });


    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector
    // $('#second').click();

    // 3. Class selector - this is an example of id selector
    // $('.odd').click();

    // other selectors
    // $('*').click() // clicks on all the elements
    // $('p.odd').click() // clicks on all the elements
    // $('p:first').click() // clicks on all the elements

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // demoing the on method
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");

            }



        })

    // $('#lorem').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#lorem').show(1000, function () {
    //     console.log("show");
    // })  
    // $('#but').click(function () {
    //     $('#lorem').fadeOut(5000);
    // })

    //     fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional
    // $('#lorem').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#lorem').slideDown(1000)
    // $('#lorem').slideToggle(1000)

    // Animate function in jQuery
    // $('#lorem').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'

    // }, "fast")

    // keyframe
    // $('#lorem').animate({ opacity: 0.3 }, 4000);
    // $('#lorem').animate({ opacity: 0.9 }, 1000);
    // $('#lorem').animate({ width: '350px' }, 12000);

    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#lorem').empty()
    // $('#lorem').text('you are good')
    // $('#lorem').remove()

    //     $('#lorem').addClass('myclass')
    // $('#lorem').addClass('myclass2')
    // $('#lorem').removeClass('myclass2')
    // $('#lorem').css('background-color', 'red')
    // $('#lorem').css('background-color')

    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

});


