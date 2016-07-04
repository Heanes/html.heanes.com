/**
 * @doc 后台布局js
 * @author Heanes <heanes@163.com>
 */
$(function () {
    var $menuTopUl = $('#menuTopUl');
    var $menuTopList = $menuTopUl.find('li');
    var $menuLeftFamily = $('.menu-left-family');
    $menuTopList.each(function (i, item) {
        $(item).on('click', function () {
            $menuTopList.removeClass('active');
            $menuLeftFamily.removeClass('active');
            $($menuLeftFamily[i]).addClass('active');
            $(this).addClass('active');
        });
    });

    var $menuLeftGroup = $('.menu-left-group');
    var $menuLeftGroupLiList = $menuLeftGroup.find('li');
    $menuLeftGroupLiList.each(function (i, item) {
        if($(item).find('ul.menu-left-group').length > 0){
            $(item).find('.menu-parent').on('click', function () {
                $(item).find('ul.menu-left-group').toggleClass('close');
            });
        }
    });

});