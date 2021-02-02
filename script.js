$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

//Bounce function
$(function () {
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function () {
        var i, stop;
        i = 1;
        stop = 6; //num elements
        setInterval(function () {
            if (i > stop) {
                return;
            }
            $('#len' + (i++)).toggleClass('bounce');
        }, 500)
    });
});





const counters = document.querySelectorAll('.counter');
const speed = 50;

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 700) {
            counters.forEach(counter => {
                const updateCounter = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = (count + inc).toFixed(0);
                        setTimeout(updateCounter, 1)
                    }
                    else {
                        count.innerText = target.toFixed(0);
                    }
                }
                updateCounter();
            })
        } else {
            return false;
        }
    });
});



