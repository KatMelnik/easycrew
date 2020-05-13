//Пустой блок портфолио
var portfolioModalBlock = "<div class=\"change-portfolio__item\">\n" +
    "<div class=\"portfolio-block__header\">\n" +
    "<div class=\"drager\">\n" +
    "<div class=\"drager-line\"></div>\n" +
    "<div class=\"drager-line\"></div>\n" +
    "</div>\n" +
    "<span class=\"deleter\">Delete</span>\n" +
    "</div>\n" +
    "<label class=\"add-portfolio__photo\"><input type=\"file\"></label>\n" +
    "<span class=\"delete-portfolio__photo\"></span>\n" +
    "<img class=\"change-portfolio__itemImg\" src=\"img/empty-block.png\" alt=\"title\">\n" +
    "<textarea class=\"change-portfolio__itemText\" name=\"\" id=\"\" rows=\"2\" placeholder='Project name'></textarea>\n" +
    "</div>"
//Поле страны
var newCountry = "<label class=\"input-wrapp country-field\">\n" +
    "                            <div class=\"subscriptionSelect-wrap\">\n" +
    "                                <select class=\"select-subscriptionPlan\" name=\"subscription-plan\">\n" +
    "                                    <optgroup>\n" +
    "                                        <option value=\"r1\"></option>\n" +
    "                                        <option value=\"r2\">Agency plus/option>\n" +
    "                                        <option value=\"r3\">Freelanser</option>\n" +
    "                                        <option value=\"r3\">Freelanser plus</option>\n" +
    "                                        <option value=\"r3\">Emploer</option>\n" +
    "                                        <option value=\"r3\">Tainee</option>\n" +
    "                                    </optgroup>\n" +
    "                                </select>\n" +
    "                                <span class=\"subscription-plan__circle\">▼</span>\n" +
    "                                <span class=\"reset-select__btn coutry-delete\"></span>\n" +
    "                            </div>\n" +
    "                        </label>"

//Поле языка
var newLanguage = "<label class=\"input-wrapp language-field\">\n" +
    "                            <div class=\"subscriptionSelect-wrap\">\n" +
    "                                <select class=\"select-subscriptionPlan\" name=\"subscription-plan\">\n" +
    "                                    <optgroup>\n" +
    "                                        <option value=\"r1\"></option>\n" +
    "                                        <option value=\"r2\">Agency plus/option>\n" +
    "                                        <option value=\"r3\">Freelanser</option>\n" +
    "                                        <option value=\"r3\">Freelanser plus</option>\n" +
    "                                        <option value=\"r3\">Emploer</option>\n" +
    "                                        <option value=\"r3\">Tainee</option>\n" +
    "                                    </optgroup>\n" +
    "                                </select>\n" +
    "                                <span class=\"subscription-plan__circle\">▼</span>\n" +
    "                                <span class=\"reset-select__btn language-delete\"></span>\n" +
    "                            </div>\n" +
    "                        </label>";
    
var newPostLanguage = "<div class=\"d-flex align-items-center\">\n" +
   "                            <select  id=\"lang1\" class=\"post-project__main-block__lang w-100\">\n" +
   "                                <option>Estonian</option>\n" +
   "                                <option>English</option>\n" +
   "                                <option selected>Russian</option>\n" +
   "                            </select>  \n" +
   "                            <span class=\"post-project__main-block__lang-close\"></span>  \n" +
   "                        </div>";



