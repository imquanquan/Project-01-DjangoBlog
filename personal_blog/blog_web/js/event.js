/*
* 添加事件处理程序
* @param object object 要添加事件处理程序的元素
* @param string type 事件名称，如click
* @param function handler 事件处理程序，可以直接以匿名函数的形式给定，或者给一个已经定义的函数名。匿名函数方式给定的事件处理程序在IE6 IE7 IE8中可以移除，在标准浏览器中无法移除。
* @param boolean remove 是否是移除的事件，本参数是为简化下面的removeEvent函数而写的，对添加事件处理程序不起任何作用
* 描述：一个函数完全代替attachEvent/detachEvent，并且支持所有主流浏览器、解决IE6 IE7 IE8事件绑定导致的先绑定后执行问题。
* 下面是完美兼容addEventListener/removeEventListener和attachEvent/detachEvent的函数，支持Google Chrome/Firefox/Safari/Opera/IE 6 7 8 9 10 11等所有主流浏览器，
* 能够完美解决IE6 IE7 IE8 this指向错误，能够纠正IE6 IE7 IE8中事件先绑定后执行的错误。
*/
function addEvent(object, type, handler, remove) {
    if (typeof object != 'object' || typeof handler != 'function') return;
    try {
        object[remove ? 'removeEventListener' : 'addEventListener'](type, handler, false);
    } catch (e) {
        var xc = '_' + type;
        object[xc] = object[xc] || [];
        if (remove) {
            var l = object[xc].length;
            for (var i = 0; i < l; i++) {
                if (object[xc][i].toString() === handler.toString()) object[xc].splice(i, 1);
            }
        } else {
            var l = object[xc].length;
            var exists = false;
            for (var i = 0; i < l; i++) {
                if (object[xc][i].toString() === handler.toString()) exists = true;
            }
            if (!exists) object[xc].push(handler);
        }
        object['on' + type] = function () {
            var l = object[xc].length;
            for (var i = 0; i < l; i++) {
                object[xc][i].apply(object, arguments);
            }
        }
    }
}
/* 移除事件处理程序 */
function removeEvent(object, type, handler) {
    addEvent(object, type, handler, true);
}