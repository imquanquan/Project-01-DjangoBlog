var isTop = true;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        var btnBack = document.getElementById('btn');
        //添加点击事件
        addEvent(btnBack, 'click', function () {
            var timer = setInterval(function () {
                //获取滚动条到顶部的距离
                //我们需要兼容一些浏览器的写法 所以需要使用||兼容chrome
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;

                //返回一个整数
                var speed = Math.floor(-osTop / 5);
                //滚动事件
                isTop = true;
                //设置滚动条到顶部的距离
                //我们需要兼容一些浏览器的写法 所以需要使用||兼容chrome
                document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                //这里必须设置为真 如果为假 在触发滚动事件的时候 就会关闭定时器
                if (osTop <= 0) {
                    clearInterval(timer);
                }
            }, 25);
        });

        //滚动时发生的事件
        window.onscroll = document.onscroll = function () {
            //获取滚动条到顶部的距离
            //我们需要兼容一些浏览器的写法 所以需要使用||兼容chrome
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //滚动到第二屏的时候 会出现回到顶部的按钮
            if (osTop > clientHeight) {
                btnBack.style.display = "block";
            }
            else {
                btnBack.style.display = "none";
            }

            if (!isTop) {
                clearInterval();
            }
            isTop = false;
        }