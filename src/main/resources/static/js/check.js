window.onload = function() {
    checkSize(); // 页面加载时检查宽度
    window.addEventListener('resize', checkSize); // 监听窗口调整事件
};

function checkSize() {
    var minWidth = 375
    var minHeight = 635
    var currentWidth = window.innerWidth || document.documentElement.clientWidth
    var currentHeight = window.innerHeight || document.documentElement.clientHeight

    if (currentWidth < minWidth || currentHeight < minHeight) {
      // 页面宽度小于最小宽度，采取相应的措施
      // 这里可以重定向、显示警告、禁用功能等
      document.body.innerHTML = '<h1>访问被禁止，因为页面高度或宽度太小。</h1>';
    }
}