//Открытие модального окна
function openModal(cl){
    $('.' + cl).removeClass('modal-close');
}
$(function () {
    $('.project-item__commentBtnDecline').click(function () {
        $('.decline-application-modal').removeClass('modal-close');
    });
    $('.project-item__commentBtnAccept').click(function () {
        $('.accept-application-modal').removeClass('modal-close');
    });
});
//Переход по ссылке
function goLink(link){
    location.href = link;
}
//Добавление блока портфолио
function addPortfolioItem(){
    var countItems = document.querySelectorAll('.change-portfolio__itemCenter .change-portfolio__item');
    if(countItems.length < 8){
        $( ".change-portfolio__itemCenter" ).append( portfolioModalBlock );
        $(".deleter").click(function () {
            $(this).parent().parent().detach();
        });
        $(".delete-portfolio__photo").click(function () {
            $(this).parent().children('.change-portfolio__itemImg').attr("src","img/empty-block.png");
        });
    } else {
        alert('We are sorry! You have reached maximum number (8) of projects allowed to add.');
    }
}
//движение ползунка
function moveRange() {
    var rng = document.getElementById('formControlRange');
    var p = document.getElementById('RangeValueContainer');
    var filler = document.getElementById('modal-star-filler');
    var fillerWidth = rng.value*22.05 + 'px';
    p.innerHTML = rng.value;
    filler.style.width = fillerWidth;
}


