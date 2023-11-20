window.onload = function() {
    checkSize(); // 页面加载时检查宽度
    window.addEventListener('resize', checkSize); // 监听窗口调整事件
};

function checkSize() {
    var minWidth = 300
    var minHeight = 500
    var currentWidth = window.innerWidth || document.documentElement.clientWidth
    var currentHeight = window.innerHeight || document.documentElement.clientHeight

    if (currentWidth < minWidth || currentHeight < minHeight) {
      document.body.innerHTML = `
        <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            height: auto;
            border 2px soild rgba(255,255,255);
            background: rgba(255,255,255,0.6);
            backdrop-filter: blur(10px);
            padding 20px 20px 20px 20px;
            color: rgba(255,255,255);
        ">
            <h1>访问被禁止，因为页面高度或宽度太小。</h1>
        </div>
      `
    }
}