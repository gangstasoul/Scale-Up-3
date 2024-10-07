$(document).ready(function() {

    document.getElementById('s_book_1').onclick=function(){window.open ('https://www.expressdigibooks.com/reader/read/50', '_blank');};
	document.getElementById('w_book_1').onclick=function(){window.open ('https://www.expressdigibooks.com/reader/read/44', '_blank');};
	// document.getElementById('unit_1-3').onclick=function(){window.open ('https://www.expressdigibooks.com/reader/read/50', '_blank');};
	// document.getElementById('unit_1-4').onclick=function(){window.open ('https://www.expressdigibooks.com/reader/read/50', '_blank');};
	// document.getElementById('unit_1-5').onclick=function(){window.open ('https://www.expressdigibooks.com/reader/read/50', '_blank');};
	// document.getElementById('unit_2-1').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_listen.html';};
	// document.getElementById('unit_2-2').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_listen_and_speak.html';};
	// document.getElementById('unit_2-3').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_watch.html';};
	// document.getElementById('unit_2-4').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak.html';};
	// document.getElementById('unit_2-5').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak_2.html';};
	// document.getElementById('unit_3-1').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_listen.html';};
	// document.getElementById('unit_3-2').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_listen_and_speak.html';};
	// document.getElementById('unit_3-3').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_watch.html';};
	// document.getElementById('unit_3-4').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak.html';};
	// document.getElementById('unit_3-5').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak_2.html';};
	// document.getElementById('unit_4-1').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_listen.html';};
	// document.getElementById('unit_4-2').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_listen_and_speak.html';};
	// document.getElementById('unit_4-3').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_watch.html';};
	// document.getElementById('unit_4-4').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak.html';};
	// document.getElementById('unit_4-5').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak_2.html';};
	// document.getElementById('unit_5-1').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_listen.html';};
	// document.getElementById('unit_5-2').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_listen_and_speak.html';};
	// document.getElementById('unit_5-3').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_watch.html';};
	// document.getElementById('unit_5-4').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak.html';};
	// document.getElementById('unit_5-5').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak_2.html';};
    // document.getElementById('lesson1').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_listen.html';};
    // document.getElementById('lesson2').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_listen_and_speak.html';};
    // document.getElementById('lesson3').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_prepare_to_watch.html';};
	// document.getElementById('lesson4').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak.html';};
	// document.getElementById('lesson5').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_watch_and_speak_2.html';};
	// document.getElementById('lesson6').onclick=function(){window.location.href='./Units_1-8/Unit_6/Unit_6_Reflect.html';};
    // document.getElementById('lesson_7-1').onclick=function(){window.location.href='./Units_1-8/Unit_7/Unit_7_prepare_to_listen.html';};
	// document.getElementById('lesson_7-2').onclick=function(){window.location.href='./Units_1-8/Unit_7/Unit_7_listen_and_speak.html';};
	// document.getElementById('lesson_7-3').onclick=function(){window.location.href='./Units_1-8/Unit_7/Unit_7_prepare_to_watch.html';};
	// document.getElementById('lesson_7-4').onclick=function(){window.location.href='./Units_1-8/Unit_7/Unit_7_watch_and_speak.html';};
	// document.getElementById('lesson_7-5').onclick=function(){window.location.href='./Units_1-8/Unit_7/Unit_7_watch_and_speak_2.html';};
	
	///////////////////////////////////////////////////////////
	
    var baseUrl = window.teacher_base_url || '/teacher';
    var levelUrl = window.teacher_level_url || '/teacher';

    var trashId = 0;

    function pushState(data, title, url) {
        if((document.location.pathname + document.location.search) == url) {
            return;
        }
        window.history.pushState(data, title, url);
    }

    function is_course(){
        return $('.is-course').data('is-course');
    }

    if (is_course()) {
        $('.word-wrapper c2').parent().hover(
            function () {
                $(this).find('c2').css('color', 'white');
            }, function () {
                $(this).find('c2').css('color', 'rgb(0,170,245)');
            });
        if ($('.is-course-test').length){
            init_tests_actions();
        }
    }

    // открываем экзамены в активном блоке
    //$(".teacher-second__lessons__item[data-is-test='2']").filter(".is-disabled").first().removeClass('is-disabled');

    var $view_port = $("#vteacher_viewport");

    if($view_port.hasClass('noscroll') && !$(".teacher-second-exercise").length) {
        $("body").mousewheel(function (event, delta) {
            this.scrollLeft -= (delta * 10);
            event.preventDefault();
        })
    }

    if($view_port.length) {

        // открытый экран пути
        if ($(".teacher-second__themes").children().length && !$('.teacher-second__train .teacher-second__container').children().length) {
            show_content_block("teacher-second__themes");
        }

        // открытый экран упражнения
        if ($('.teacher-second__train .teacher-second__container').children().length > 0) {
            show_content_block("teacher-second__train");
            $('#vteacher-video').show();
            init_first_test();
            scroll_to_top();
            setTimeout(scroll_to_top, 100);
        }
    }

    // кнопка назад
    $(window).on('popstate', function(event) {
        var vars = [], hash;
        var hashes = window.location.search.substr(1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            var kv = hashes[i].split('=', 2);
            vars[kv[0]] = kv[1];
        }

        pause_all_video();

        if(vars['atom'] !== undefined) {
            if(vars['test'] == undefined) {
                return fetch_content({
                    atom: vars['atom'],
                    ajax_action: 'ajax_teacher_get_atom'
                }, null, true);
            } else {
                return fetch_content({
                    atom: vars['atom'],
                    ajax_action: 'ajax_teacher_get_test',
                    test: vars['test']
                }, null, true).always(function() {
                    init_tests_actions();
                });
            }
        }

        if($view_port.hasClass('vteacher_viewport_kids')) {
            $("body").addClass('kids_path');
        }

        show_content_block("teacher-second__themes");
        scroll_to_active_lesson();
    });

    if($('#vteacher_popup').children().length > 0) {
        if(!$('#vteacher_popup').children().first().hasClass('closed_test')){
            $(".teacher-second__themes").show();
        }
        init_popup();
        $(document.body).addClass('popup-open no-overflow');
    }

    function scroll_to_active_lesson() {
        if(!$view_port.hasClass("noscroll") && $(".is-active:visible").length && !$('#vteacher_popup').children().length) {
            $('html, body').animate({
                scrollTop: $(".is-active").offset().top - 105
            }, 500);
        } else {
            scroll_to_top();
        }
    }

    function scroll_to_top() {
        if (is_course() && $(window).width() < 768 && $('.j-test-window').length) {
            $('html, body').animate({
                scrollTop: $('.j-test-window:visible').offset().top
            }, 100);
        } else if (is_course() && $(window).width() < 768 && $('.teacher-second-exercise').length) {
            $('html, body').animate({
                scrollTop: $('.teacher-second-exercise').offset().top
            }, 100);
            setTimeout(function(){
                $('html, body').animate({
                    scrollTop: $('.teacher-second-exercise').offset().top
                }, 100);
            },1000);
        } else {
            $('html, body').animate({
                scrollTop: $view_port.offset().top
            }, 100);
        }
    }

    function volume100andPlay(o) {
        o.volume = 1;
        try {
          o.play();
        } catch (e) {
        }
        return o;
    }

    // if($view_port.length && !$('.authors-courses-page').length) {
       // scroll_to_active_lesson();
       // init_tests_actions();
    // }

    // кнопка логина
    $('.vteacher__header__login a').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        sign_in_popup.show();
    });

    // кнопка регистрации
    $('.vteacher__header__reg a').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        sign_up_popup.show();
    });

    function init_popup() {
        $('#vteacher_popup').children().first().css('transform', 'scale(1)').css('opacity', '1');
        $('#vteacher-video').show();
    }

    function close_popup() {
        $('#vteacher_popup').empty();
        $(document.body).removeClass('popup-open');
        $(document.body).removeClass('no-overflow');
        if (is_course())
            pushState($view_port.data('url'), document.title, '/course'+$view_port.data('url'));
        else
            pushState($view_port.data('url'), document.title, '/teacher'+$view_port.data('url'));
    }

    function pause_all_video(prefix) {
        if(!prefix) prefix = '';
        $(prefix + 'video').each(function(i, e) {
            e.pause();
        });
    }

    var balloon_fast_index = 0;
    var balloon_slow_index = 0;

    $(document).on('click', '.j-popup-close', function(e) {
        if ($(e.target).attr('href')) return;
        e.stopPropagation();
        e.preventDefault();
        close_popup();
    }).on('click', '.j-video-repeat-button', function() {
        volume100andPlay($('.vteacher-atom-video:not(:hidden)')[0]);
        $(this).hide();
    }).on('click', 'body', function(e) {
        if ($(e.target).closest(".vteacher__test-info").length === 0 && ($('#vteacher_popup').html() || "").trim().length !== 0)
            close_popup();
    }).on('click', '.j-open-buy-popup', function() {
        var buy_popup = $('.buy_course_popup_block').html();
        setTimeout(function () {
            open_popup(buy_popup);
        },20);
    }).on('click', '.j-open-bought-popup', function() {
        var bought_popup = $('.bought_course_popup_block').html();
        setTimeout(function () {
            open_popup(bought_popup);
        },20);
    }).on('click', '.j-open-about-popup', function() {
        var about_popup = $('.about_course_popup_block').html();
        setTimeout(function () {
            open_popup(about_popup);
        },20);
    }).on('click', '.j-test-video-repeat-button', function() {
        volume100andPlay($('.vteacher-test-video:not(:hidden)')[0]);
        $(this).hide();
    }).on('click', '.children_vote_teacher_selector', function() {
        $(this).siblings('p').find('input').attr('checked',true);
    }).on('click', '.j-open-atom', function(e) {
        fetch_content({
            atom: $(this).data('atom-id'),
            ajax_action: 'ajax_teacher_get_atom'
        }, e);
    }).on('click', '.direct_link', function(e) {
        fetch_content({
            atom: $(this).data('atom-id'),
            lesson: $(this).data('lesson-id'),
            ajax_action: 'ajax_teacher_get_atom'
        }, e);
    }).on('click', '.j-open-test', function(e) {
        fetch_content({
            atom: $(this).data('atom-id'),
            ajax_action: 'ajax_teacher_get_extern_test'
        }, e);
    }).on('click', '.j-reset-lessons-and-open', function(e) {
        e.preventDefault();
        fetch_popup({
            lessons: $(this).data('lessons'),
            ajax_action: 'ajax_teacher_reset_lessons_and_open',
            level: $(this).data('level')
        }, e);
    }).on('click', '.j-scroll-to-active', function(e) {
        e.preventDefault();
        close_popup();
        scroll_to_active_lesson();
    }).on('click', '.j-prev-atom', function(e) {
        e.preventDefault();
        var atom_id = $(this).closest('.teacher-second-exercise').data('atom-id');
        if ($(this).data('atom-id')) atom_id = $(this).data('atom-id');
        fetch_content({
            atom: atom_id,
            ajax_action: 'ajax_teacher_get_test',
            prev_atom: true
        }, e).always(function () {
            init_tests_actions();
        });
    }).on('click', '.j-back-to-menu', function (e) {
        e.preventDefault();

        window.location.href = '/course' + levelUrl;
    }).on('click', '.j-test-start', function(e) {
        e.preventDefault();
        var atom_id = $(this).closest('.teacher-second-exercise').data('atom-id');
        if ($(this).data('atom-id')) atom_id = $(this).data('atom-id');

        if($(this).data('done')) {
           if (confirm("Вы уверены? Все ответы на задания урока и результаты теста будут сброшены!")) {
                fetch_content({
                    atom: atom_id,
                    clear: true,
                    ajax_action: 'ajax_teacher_get_test'
                }, e).always(function () {
                    init_tests_actions();
                });
            }
        } else {
            fetch_content({
                atom: atom_id,
                ajax_action: 'ajax_teacher_get_test'
            }, e).always(function () {
                init_tests_actions();
            });
        }
    }).on('click', '.j-open-lesson', function(e) {
        e.preventDefault();
        fetch_content({
            lesson: $(this).data('lesson-id'),
            ajax_action: 'ajax_teacher_get_atom'
        }, e);
    }).on('click', '.j-open-first-lesson', function(e) {
        e.preventDefault();
        fetch_content({
            first_knowledge: 1,
            lesson: $(this).data('lesson-id'),
            ajax_action: 'ajax_teacher_get_atom'
        }, e);
    }).on('click', '.j-try-lesson, .teacher-second__lessons__item, .vteacher__step, #teacher-second__exam__button, #go_to_next_lesson', function(e) {

        e.preventDefault();
        e.stopPropagation();

        var lesson = $(this).data('lesson-id');
        if (user.id == 0) {
          show_sign_popup();
          return false;
        }

        if($(this).hasClass('is-passed') && $(this).data('talk')) return;

       

    }).on('click', '.dictionary-item', function(e) {
        e.stopPropagation();

        fetch_vocabulary_balloon($(this), e);
    }).on('click', '.word-wrapper', function(e) {
        if (is_course())
            return;
        e.stopPropagation();
        $parent = $(this).closest('.teacher-second-one-test');
        $academy = $(this).closest('.academy_words');
        if ($parent.length && !$academy.length) {
            if (!$parent.hasClass('finished')) return;
        }
        fetch_translate_balloon($(this), e);
    }).on('click', '.balloon_word_known', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return $.ajax({
            url: baseUrl + levelUrl,
            success: function (res) {
                if (res == 1) {
                    $(".word_known_info").text('Слово помечено, как известное вам!');
                }
            },
            data: {
                ajax_action: 'ajax_teacher_vocabulary_set_word',
                word: $(this).data('word'),
                known: $(this).data('known')
            },
            type: "post",
            dataType: "json"
        })
    }).on('click', '.teacher-second__feedback-atom', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.feedback-form-wrap').removeClass('error success message');
        contact_us_popup.setUrl($view_port.data('url')+'?atom='+$('.teacher-second-exercise').data('atom-id'));
        contact_us_popup.show();
    }).on('click', '.teacher-second__feedback-test', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.feedback-form-wrap').removeClass('error success message');
        contact_us_popup.setUrl($(this).closest('.teacher-second-one-test').data('url'));
        contact_us_popup.show();
    }).on('click','#get_cert',function(e) {
        e.preventDefault();
        return $.ajax( {
            url : baseUrl + levelUrl,
            success : function(res) {
                if(res.status=='add') {
                    $(".vteacher__cert__container").empty().html("Получите ваш сертификат по ссылке: <br><a href='" + res.link + "' target='_blank'>" + res.link + "</a>");
                }
                if(res.status=='old') {
                    $(".vteacher__cert__container").empty().html("Ваш сертификат уже выдан " + res.date + ". <p style='margin-top:10px;'>Он доступен по ссылке: <a href='" + res.link + "' target='_blank'>" + res.link + "</a></p>");
                }
            },
            data : {
                ajax_action: 'ajax_teacher_insert_cert',
                level:  $view_port.data("level"),
                name: $("#username").val()
            },
            type : "post",
            dataType : "json"
        })
    }).on('click', '.j-balloon-play', function(e) {
        e.stopPropagation();

        var audio_length = $(this).find('audio').length - 1;
        var audio = $(this).find('audio').eq(balloon_fast_index);

        if (audio.length == 1 && audio[0].error == null) {
            pause_all_video();
            pause_all_audio_and_play(audio[0]);
        }

        if (audio_length) {
            if (balloon_fast_index < audio_length) {
                balloon_fast_index++;
            }
            else {
                balloon_fast_index = 0;
            }
        }
    }).on('click', '.results-switcher', function(e) {
        if($("#show_right_results").is(":checked")) {
            $(".right-answer").hide();
        }
        else {
            $(".right-answer").show();
        }
    }).on('click', '.j-slowly-play', function(e) {
        e.stopPropagation();
        var audio_length = $(this).find('audio').length - 1;
        var audio = $(this).find('audio').eq(balloon_slow_index);
        if (audio.length == 1 && audio[0].error == null) {
            if(audio.hasClass('slowplay')) { audio[0].playbackRate = 0.5; }
            audio.on('play', function () {
                audio.off('play');
                var d = Math.round(this.duration * 1000);
                $('.j-slowly-text').fadeOut();
                $('.j-snail').animate({width: "101%"}, d, function () {
                    $('.j-snail').find('img').css('right', '100%');
                    $('.j-snail').animate({width: "10%"}, 1000);
                    $('.j-snail').find('img').animate({right: '-30px'}, 1000);
                    $('.j-slowly-text').fadeIn(1500);
                });

            });

            pause_all_video();
            pause_all_audio_and_play(audio[0]);
        }

        if (audio_length) {
            if (balloon_slow_index < audio_length) {
                balloon_slow_index++;
            }
            else {
                balloon_slow_index = 0;
            }
        }

    }).on('click', '.teacher-second__themes__item__header,.teacher-second__themes__item__footer', function(e) {
        e.stopPropagation();
        e.preventDefault();

        if ($(this).parent().data('published') == '2')
            return;

        var $obj_to_modify = $(this).hasClass('teacher-second__themes__item__header') ? $(this).siblings('.teacher-second__themes__item__footer') : $(this);

        $('.teacher-second__themes__item').removeClass('teacher-second__themes__item_opened');
        $('.teacher-second__themes__item__footer').find('span').text('List of lessons');

        if ($(this).siblings('.teacher-second__themes__item__lessons').is(':visible')) {
            $('.teacher-second__themes__item__lessons').slideUp("slow");
            return;
        } else {
            $('.teacher-second__themes__item__lessons').slideUp("slow");
        }

        $(this).closest('.teacher-second__themes__item').addClass('teacher-second__themes__item_opened');
        $obj_to_modify.find('span').text('List of lessons');
        $(this).siblings('.teacher-second__themes__item__lessons').slideDown("slow");
        if ($(window).width() < 480 && is_course()) {
            $('html, body').animate({
                scrollTop: $(this).siblings('.teacher-second__themes__item__lessons').offset().top
            }, 700);
        }

    }).on('click', '.j-answer-placeholder', function(e) {
        var placeholder = $(this).find('.puzzle-dashed');
        if (placeholder.length > 0) {
            $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale');
            placeholder.addClass('puzzle-dashed_anim_scale');
        }
    }).on('input', '.puzzle-input-box', function() {
        translit(this);
    }).on('click', '.j-atom-preview', function(e) {
        $('.j-atom-preview.is-popup-open').removeClass('is-popup-open');
        $mode = getCookie("teacher-preview-board-mode");
        if($mode == undefined) $mode = "video";

        $(".vteacher__exercise__header__progress__popup_board_mode").removeClass("vteacher__exercise__header__progress__popup_board_mode-active");
        $(".vteacher__exercise__header__progress__popup_board_mode[data-type='"+$mode+"']").addClass('vteacher__exercise__header__progress__popup_board_mode-active');

        pause_all_video();
        $(this).addClass('is-popup-open');

        if($mode == 'video') {
            volume100andPlay(
                $(this).find('video')[0]
            );
        }
        e.stopPropagation();
    }).on('click', '.j-play-preview', function(e) {
        e.stopPropagation();
        volume100andPlay(
            $(this).siblings('video')[0]
        );
    }).on('click', '.teacher-second__board_mode', function() {
        $type = $(this).data('type');
        if ($type == 'video') {
            $(".teacher-second-video_text").hide();
            $(".teacher-second-video_container").show();
            $("#vteacher-video").get(0).play();
        }
        else {
            $("#vteacher-video").get(0).pause();
            $(".teacher-second-video_text").show();
            $(".teacher-second-video_container").hide();
        }

        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'teacher-board-mode=' + $type + '; ' + expires + '; path=/';

        if($type == 'text') {
            $.ajax({
                url: baseUrl,
                data: {
                    ajax_action: 'ajax_teacher_log_board_mode'
                },
                type: "post",
                dataType: "json"
            });
        }

        $(this).addClass('teacher-second__board_mode-active');
        $(this).siblings('div').removeClass('teacher-second__board_mode-active');
    }).on('click', '.vteacher__exercise__header__progress__popup_board_mode', function() {
        $type = $(this).data('type');
        if ($type == 'video') {
            $(".vteacher__exercise__header__progress__popup__text").hide();
            $(".vteacher__exercise__header__progress__popup__video").show();
        } else {
            $(".vteacher__exercise__header__progress__popup__text").show();
            $(".vteacher__exercise__header__progress__popup__video").hide();
        }

        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'teacher-preview-board-mode=' + $type + '; ' + expires + '; path=/';

        $(this).addClass('vteacher__exercise__header__progress__popup_board_mode-active');
        $(this).siblings('div').removeClass('vteacher__exercise__header__progress__popup_board_mode-active');
    }).on('click', '.j-listen-all-test', function() {
        play_test_voice($(this).closest('.teacher-second-one-test'));
    }).on('click', function() {
        pause_all_video('.teacher-second-exercise__header__progress__popup ');
        $('.j-atom-preview.is-popup-open').removeClass('is-popup-open');
        $('.j-translate-balloon').remove();
        $(".vteacher__exercise__header__progress__popup__video").each(function(i,e) {
           $(e).find('video').get(0).pause();
        });
    });

    $('.vteacher__header__profile__menu .j-continue a').on('click', function(e) {
        $('.vteacher__step__circle.vteacher__step__active').closest('.vteacher__step').trigger('click');
        e.preventDefault();
    });

    $('.j-show-education-video a').on('click', function(e) {
        e.preventDefault();
        if($('#teach_video_popup').length == 0) {
            $.ajax({
                url: baseUrl + levelUrl,
                success: function (res) {
                    $(document.body).append(res.html);
                },
                data: {
                    ajax_action: 'ajax_teacher_show_education_video'
                },
                type: "post",
                dataType: "json"
            });
        }
    });

    $("#show_cert_popup").click(function(e) {
        e.preventDefault();
        fetch_popup({
            ajax_action: 'ajax_teacher_get_cert_popup'
        }, e);
    });

    function fetch_vocabulary_balloon($text) {

        balloon_fast_index = 0;
        balloon_slow_index = 0;

        $('.j-translate-balloon').remove();
        return $.ajax({
            url : baseUrl + levelUrl,
            success : function(res) {
                if(res=='blocked') {
                    fetch_popup({
                        type: 'balloon_blocked',
                        ajax_action: 'ajax_teacher_closed_content'
                    })
                }
                else if (res.length > 0) {
                    $text.append(res);
                    $('.j-balloon-play').first().trigger('click');
                }
            },
            data : {
                location: location.href,
                ajax_action: 'ajax_teacher_translate_balloon',
                level: $view_port.data('level'),
                word: $text.text(),
                parent_expression:  $text.text(),
                atom: $text.data('atom'),
                text_n: $text.data('text'),
                type: 'vocabulary'
            },
            type : "post",
            dataType : "json"
        });
    }

    function fetch_translate_balloon($text) {
        $('.j-translate-balloon').remove();
        var base_form = $text.data('base');
        var text = $text.text();
        if(!text.match(/[a-z]+/i)) return;

        balloon_fast_index = 0;
        balloon_slow_index = 0;

        return $.ajax({
            url : baseUrl + levelUrl,
            success : function(res) {
                if(res=='blocked') {
                    fetch_popup({
                        type: 'balloon_blocked',
                        ajax_action: 'ajax_teacher_closed_content'
                    })
                }
                else if (res.length > 0) {
                    $text.append(res);
                    $('.j-balloon-play').first().trigger('click');
                }
            },
            data : {
                location: location.href,
                ajax_action: 'ajax_teacher_translate_balloon',
                level: $view_port.data('level'),
                word: text,
                parent_expression: base_form,
                atom: $text.closest('.teacher-second-exercise').data('atom-id'),
                text_n: $text.closest('.board-text').data('n'),
                type: 'translate'
            },
            type : "post",
            dataType : "json"
        });
    }

    function open_popup(html) {
        var was_open = $('#vteacher_popup').children().length > 0;
        $('#vteacher_popup').html(html);
        if(!was_open) {
            setTimeout(function() {
                $('#vteacher_popup').children().first().css('transform', 'scale(1)').css('opacity', '1');
            }, 10);
            setTimeout(function() {
                volume100andPlay($('#sound_popup_open')[0]);
                $('#vteacher-video').show();
            }, 220);
        } else {
            init_popup();
        }
        $(document.body).addClass('popup-open no-overflow');
    }

    function fetch_popup(data, event) {
        var waiting_nodes = null;
        if(event) {
            waiting_nodes = $(event.target).parents().andSelf().filter(function(i, e) {
                return $(e).css('cursor') == 'pointer';
            }).addClass('wait').on('click.waiting', function(e) {e.stopPropagation();e.preventDefault();});
        }
        data.level =  $view_port.data('level');
        data.res_hash = window.RESOURCE_HASH;
        return $.ajax({
            url : baseUrl + levelUrl,
            xhrFields: { withCredentials: true },
            success : function(res) {
                if(res.error) {
                    console.log(res.error);
                    return close_popup();
                }
                if(res.reload && res.url) {
                    document.location.href = res.url;
                    return;
                }
                pushState(data, res.title, res.url);
                open_popup(res.html);
            },
            data : data,
            type : "post",
            dataType : "json"
        }).always(function() {
            if(waiting_nodes != null) {
                waiting_nodes.removeClass('wait').off('click.waiting');
            }
        });
    }

    // скрываем все разделы, кроме одного
    function show_content_block(show_class) {
        $(".teacher-second__content__block").each(function(i,e) {
            if(!$(e).hasClass(show_class)) $(e).hide();
                else $(e).show();
        });
    }

    function fetch_content(data, event, save_history) {
        var waiting_nodes = null;
        if(event) {
            waiting_nodes = $(event.target).parents().andSelf().filter(function(i, e) {
                return $(e).css('cursor') == 'pointer';
            }).addClass('wait').on('click.waiting', function(e) {e.stopPropagation();e.preventDefault();});
        }

        data.res_hash = window.RESOURCE_HASH;
        data.level = $view_port.data('level');

        return $.ajax({
            url : baseUrl + levelUrl,
            success : function(res) {
                if(res.error) {
                    console.log(res.error);
                }
                if(res.reload && res.url) {
                    document.location.href = res.url;
                    return;
                }

                setTimeout(function() {
                    $('#vteacher-video').show();
                }, 220);


                // меняем ли экран на упражнение
                var change_screen = 1;

                if(res.closed) {
                    if(res.closed == "extern_test_blocked" || res.closed == "demo_blocked") {
                        change_screen = 0;
                        close_popup();
                    }
                    fetch_popup({
                        atom: data.atom,
                        type: res.closed,
                        ajax_action: 'ajax_teacher_closed_content'
                    })
                }
                else {
                    close_popup();
                }

                if(change_screen) {
                    $('.teacher-second__container').html(res.html);
                    show_content_block("teacher-second__train");
                    if($view_port.data('viewmode')!='academy') {
                        if (is_course()) {
                            $(".back_to_themes").prop("href", '/course'+$view_port.data('url'));
                        } else
                            $(".back_to_themes").prop("href", '/teacher'+$view_port.data('url'));
                    }
                    scroll_to_top();
                    if (["ajax_teacher_test_completed", "ajax_teacher_get_atom", 'ajax_teacher_get_test'].indexOf(data.ajax_action) !== -1)
                        document.dispatchEvent(new CustomEvent('Teacher.LessonLoaded'));
                }


                $('body').off('mousewheel');
                $('body').removeClass('kids_path');

                if(save_history == undefined) {
                    pushState(data, res.title, res.url);
                }
                init_first_test();

            },
            data : data,
            type : "post",
            dataType : "json"
        }).always(function() {
            if(waiting_nodes != null) {
                waiting_nodes.removeClass('wait').off('click.waiting');
            }
        });
    }

    function play_first_variant(test) {
        var listen_questions = test.find('.teacher-second-exercise__listen-btn');
        if(listen_questions.length == 1) listen_questions.trigger('click')
    }

    function init_first_test() {
        $(".select_sound_img_test .puzzles_source").show();
        var test = $('.teacher-second-one-test:not(.finished)').last();

        if(test.length > 0) {
            if (!test.hasClass('select_sound_test')) {
                test.find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale').first().addClass('puzzle-dashed_anim_scale');
            }
            test.find('audio.question').on('ended', function () {
                $(this).off('ended');
                setTimeout(function () {
                    play_first_variant(test);
                }, 500);
            });

            if(test.data('url').slice(test.data('url').indexOf('?'))!==window.location.search) {
                pushState(test.data('url'), document.title, test.data('url'));
            }
        }

        var bt1 = $('#board_text1'), time1 = parseFloat(bt1.data('show-at')), t1showed = false,
            bt2 = $('#board_text2'), time2 = parseFloat(bt2.data('show-at')), t2showed = false,
            bt3 = $('#board_text3'), time3 = parseFloat(bt3.data('show-at')), t3showed = false,
            bimg = $('#board_image'), timeimg = parseFloat(bimg.data('show-at')), imgshowed = false;
        $('#vteacher-video').on('timeupdate', function() {
            if(!t1showed && time1 < this.currentTime) {bt1.css('visibility', 'visible');t1showed = true;}
            if(!t2showed && time2 < this.currentTime) {bt2.css('visibility', 'visible');t2showed = true;}
            if(!t3showed && time3 < this.currentTime) {bt3.css('visibility', 'visible');t3showed = true;}
            if(!imgshowed && timeimg < this.currentTime) {bimg.css('visibility', 'visible');imgshowed = true;}
        });

        setTimeout(function() {
            var $e = $('.teacher-second-exercise'), eo = $e.offset();
            var $m = test.find('.teacher-second-exercise__view2__main'), mo = $m.offset();

            if ($e.length && $m.length) {
                if(mo.top + $m.height() > eo.top + $e.height()) {
                    var nh = eo.top + $e.height() - mo.top - 20;
                    $m.css('transform', 'scale('+(nh/$m.height())+')');
                }
            }
        }, 600);

        if($(".puzzle-input-box").length) {
            $(".puzzle-input-box:not(:hidden)").removeAttr('disabled').first().focus();
        }

        $('video, audio').each(function(i, o){
            o.volume = 1;
        });
    }

    function pause_all_audio_and_play(audio) {
        $('audio.j-singleton').each(function(i, a) {a.pause();});
        audio.currentTime = 0;
        try {
            volume100andPlay(audio);
        } catch (e) {
            console.log(e);
        }
    }

    function one_test_finished(one_test) {
        one_test.addClass('finished');
        $(".finished .white-round-box__scroll:not(:first)").hide();

        var is_exam = $('.teacher-second-exercise').data('is-exam');

        $errors_count = parseInt(one_test.data('errors'));

        if(one_test.find('audio.j-whole-test').length == 0) {
            one_test.find('.j-listen-all-test').remove();
        }

        var next = one_test.prev(),
            container = one_test.closest('.teacher-second-exercise'),
            atomId = container.data('atom-id');

        var total = parseInt(container.data('tests-total'));
        var count = parseInt(container.data('tests-count')) + 1;
        var errors = parseInt(container.data('tests-errors'));

        container.data('tests-count', count);
        $show_errors = ($(".test-progress_test").length || is_exam);

        if($show_errors) {
            if ($errors_count) {
                errors++;
                container.data('tests-errors', errors);
                $('.test-progress__exam-fail').css('width', (100.0 * errors / total) + '%');
                container.data('failed-tests', container.data('failed-tests') + ',' + one_test.data('test-id'));
                if (!is_exam) {
                    if ($errors_count > 0) $errors_count++;
                    var errors_label = "Со ";
                    if ($errors_count > 2) errors_label = "С";
                    one_test.find('.mark-errors').find('span').text(errors_label + ' ' + $errors_count + ' попытки');
                } else {
                    var errors_label = "ошибок";
                    if ($errors_count == 1) errors_label = "ошибка";
                    if ($errors_count > 1 && $errors_count < 5) errors_label = "ошибки";
                    one_test.find('.mark-errors').find('span').text($errors_count + ' ' + errors_label);
                }
                one_test.find('.mark-errors').addClass('display_inline');
            } else {
                $(".puzzle-figure__wrapper").removeClass('wrong-answer');
                $('.test-progress__exam-success').css('width', (100.0 * (count - errors) / total) + '%');
                one_test.find('.mark-success').addClass('display_inline');
            }
        }

        var q = next.find('audio.question');
        if(q.length == 1 && q[0].error == null) {
            pause_all_audio_and_play(q[0]);
        } else {
            play_first_variant(next);
        }

        volume100andPlay($('#sound_next_test')[0]);



        next.css('opacity', 0).show().animate({
            opacity: 1
        }, 500, function () {
            next.css({marginTop: '', opacity: ''});

            init_first_test();

            if($('.teacher-second-one-test:not(.finished)').length == 0) {
                $('.finished_button').addClass("redesign-button redesign-button_bg-blue")
                    .css({"cursor":"pointer", "margin-top":"30px"})
                    .attr('data-no-trigger', '0' )
                    .append("<span>Продолжить</span>")
                    .bind('click', function () {
                        fetch_content({
                            atom: atomId,
                            ajax_action: 'ajax_teacher_test_completed',
                            failed_tests: container.data('failed-tests'),
                            rank: 1 - parseFloat(container.data('tests-errors')) / parseFloat(container.data('tests-total'))
                        });
                    });

                if (is_course() && $(window).width() < 768 && $('.teacher-second-exercise').length) {
                    $('html, body').animate({
                      scrollTop: $('.teacher-second-exercise').offset().top
                    }, 100);
                }
            }
        });
        scroll_to_top();
    }

    function finish_one_test(test, play_voice) {
        if(test.data('finished')) return;
        test.data('finished', 1);
        var with_errors = test.data('errors');

        $('.teacher-second-exercise').find('.test-progress__item_empty').first()
            .removeClass('test-progress__item_empty').addClass(with_errors ? 'test-progress__item_fail' : 'test-progress__item_success');

        test.find('.puzzles_source').hide();

        if(test.find('.as-one').length != 0) {
            var first = null;
            test.find('.puzzle-figure__wrapper__narrow').each(function(i, p) {
                if(first == null) {
                    first = p;
                } else {
                    $(first).find('.puzzle-figure_narrow').find('.puzzle-text').text($(first).find('.puzzle-figure_narrow').text().trim() + $(p).find('.puzzle-figure_narrow').text().trim());
                    $(p).remove();
                }
            });
        }

        run_usach_animation([2,5,8,9].shuffle().pop());

        if($view_port.hasClass('vteacher_viewport_kids') && !test.hasClass('puzzles_test')) play_voice = false;

        if(play_voice) {
            play_test_voice(test, function() {
                one_test_finished(test);
            });
        } else {
            one_test_finished(test);
        }

    }

    function play_test_voice(test, onEnd) {
        // если есть несколько аудио — играем все, потом вызываем onEnd

        var voice = test.find('audio.j-whole-test:not(.played)').first();

        if($view_port.hasClass('vteacher_viewport_kids')) {
            voice = $("#sound_right_answer:not(.played)");
        }

        if(voice.length > 0) {
            if(voice[0].error == null) {
                test.find('.j-next-test').show();
                voice.on('ended', function() {
                    $(this).addClass('played').off('ended');
                    play_test_voice(test, onEnd);
                });
                pause_all_audio_and_play(voice[0]);
            } else {
                voice.addClass('played');
                play_test_voice(test, onEnd);
            }
        } else {
            test.find('audio.j-whole-test').removeClass('played');
            if(onEnd) onEnd();
        }
    }

    function init_tests_actions() {
        var tests_container = $('.teacher-second-exercise');
        if(tests_container.length == 0) return;

        var is_exam = tests_container.data('is-exam');

        function is_right_answer($a, $b) {
            // если у нас есть массив правильных ответов, то надо смотреть их, учитывая контекст конкретного вопроса
            var context = $b.closest('.teacher-second-test-content');
            if(context.find(".teacher-second-exercise__view2__answer").length) {
                var correct = 0;
                context.find(".teacher-second-exercise__view2__answer").each(function(i,e) {
                    if($a.data('key') == $(e).data('key')) correct = 1;
                });
                return correct;
            }

            return ($a.data('key') == $b.data('key')) ||
                ($a.data('key2') && ($a.data('key2') == $b.data('key2')))
        }

        function get_right_answer($node) {
            if($node.data('right')) return $node.data('right');

            var context = $node.closest('.teacher-second-test-content');
            if(context.find(".teacher-second-exercise__view2__answer").length) {
                return context.find(".teacher-second-exercise__view2__answer").first();
            }
            var ret = $node.data('key').length ? $node.data('key') : $node.data('key2');
            if(!ret) ret = $.trim($node.text());
            return ret;
        }

        function wrong_answer(element, dest) {
            var test = element.closest('.teacher-second-one-test');
            test.attr('data-errors',parseInt($(test).attr('data-errors')) + 1);

            run_usach_animation([3,4,7].shuffle().pop());

            var data  = {
                test_id: test.data("test-id"),
                wrong_answer: element.data('key') ? element.data('key') : $.trim(element.text()),
                right_answer: get_right_answer(dest),
                lesson_id: test.data("lesson"),
                test_name: test.data("name-test"),
                num_test: test.data("url").match(/test=(\d{1,})/)[1]
            };

            set_error(data);

            if(is_exam) {
                element.addClass('wrong-answer');
                is_right_answer(element, dest);
                put_right_answer(element, dest);
            } else {
                volume100andPlay($('#sound_wrong_answer')[0]);
                // анимация для пазла
                if(!element.hasClass('puzzle-figure__wrapper__string')) {
                    var ml = parseInt(element.css('margin-left')), mr = parseInt(element.css('margin-right'));
                    element.addClass('train-wrong-answer');

                    if($view_port.hasClass('vteacher_viewport_kids')) {
                        element.closest('.teacher-kids__speaking_img_wrapper').addClass('wrapper-wrong-answer');
                    }

                    for (var i = 0; i < 14; i++) {
                        setTimeout(function () {
                            var m = (-3 + (i % 3) * 3);
                            element.css('margin-left', ml + m + 'px').css('margin-right', mr - m + 'px');
                            i++;
                        }, i * 30);
                    }
                    i = 0;
                }
                else {
                   // анимация для строки
                   element.animate({ "backgroundColor" : "#eacbcb" }, 400).animate({ "backgroundColor" : "transparent" }, 100);
                }
            }
            // если есть комментарий после неправильного ответа и это авторский курс - показываем его
            if ($(element).closest('.teacher-second-test-content').find('.j-test-hint').children('.course__arrow_box').text().trim().length > 0 && is_course())
                $(element).closest('.teacher-second-test-content').find('.j-test-hint').show(300);
        }

        try{$('.puzzle-figure__wrapper').draggable("destroy");}catch(ex){}
        $('.puzzle-figure__wrapper').draggable({
            revert: function(dropObj) {
                return true;//!dropObj || !is_exam || is_right_answer(dropObj, $(this));
            },
            opacity: 0.7,
            zIndex: 10,
            distance: 10
        }).off('click.teacher').on('click.teacher', function(e) {
            var self = $(this);
            if (self.hasClass("hidden_puzzle") || self.hasClass("teacher-kids__speaking_img")) return;

            // если всего один вариант
            var drop_place = self.closest('.teacher-second-one-test').find('.puzzle-dashed');
            if(drop_place.length != 1) {
                // если есть ответы в фокусе
                drop_place = drop_place.filter('.puzzle-dashed_anim_scale');
            }

            if(drop_place.length == 1) {
                drop_place = drop_place.first();
                logExponeaTeacherTest((is_right_answer(self, drop_place) ? true : false));
                if(is_right_answer(self, drop_place)) {
                    put_right_answer(self, drop_place);
                } else {
                    wrong_answer(self, drop_place);
                }
                // если имеется опциональный комментарий и это авторский курс - показываем его
                if ($(self).find('comm').length > 0 && is_course()) {
                    $(self).closest('.teacher-second-test-content').find('.j-test-hint').show(300).children('.course__arrow_box').text($(self).find('comm').text());
                } /*else { // скрываем подсказки, если они показаны, при правильном ответе
                    console.log($(self).closest('.teacher-second-test-content').find('.j-test-hint:visible').length);
                    if ($(self).closest('.teacher-second-test-content').find('.j-test-hint:visible').length > 0)
                        $(self).closest('.teacher-second-test-content').find('.j-test-hint').hide().children('.course__arrow_box').text('');
                }*/
            }
        });

        function is_test_finished(test) {
            return test.find('.teacher-second-test-content .puzzle-dashed').length == 0 ||
                test.find('.puzzles_source').find('.puzzle-figure__wrapper:not(.hidden)').length == 0;
        }

        function check_test_finished(test) {
            if(is_test_finished(test)) {
                if(!is_course())
                    finish_one_test(test, true);
                else
                    pause_all_video();
                    finish_one_test(test, false);
            }
        }

        function is_course(){
            return $('.is-course').data('is-course');
        }

        function put_right_answer(src, dst) {

            $('.puzzle-figure__wrapper').removeClass('train-wrong-answer');
            $('.teacher-kids__speaking_img_wrapper').remove('wrapper-wrong-answer');

            var test = src.closest('.teacher-second-one-test');

            var voice = test.find('audio:not(.j-whole-test)').filter(function (i, e) {
                return src.data("answer") != null && $(e).data('answer') == src.data("answer");
            });

            if (voice.length == 0) {
                voice = dst.siblings('audio:not(.j-whole-test)');
            }

            if(src.hasClass('puzzle-figure__wrapper__button')) {
                var newPuzzle = src.closest('.line_answer_button').siblings('div').clone().css('position', '').css('opacity', 1);
                src.closest('.line_selector').addClass('hidden');
            }
            else if (src.hasClass('teacher-kids__speaking_img_choose-btn')) {
                var newPuzzle = src.siblings(".teacher-kids__speaking_img");
            }
            else {
                var newPuzzle = src.clone().css('position', '').css('opacity', 1);
            }

            if (newPuzzle.hasClass('white-round-box__line')) {
                newPuzzle.removeClass('white-round-box__line').removeClass('white-round-box__line_options-train').addClass('puzzle-figure__wrapper__success');
            }
            trashId++;
            newPuzzle.data('trash-id', trashId);
            dst.attr('id', 'dst-' + trashId);
            src.attr('id', 'src-' + trashId);

            // в этих трех типах всегда менять на узкие пазлы
            if (test.hasClass('select_text_test') || test.hasClass('puzzles_test') || test.hasClass('puzzles_img_test')) {
                newPuzzle.addClass('puzzle-figure__wrapper__narrow');
                newPuzzle.find('.puzzle-figure').addClass('puzzle-figure_narrow');
            }

            if ($view_port.hasClass('vteacher_viewport_kids')) {
                newPuzzle.attr('style','');
            }

            if (dst.data('original') && is_right_answer(src, dst)) newPuzzle.find('.puzzle-text').html(dst.data('original'));

            newPuzzle.insertBefore(dst);
            test.find('.vteacher__test__trash').append(dst.detach().removeClass('puzzle-dashed_anim_scale'));
            if (!is_exam) {
                src.addClass('hidden').addClass('hidden_puzzle').draggable('destroy');
            }
            else {
                src.addClass('hidden');
            }

            if (test.find('.puzzles_source').length > 1) {
                test.find('.puzzles_source:visible').hide().next('.puzzles_source').show();
                if (!test.find('.puzzles_source:visible').length) {
                    test.find('.puzzles_source:first').closest('.white-round-box__line').hide();
                }
            }

            if (test.hasClass('select_text_test') && test.find('.puzzles_source').length < 2) {
                test.find('.puzzles_source:first').closest('.white-round-box__line').hide();
            }

            if(!is_course()){
                pause_all_video();
            } else if ($(window).width() < 768){
                $(src).hide(3000);
            }

            $(".select_sound_img_test .puzzles_source").hide();

            if($view_port.hasClass('vteacher_viewport_kids')) {
                voice = $("#sound_right_answer");
            }

            if(voice.length == 1 && voice[0].error == null) {
                if(is_test_finished(test)) {
                    test.find('.puzzles_source').hide();
                    test.find('.j-next-test').show();
                }

                // вот она, беда -- если звук не отдается статиком, не срабатывает и событие = нет автоперехода дальше
                // пытался делать проверки на возможность проиграть звук, не получается
                voice.on('ended', function() {
                    $(this).off('ended');
                    check_test_finished(test);
                    init_first_test();
                    $(".select_sound_img_test .puzzles_source").show();
                });

                if(test.hasClass('puzzles_test') && $view_port.hasClass('vteacher_viewport_kids')) {
                    check_test_finished(test);
                    init_first_test();
                } else {
                    pause_all_audio_and_play(voice[0]);
                }
            } else {
                check_test_finished(test);

                init_first_test();
            }
        }

        try{$('.puzzle-dashed').droppable("destroy")}catch(ex){}
        $('.puzzle-dashed').droppable({
            tolerance: 'pointer',
            activate: function(e, ui) {
                $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale');
            },
            deactivate: function(e, ui) {
                $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale').first().addClass('puzzle-dashed_anim_scale');
            },
            out: function(e, ui) {
                $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale');
            },
            over: function(e, ui) {
                $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale');
                $(this).addClass('puzzle-dashed_anim_scale');
            },
            drop: function(event, ui) {
                var self = $(this);
                var test = self.closest('.teacher-second-one-test');
                if(test.hasClass('select_text_test')) {
                    if(!self.hasClass('puzzle-dashed_anim_scale')) return;
                }
                if(ui.draggable.hasClass('hidden')) return;

                logExponeaTeacherTest((is_right_answer(self, ui.draggable) ? true : false));
                if(is_right_answer(self, ui.draggable)) {
               //     run_usach_animation([2,5,8,9].shuffle().pop());
                    put_right_answer(ui.draggable, self);
                } else {
                    wrong_answer(ui.draggable, self);
                }
            }
        });

        if(is_exam) {
            $('.teacher-second-one-test .puzzle_task').off('click.teacher').on('click.teacher', '.puzzle-figure__wrapper', function () {
                if (is_course()){
                  return;
                }
                var id = $(this).data('trash-id');
                var src = $('#src-' + id), dst = $('#dst-' + id);
                var test = dst.closest('.teacher-second-one-test');

                if(id && src.length == 1 && dst.length == 1 && !is_test_finished(test)) {
                    src.removeClass('hidden');
                    dst.detach();
                    $(this).replaceWith(dst);
                    test.find('.puzzle-dashed ').removeClass('puzzle-dashed_anim_scale');
                    dst.addClass('puzzle-dashed_anim_scale');
                    if(src.data('sources-id')) {
                        test.find('.puzzles_source').hide();
                        $('#puzzles_source_' + src.data('sources-id')).show();
                    }
                    if(!is_right_answer(src, dst)) {
                        dst.removeClass('wrong-answer');
                        test.attr('data-errors', parseInt(test.attr('data-errors'))-1);
                    }
                }
            });
        }

        $(document).off('click.teacher',".teacher-second__listen-btn").on('click.teacher', ".teacher-second__listen-btn", function(e) {
            e.stopPropagation();
            if($(this).closest('.white-round-box__line').hasClass('line_selector')) {
                $(".line_answer_button").hide();
                $(this).closest('.white-round-box__line').find(".line_answer_button").show().css('display', 'inline-block');
            }
            focus_textfield();
            var a = $(this).find('audio');
            if (a.length == 1 && a[0].error == null) pause_all_audio_and_play(a[0]);
        });

        $('.select_sound_test .teacher-second-exercise__listen-btn, .listening_test .teacher-second-exercise__listen-btn').off('click.teacher').on('click.teacher', function() {
            if(!$view_port.hasClass('audio-playing')) {
                var a = $(this).find('audio');
                if (a.length == 1 && a[0].error == null) pause_all_audio_and_play(a[0]);

                // переводим фокус
                var related = $(this).parent('div').siblings('div').find('.puzzle-dashed:first');
                if (related.length > 0) {
                    $(this).closest('.teacher-second-one-test').find('.puzzle-dashed').removeClass('puzzle-dashed_anim_scale');
                    related.addClass('puzzle-dashed_anim_scale');
                }
            }
        });


        //$(document).off("click.teacher",".line_answer_button").on('click.teacher',".line_answer_button", function(e) {
            //e.preventDefault();
            //e.stopPropagation();
            //
            //$src = $(this).closest('.line_selector');
            //$context = $src.closest('.puzzles_source');
            //
            //if(is_right_answer($src,$context)) {
            //    put_right_answer($src,$context);
            //} else {
            //    wrong_answer($src,$context);
            //}
      //  });


        // стандартные функции проверки ответов завязаны на draggable, не совсем подходят

        function filter_input_answer(text) {
            return text.toString().trim().toLowerCase().replace(/[:,]/," ").replace(/\s\s+/g, ' ').replace(/[^A-Za-zА-Яа-я0-9-\'\s]+/g,"");
        }

        function is_input_answer_right(input_text,context) {
            var correct = 0;
            if(context.find(".teacher-second-exercise__view2__answer").length) {
                context.find(".teacher-second-exercise__view2__answer").each(function(i,e) {
                    if ($(e).data('key').toString().toLowerCase().trim() == filter_input_answer(input_text).trim()) correct = 1;
                });
            }
            return correct;
        }

        // @overwrite - переписываем ли значение в поле ввода (нужно для указания правильного ответа при двух плохих вводах)
        function right_input_answer(src,overwrite) {

            var $input = src.siblings(".puzzle-input-container").find(".puzzle-input-box");

            if(overwrite !== undefined) {
                $input.prop('disabled',true);
                var $context = $input.closest(".teacher-second-test-content");
                var $answer = $context.find(".teacher-second-exercise__view2__answer").first().data('original');
                $input.val($answer).animate({ "backgroundColor" : "#f4f4f6" }, 500);
                src.hide();
            }

            var test = src.closest('.teacher-second-one-test');
            //     var voice = test.find('audio.whole-test');

            var answer_key = filter_input_answer($input.val());
            var voice = $('.teacher-second-exercise__view2__answer[data-key="'+answer_key+'"]').find('audio');

            test.find(".input_task_history").find("span").text($input.val());
            pause_all_video();

            run_usach_animation([2,5,8,9].shuffle().pop());

            if($view_port.hasClass('vteacher_viewport_kids')) {
                voice = $("#sound_right_answer");
            }

            if(voice.length && voice[0].error == null) {
                if(overwrite !== undefined) {
                    test.find('.j-next-test').data('no-trigger',1).show();
                    voice.on('ended', function () {
                        $(this).off('ended');
                    });
                    $(src).closest('.white-round-box').find('.teacher-second__listen-btn').click(function () {
                        $(this).off('ended');
                        test.find('.j-next-test').data('no-trigger', 1).show();
                    })
                } else {
                    voice.on('ended', function () {
                        $(this).off('ended');
                        finish_one_test(test);
                        init_first_test();
                    });
                }
                pause_all_audio_and_play(voice[0]);
            } else {
                finish_one_test(test);
                init_first_test();
            }
        }


        // количество неправильных вводов ответа, на третий пускаем дальше
        var input_tries = 0;

        function wrong_input_answer(element, context) {

            var test = element.closest('.teacher-second-one-test');
            test.attr('data-errors',parseInt($(test).attr('data-errors')) + 1);

            var $input = $(".puzzle-input-box:not(:hidden)").filter(function(i, e) {
                if($(e).val().length > 0) return $(e);
            });

            var span = context.find('.teacher-second-exercise__view2__answer')[0];

            var data  = {
                wrong_answer: $(".puzzle-input-box:not(:hidden)").val(),
                test_id: test.data("test-id"),
                right_answer: $(span).data('key'),
                lesson_id: test.data("lesson"),
                test_name: test.data("name-test"),
                num_test: test.data("url").match(/test=(\d{1,})/)[1]
            };

            set_error(data);

            run_usach_animation([3,4,7].shuffle().pop());
            if(is_exam) {
                right_input_answer(element,true);
            } else {
                input_tries++;
                if(input_tries < 3) {
                    pause_all_audio_and_play($('#sound_wrong_answer')[0]);
                    $input.animate({ 'borderColor' : 'red' }, 500).animate( {'borderColor' : '#e2e2e2' }, 500);
                }
                else {
                    right_input_answer(element,true);
                    input_tries = 0;
                }
            }
            if ($(element).closest('.teacher-second-test-content').find('.j-test-hint').children('.course__arrow_box').text().trim().length > 0 && is_course())
                $(element).closest('.teacher-second-test-content').find('.j-test-hint').show(300);
        }

        $(".puzzle-answer-button").off('click.teacher').on('click.teacher', function(e) {
            var self = $(this);
            e.preventDefault();
            e.stopPropagation();

            var $input = $(this).siblings(".puzzle-input-container").find(".puzzle-input-box");
            var $context = $input.closest(".teacher-second-test-content");

            if($input.length) {
                logExponeaTeacherTest((is_input_answer_right($input.val(),$context) ? true : false));
                if (is_input_answer_right($input.val(),$context)) {
                    input_tries = 0;
                    right_input_answer(self);
                }
                else {
                    wrong_input_answer(self, $context);
                    $input.focus();
                }
            }
            else {
                $input.focus();
            }
        });

        $('.j-skip-test').off('click.teacher').on('click.teacher', function() {
            finish_one_test($(this).closest('.teacher-second-one-test'));
        });

        $('.j-next-test').off('click.teacher').on('click.teacher', function() {
            $('audio.j-singleton').each(function(i, a) {a.pause();});
            var test = $(this).closest('.teacher-second-one-test');
            if($(this).data('no-trigger')) {
                // в случае показа кнопки, когда в поле вбиты 3 не правильных ответа, не нужно тригать ended, а просто уходить дальше
                finish_one_test(test);
                $(this).data('no-trigger',0)
            }
            else {
                $audio = test.find('audio');
                $audio[0].pause();
                test.find('audio').trigger('ended');
            }
        });

        run_usach_animation(1);

        $(document).off('keydown.teacher').on('keydown.teacher', function(e) {
            // сабмит ответа в форму

            var $input = $(".puzzle-input-box:not(:hidden)").filter(function(i, e) {
                if($(e).val().length > 0) return $(e);
            });

            if($input.length) {
                if (e.keyCode == 13 && $input.val().length) {
                    $input.closest('.puzzle-input-container').siblings('.puzzle-answer-button').trigger('click');
                }
            }
        });

    }

    function set_error(data) {

        $.ajax({
            url: baseUrl,
            data: {
                ajax_action: 'ajax_teacher_set_error',
                test_id: data.test_id,
                lesson_id: data.lesson_id,
                test_name: data.test_name,
                num_test: data.num_test,
                test_content : data.test_content,
                wrong_answer: data.wrong_answer,
                right_answer: data.right_answer
            },
            type: "post",
            dataType: "json"
        });

    }

    var usach_animation_timer;

    function run_usach_animation(frame) {
        clearTimeout(usach_animation_timer);
        try {
            document.getElementById("anim_usach").sendToActionScript(frame);
        }catch (e) {}

        // автоматическая смена анимации на IDLE
        usach_animation_timer = setTimeout(function() {
            run_usach_animation(6);
        }, Math.round(10000 + Math.random()*5000));
    }

    $(document).ajaxError(function(event, request, settings) {
        if (!window.notNeedErrorAjax && (!user || !user.is_admin)) {
            alert($('#ajax_error_message').text().trim());
        }
    });

    // Растягивать прогресс бар в уроке https://basecamp.com/2750619/projects/9285681/todos/196814417
    var headerWidth = $('.teacher-second-exercise__header').width() * 100 / $(window).height();
    var headerLeftWidth = $('.teacher-second-exercise__header__left').width() * 100 / $(window).height();
    var headerRightWidth = headerWidth - headerLeftWidth - 5.2 + 'vh';
    $('.teacher-second-exercise__header__right').css('width', headerRightWidth);
    
    $('.white-round-box__scroll,.teacher-second-video_text').on('mousewheel', function(e){
        $(this).scrollTop($(this).scrollTop()-e.originalEvent.wheelDeltaY);
        //prevent page fom scrolling
        return false;
    });

    function translit(el){
        var space = ' ';
        var text = $(el).val();
        var transl = {
            "а": "f", "б": space, "в": "d", "г": "u", "д": "l", "е": "t", "ё": space, "ж": space,
            "з": "p", "и": "b", "й": "q", "к": "r", "л": "k", "м": "v", "н": "y",
            "о": "j", "п": "g", "р": "h","с": "c", "т": "n", "у": "e", "ф": "a", "х": space,
            "ц": "w", "ч": "x", "ш": "i", "щ": "o","ъ": space, "ы": "s", "ь": "m", "э": "'", "ю": space, "я": "z",
            "А": "F", "Б": ",", "В": "D", "Г": "U", "Д": "L", "Е": "T", "Ё": space, "Ж": space,
            "З": "P", "И": "B", "Й": "Q", "К": "R", "Л": "K", "М": "V", "Н": "Y",
            "О": "J", "П": "G", "Р": "H","С": "C", "Т": "N", "У": "E", "Ф": "A", "Х": space,
            "Ц": "W", "Ч": "X", "Ш": "I", "Щ": "O","Ъ": space, "Ы": "S", "Ь": "M", "Э": "'", "Ю": ",", "Я": "Z",
            " ": " ", "_": space, "`": space, "~": space, "!": "!", "@": space,
            "#": space, "$": space, "%": space, "^": space, "&": space, "*": space,
            "(": space, ")": space,"-": "-", "\=": space, "+": "+", "[": space,
            "]": space, "\\": space, "|": space, "/": "/",".": ".", ",": ",",
            "{": space, "}": space, "\"": space, ";": space, ":": space,
            "?": "?", "<": space, ">": space, "№":space, "'" : "'"
        };

        var result = '';
        var curent_sim = '';

        for(i=0; i < text.length; i++) {
            if(transl[text[i]] != undefined) {
                if(curent_sim != transl[text[i]] || curent_sim != space){
                    result += transl[text[i]];
                    curent_sim = transl[text[i]];
                }
            }
            else {
                result += text[i];
                curent_sim = text[i];
            }
        }

        //  result = result.replace(/^-/, '');
        //   result = result.replace(/-$/, '');
        var start = $(el)[0].selectionStart,
            end = $(el)[0].selectionEnd;

        $(el).val(result);

        $(el)[0].setSelectionRange(start,end);

    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

});

function focus_textfield() {
    if($(".puzzle-input-box:not(:hidden)").length) {
        $(".puzzle-input-box:not(:hidden)").focus();
    }
}

// Открытие и закрытие меню пользователя
$(document).ready(function() {
    $(document).on('mousedown.teacher_menu', function(e) {
        if(e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'a') return;
        p = $('.arrow-dropdown-menu_js');
        if(p.hasClass('is-open')) {
            p.removeClass('is-open');
            $('.arrow-dropdown-menu__container').slideUp(150);
        }
    });

    $('.arrow-dropdown-menu_js').on('mousedown', function(e) {
        if(!$(this).hasClass('is-open')) {
            $(document).trigger('mousedown');
        }
        $(this).toggleClass('is-open');
        $('.arrow-dropdown-menu__container').slideToggle(150);
        e.stopPropagation();
    });
    if ($('pere').length>0) {
        $('.white-round-box').find('.white-round-box__line:first').css({"border-bottom":"0px","padding-bottom":"0px"});
    }
});


