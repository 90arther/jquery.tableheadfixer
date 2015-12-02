/*
 * TableHeadFixer
 * https://github.com/90arther/jquery.tableheadfixer
 *
 * Copyright (c) 2015 90arther@gmail.com OR caiweiguo@youmi.net
 * Licensed under the MIT license.
 */


// 业务需求： 当页面往下滚动时，我们的表格会被挡住，我们需要它一直固定在顶部。
// 设计：
// 1、添加浏览器滚屏事件，实时获取已滚动屏幕的长宽
// 2、设置头部相对定位
// 3、头部th标签统一设置top属性为： 已滚动页面高度 减去 表格顶部距离页面顶部的距离
//
//
// @Options:
//      @bgColor: 背景颜色
//      @z-index: z-index值

;(function($) {

    'use strict';

    $.fn.extend({

        tableHeadFixer : function(options) {

            var offset      =  this.offset(),       // 获取表格在页面的位置坐标
                th          =  this.find('th'),     // 获取表头th标签
                delayTimer  =  null,                // 事件节流
                defaults    =  {
                'bgColor'   : '#eee',           // 表头的背景颜色
                'z-index'   : '1'               // 表头的z-index数
            };

            options = $.extend({}, defaults, options);


            // 判断是否存在th标签，如果存在，则进去下一步，否则，输出‘请按照规范写html结构’
            if(th.length === 0) {

                if(!!window.console) {
                    console.log('请按照规范写html结构');
                }

            } else {

                // 添加屏幕滚动事件监听器
                $(window).on('scroll', function() {

                    fixHead();
                    // setFixHeadTimer(0);
                });

            }


            function setFixHeadTimer(direction) {

                if(!delayTimer) {
                    delayTimer = setTimeout(function(){
                        fixHead();
                        delayTimer = null;
                    }, direction);
                }

            }


            function fixHead() {

                var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
                    left = Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);

                th.css({
                    //'position'          : 'relative',
                    //'top'               : (top > offset.top) ? (top - offset.top) : 0,
                    'transform'         : 'translate(0, '+ top +'px)',
                    'background-color'  : options.bgColor,
                    'z-index'           : options['z-index']
                });
            }


        }

    });

})(jQuery);
