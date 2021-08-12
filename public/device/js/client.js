'use strict'
    //首次运行引导用户，信任域名
    var first = window.localStorage.getItem('first');
    if(first == null ){
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            //调用用户媒体设备, 访问摄像头
            getUserMedia({video: {width: 480, height: 320}}, success, error);
        } else {
            alert('不支持访问用户媒体');
        }
    }
    if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log('menumerateDevices is not supported!');
    }else {
        navigator.mediaDevices.enumerateDevices()
            .then(gotDevices).catch(handleError);
    }
 
    // 遍历所有的设备，包括视频和音频设备,找到摄像头
    function gotDevices(deviceInfos) {
        console.log(deviceInfos);
    }
 
    function handleError(error) {
        console.log('Error: ', error);
    }
 
 
 
    //访问用户媒体设备的兼容方法
    function getUserMedia(constraints, success, error) {
        if (navigator.mediaDevices.getUserMedia) {
            //最新的标准API
            navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
        } else if (navigator.webkitGetUserMedia) {
            //webkit核心浏览器
            navigator.webkitGetUserMedia(constraints, success, error)
        } else if (navigator.mozGetUserMedia) {
            //firfox浏览器
            navigator.mozGetUserMedia(constraints, success, error);
        } else if (navigator.getUserMedia) {
            //旧版API
            navigator.getUserMedia(constraints, success, error);
        }
    }
    function success(stream) {
        console.log(stream);
        window.localStorage.setItem('first',"false");
        window.location.reload();
    }
    function error(error) {
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
    }
