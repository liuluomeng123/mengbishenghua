// 确保 DOM 加载完成后执行代码
window.onload = function() {
    // 选择你想要添加事件监听器的元素
    var element = document.querySelector('.your-element-class');

    // 检查元素是否存在
    if (element) {
        // 添加事件监听器
        element.addEventListener('click', function() {
            // 处理点击事件
        });
    } else {
    }

    // 获取导航栏的所有链接
    var navLinks = document.querySelectorAll('.nav-menu a');

    // 为每个链接添加鼠标悬浮事件
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.classList.add('hover-effect');
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hover-effect');
        });
    });
};
