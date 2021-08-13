'use strict'


var videoplay = document.querySelector('video#player');
//var audioplay = document.querySelector('audio#audioplayer');


function gotMediaStream(stream){

	videoplay.srcObject = stream;

	//audioplay.srcObject = stream;
	return navigator.mediaDevices.enumerateDevices();
}


function handleError(err){
	console.log('getUserMedia error:', err);
}



//首次运行引导用户，信任域名
    var first = window.localStorage.getItem('first');
    if(first == null ){
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            //调用用户媒体设备, 访问摄像头
           // alert('用一下你的摄像头');
        } else {
            alert('不支持访问用户媒体');
        }
    }
if(!navigator.mediaDevices ||
		!navigator.mediaDevices.getUserMedia){
		console.log('getUserMedia is not supported!');
	}else{
    
        var constraints = {
                  video : {width:640,
			   height:1204},
                  audio : true 
                          }

    
    
        navigator.mediaDevices.getUserMedia(constraints)
          .then(gotMediaStream)
          .catch(handleError);
  }


