
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


/////// Mobile Menu JS

var mobileMenuTitle="Menu",MNav;!function(e){"use strict";e(document).ready(function(){e(window).resize(function(n){e(document).width()>1920&&(e(".fa-close").trigger("click"),e(".nav-mobile").removeClass("open"),e("#wrapper").removeClass("open"))}),MNav={initialized:!1,mobMenuFlag:!1,mobileMenuTitle:mobileMenuTitle,init:function(){var e=this;e.initialized||(e.initialized=!0,e.build(),e.events())},build:function(){var n=this;n.createMobileMenu(),e("input, textarea").placeholder()},events:function(){var e=this;e.windowResize()},createMobileMenu:function(n){var i,o=this,a=e("#wrapper"),t=e.browser.mobile?"touchstart":"click";null!==n&&(n=e(window).innerWidth()),1920>=n&&!o.mobMenuFlag&&(e("body").prepend('<nav class="nav-mobile"><h2>'+o.mobileMenuTitle+"</h2><ul></ul></nav>"),e(".nav-mobile > ul").html(e(".mobile-menu").html()),e(".nav-mobile b").remove(),e(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile"),i=e(".nav-mobile"),e("#nav-mobile-btn").bind(t,function(n){n.stopPropagation(),n.preventDefault(),setTimeout(function(){a.addClass("open"),i.addClass("open")},25),e(document).bind(t,function(n){e(n.target).hasClass("nav-mobile")||e(n.target).parents(".nav-mobile").length||(a.removeClass("open"),i.removeClass("open"),e(document).unbind(t))}),e(">i",i).bind(t,function(){a.removeClass("open"),i.removeClass("open"),e(document).unbind(t)})}),o.mobMenuFlag=!0)},windowResize:function(){var n=this;e(window).resize(function(){var i=e(window).innerWidth();n.createMobileMenu(i)})}},MNav.init()})}(jQuery);

/**
 * Check if browser is a mobile device
 */
(function(){(jQuery.browser=jQuery.browser||{}).mobile=(/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));}(navigator.userAgent||navigator.vendor||window.opera));


/* Responsive Class Add S */
    $( document ).ready(function() {
        $(".nav-mobile ul li").find("ul").before('<span class="is-open"></span>');
        $(".nav-mobile ul li").find("ul").parent("li").addClass("is-open-a");
        $(".nav-mobile .is-open").click(function(event) {
            event.preventDefault();
            $(this).toggleClass("is-close");
        });
    });
/* Responsive Class Add E */