$(function(){
    //Закрытие модального окна
    $(".cancel-btn").click(function () {
        $(this).parent().parent().addClass('modal-close');
    });
    $(".cancel-subsc__btnNo").click(function () {
        $(this).parent().parent().parent().addClass('modal-close');
    });
    $(".cancel-subsc__btnYes").click(function () {
        $(this).parent().parent().parent().addClass('modal-close');
    });
    //удаление блоков портфолио
    $(".deleter").click(function () {
        $(this).parent().parent().detach();
    });
    //удаление скилов
    $(".skill-delete").click(function () {
        $(this).parent().detach();
    });
    //Добавление скилов
    $('.change-skills__wrap input').click(function () {
        var newSkillText = $(this).siblings('span').text();
        var newSkill = "<div class='skill-content'><span class='skills-item-manage'>" + newSkillText + "</span><div class='skill-delete'></div></div>"
        if(this.checked){
            $('.popup-wrap .skills-itemWrap').append(newSkill);
        }
        $(".skill-delete").click(function () {
            $(this).parent().detach();
        });
    });
    //Удаление фото в портфолио
    $(".delete-portfolio__photo").click(function () {
        $(this).parent().children('.change-portfolio__itemImg').attr("src","img/empty-block.png");
    });
    //выбор цвета
    $(".change-portfolio__titleWrap .dropdown-item").click(function () {
        let itemNumber = $(this).index();
        let colorContainer = '';
        switch(itemNumber) {
            case 0: colorContainer = '#90cdefe6';
            break;
            case 1: colorContainer = '#969696';
            break;
            case 2: colorContainer = '#DEDEDE';
            break;
            case 3: colorContainer = '#FFFFFF';
            break;
            case 4: colorContainer = '#75D152';
            break;
            case 5: colorContainer = '#fee847e6';
            break;
            case 6: colorContainer = '#FCBB7E';
            break;
            case 7: colorContainer = '#f2006aa1';
            break;
            case 8: colorContainer = '#773a94b8';
            break;
            default: alert('error');
            break;
        }
        $('.change-portfolio__itemContainer').css('background', colorContainer);
    });
    //сброс полей-абилок
    $('.reset-select__btn').click(function () {
        $(this).parent().children('.select-subscriptionPlan').children().children().each(function() {
            this.selected = false;
        });
    });
    //Разворачивание текста
    $('.unwrap-button').click(function () {
        $(this).parent().addClass('hidden');
        $(this).parent().siblings('.second-part').removeClass('hidden');
    });
    //Сворачивание текста
    $('.wrap-button').click(function () {
        $(this).parent().addClass('hidden');
        $(this).parent().siblings('.first-part').removeClass('hidden');
    });
    //Переключение языков
    $('.about-leng__btn').click(function () {
        $('.about-leng__btn').removeClass('about-leng__btn__active');
        $(this).addClass('about-leng__btn__active');
    });
    //Переключение вопросов
    $('.questions-filter__item').click(function () {
        $('.questions-filter__item').removeClass('filter-active');
        $(this).addClass('filter-active');
    })

    //Выбор языка в выпадающем меню шапки
    $('.wrap-header .dropdown-item').click(function () {
        let num = $(this).index();
        let classFlag = choose(num);
        $('.top-menu-lang-icon').removeClass().addClass('top-menu-lang-icon ' + classFlag);
    });
    //Выбор языка в выпадающем меню телеги
    $('.teleg-nav .dropdown-item').click(function () {
        let lang = $(this).text();
        let num = $(this).index();
        let classFlag = choose(num);
        $('.teleg-nav .menu-leng').text(lang);
        choose(num);
        $('.menu-lang-icon').removeClass().addClass('telegram-lang menu-lang-icon ' + classFlag);
    });
    function choose(num){
        switch(num) {
            case 0: classFlag = 'eng-flag';
                break;
            case 1: classFlag = 'rus-flag';
                break;
            case 2: classFlag = 'est-flag';
                break;
            case 3: classFlag = 'lat-flag';
                break;
            case 4: classFlag = 'lit-flag';
                break;
            case 5: classFlag = 'ger-flag';
                break;
            case 6: classFlag = 'fra-flag';
                break;
            case 7: classFlag = 'fin-flag';
                break;
            case 8: classFlag = 'ita-flag';
                break;
            case 9: classFlag = 'esp-flag';
                break;
        }
        return classFlag;
    }

    //Слайдер работ
    $('.button').click(function () {
       let num = $(this).index();
       let num2 = $(this).parent().children('.button').length;

       $(this).siblings('.button').removeClass('active');
       $(this).addClass('active');
       $(this).parent().parent().parent().siblings('.saved-project-block').addClass('hidden');
       $(this).parent().parent().parent().siblings('.saved-project-block').eq(num).removeClass('hidden');

       if(num == 0){
           $(this).parent().siblings('.page-item__previous').addClass('disabled');
       } else {
           $(this).parent().siblings('.page-item__previous').removeClass('disabled');
       }
       if(num == (num2 - 1)){
           $(this).parent().siblings('.page-item__next').addClass('disabled');
       } else {
           $(this).parent().siblings('.page-item__next').removeClass('disabled');
       }
    });
    $('.page-item__previous').click(function () {
       let num =  $(this).siblings().children('.button.active').index();
       if(num >= 1){
           $(this).siblings().children('.button').eq((num-1)).click();
       }
    });
    $('.page-item__next').click(function () {
        let num =  $(this).siblings().children('.button.active').index();
        if(num <= ($(this).siblings().children('.button').length)){
            $(this).siblings().children('.button').eq((num+1)).click();
        }
    });

    //Слайдер choose plan
    let sectionWidth = $('.choose-planSection').width();
    if(sectionWidth <= 1420 && sectionWidth > 991){
        let visiblePlans = $('.choose-plan__item:not(.hidden)');
        visiblePlans.last().addClass('hidden');
        $('.choose-planWrap').css('justify-content', 'crnter');
    } else if (sectionWidth <= 991) {
        let visiblePlans = $('.choose-plan__item:not(.hidden)');
        visiblePlans.addClass('hidden');
        visiblePlans.first().removeClass('hidden');
    }
    $('.choose-plan__next').click(function () {
        let visiblePlans = $('.choose-plan__item:not(.hidden)');
        let allPlans = $('.choose-plan__item');
        if(allPlans.last().hasClass('hidden')){
            visiblePlans.first().addClass('hidden');
            visiblePlans.last().next().removeClass('hidden');
        }
        if(allPlans.last().hasClass('hidden')){
            $('.choose-plan__next').removeClass('disabled');
        }else {
            $('.choose-plan__next').addClass('disabled');
        }
        if(allPlans.first().hasClass('hidden')){
            $('.choose-plan__previous').removeClass('disabled');
        }else {
            $('.choose-plan__previous').addClass('disabled');
        }
    });
    $('.choose-plan__previous').click(function () {
        let visiblePlans = $('.choose-plan__item:not(.hidden)');
        let allPlans = $('.choose-plan__item');
        if(visiblePlans[0] !== allPlans[0]){
            visiblePlans.first().prev().removeClass('hidden');
            visiblePlans.last().addClass('hidden');
        }
        if(allPlans.last().hasClass('hidden')){
            $('.choose-plan__next').removeClass('disabled');
        }else {
            $('.choose-plan__next').addClass('disabled');
        }
        if(allPlans.first().hasClass('hidden')){
            $('.choose-plan__previous').removeClass('disabled');
        }else {
            $('.choose-plan__previous').addClass('disabled');
        }
    });

    //Удаление, добавление стран в модалке
    $('.coutry-delete').click(function () {
       $(this).parent().parent().detach();
    });
    $('.add-country').click(function () {
        $(this).parent().parent().before(newCountry);
        $('.coutry-delete').click(function () {
            $(this).parent().parent().detach();
        });
    });
    //Удаление, добавление языков в модалке
    //Удаление, добавление языков в модалке
$('.language-delete').click(function () {
   $(this).parent().parent().detach();
});
$('.add-lang').click(function () {
   $(this).parent().before(newLanguage);
   $('.language-delete').click(function () {
       $(this).parent().parent().detach();
   });
});
$('.post-add-lang').click(function () {
   $(this).parent().before(newPostLanguage);
   $('.post-project__main-block__lang-close').click(function () {
       $(this).parent().detach();
   });
});
    //Удаление сердечком freelance'n'agency
    $('.fl-ag.heart').click(function () {
        $(this).parent().parent().parent().parent().detach();
    });
    //Удаление сердечком jobs and projects
    $('.heart').click(function () {
        $(this).parent().parent().parent().detach();
    });
    //Поиск в чате
    $('.chat-searchWrap').on('input', function () {
        let inputed = $(this).val();

        $('.chat-contact__textWrap').each(function () {
            let contName = $(this).children('.chat-contact__name').text();
            let contText = $(this).children('.chat-contact__message').text();
            let checkName = contName.indexOf(inputed);
            let checkText = contText.indexOf(inputed);
            $(this).parent().removeClass('hidden');
            if(checkName && checkText && inputed != ''){
                $(this).parent().addClass('hidden');
            }
        });
    });
    //Панель управления чатом
    $('.chat-contactInfo__headerBtn').click(function () {
       $(this).addClass('hidden');
       $('.chat-contactInfo__btnPan').removeClass('hidden');
    });
    $('.chat-contactInfo__btnPan').children().children().click(function () {
        $('.chat-contactInfo__btnPan').addClass('hidden');
        $('.chat-contactInfo__headerBtn').removeClass('hidden');
    });
    //Отправка сообщений чата
    $('.chat-bodyMessage__btn').click(function () {
       if($('.chat-bodyMessage__input').val().length > 0){
           var messageText = $('.chat-bodyMessage__input').val();
           $('.chat-bodyMessage__input').val('');
           var newMessage = "<div class=\"chat-bodyMessage__meMessageWrap\">\n" +
               "                    <div class=\"chat-bodyMessage__meAvatar\">\n" +
               "                        <img src=\"img/userAvatar.png\" alt=\"title\">\n" +
               "                        <span class=\"chat-contact__status\"></span>\n" +
               "                    </div>\n" +
               "                    <div class=\"chat-contact__messageWrap\">\n" +
               "                        <div class=\"chat-contact__timeWrap\">\n" +
               "                            <div class=\"chat-bodyMessage__meTitle\">Me</div>\n" +
               "                            <div class=\"chat-bodyMessage__meTIme\">1h 32m</div>\n" +
               "                        </div>\n" +
               "                        <div class=\"chat-bodyMessage__meText\">\n" +
               "                            <p>" + messageText + "</p>\n" +
               "                        </div>\n" +
               "                    </div>\n" +
               "                </div>"
           $('.chat-bodyMessage__wrap').prepend(newMessage);
       }
    });
    //Переключение между чатами
    $('.chat-contact__item').click(function () {
        $(this).removeClass('chat-contact__notRead');
        $('.chat-contact__item').removeClass('chat-active');
        $(this).addClass('chat-active');
        $('.chat-bodyMessage__wrap').empty();
        let imgHref = $(this).children().children('img').attr("src");
        let personName = $(this).children().children('.chat-contact__name').text();
        $('.freelanser-avatar').attr("src", imgHref);
        $('.freelanser-name').text(personName);

    });
    //подгрузка отзывов
    $('.ratings-box__loadMore').click(function () {
        let visible = $('.rating-itemWrap:not(.hidden)');
        let num = visible.length-1;
        $(this).siblings('.rating-itemWrap').eq(num+1).removeClass('hidden');
        $(this).siblings('.rating-itemWrap').eq(num+2).removeClass('hidden');
    });
       // ----------------------------------------Разворот спойлера
$('.list-offers__title').click(function () {
   if($(this).parent('.list-offers').hasClass('wrapped')){
       $('.list-offers').children('.list-offers__cont').addClass('open');
       $('.list-offers').removeClass('wrapped').addClass('unwrapped');
   } else if($(this).parent('.list-offers').hasClass('unwrapped')){
       $('.list-offers').children('.list-offers__cont').removeClass('open');
       $('.list-offers').removeClass('unwrapped').addClass('wrapped');
   };
});

    //load more для страницы BLOG
    $('.load-more__btn').click(function () {
            $('.loadMore').children('.blog-post__add').addClass('visible');
    });

    $('.load-btn').click(function () {
            $('.comment-block__add').addClass('visible');
    });
    //------------------------------------------Смена цвета Меню
    $('.filter-menu a').click(function () {
        $('.filter-menu a').removeClass('chosen');
        $(this).addClass('chosen');
    });
    //------------------------------------------Пока блоков при Load more
    $('.load-more__freelancers').click(function () {
        $('.freelancer-block').removeClass('hidden');
        $('.agency-block-wrapper').removeClass('hidden');
        $('.job-block-wrapper').removeClass('hidden');
    });
    //------------------------------------------Скрытие показ мобильного фильтра
    $('.mob-filter-but').click(function () {
        $('.filter').toggleClass('moved-out');
    });
    $('.apply').click(function () {
        $('.filter').toggleClass('moved-out');
    });
    //-------------------------------------------Разворот чекбоксов
    $('.post-project__main-block__main').click(function () {
        if($(this).hasClass('unrolled')){
            var el = $(this).siblings('.post-project__main-block__slills'),
                curHeight = el.height(),
                autoHeight = 0;
            el.height(curHeight).animate({height: autoHeight}, 50);
            $(this).removeClass('unrolled');
        }else{
            var el = $(this).siblings('.post-project__main-block__slills'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({height: autoHeight}, 50);
            $(this).addClass('unrolled');
        }

        // $(this).siblings('.post-project__main-block__slills').toggleClass('collapsed');
    });
    //------------------------------------------Выбор чекбоксов одним
    $('.skills-check').on('change', function () {
        if($(this).prop('checked')){
            $(this).siblings('.post-project__main-block__slills').find('input').prop('checked', true);
        }else if($(this).prop('checked', false)){
            $(this).siblings('.post-project__main-block__slills').find('input').prop('checked', false);
        }
    });
});




// --------------------------------------Slow move to ratings

$(document).ready(function(){
    $(".freelanser-retingWrap").on("click", function(e){
        $('html, body').stop().animate({
            scrollTop: $('.ratings-box').offset().top-100
        }, 777);
        e.preventDefault();
        return false;
    });
});