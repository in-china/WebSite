'use strict'


var videoplay = document.querySelector('video#player');
//var audioplay = document.querySelector('audio#audioplayer');



//devices
var audioSource = document.querySelector('select#audioSource');
var audioOutput = document.querySelector('select#audioOutput');
var videoSource = document.querySelector('select#videoSource');

//picture
var snapshot = document.querySelector('button#snapshot');
var picture = document.querySelector('canvas#picture');
picture.width = 640;
picture.height = 480;



function gotMediaStream(stream){

	videoplay.srcObject = stream;

	//audioplay.srcObject = stream;
	return navigator.mediaDevices.enumerateDevices();
}


function handleError(err){
	console.log('getUserMedia error:', err);
}


function gotDevices(deviceInfos){

	deviceInfos.forEach(function(deviceinfo){

		var option = document.createElement('option');
		option.text = deviceinfo.label;
		option.value = deviceinfo.deviceId;
	
		if(deviceinfo.kind === 'audioinput'){
			audioSource.appendChild(option);
		}else if(deviceinfo.kind === 'audiooutput'){
			audioOutput.appendChild(option);
		}else if(deviceinfo.kind === 'videoinput'){
			videoSource.appendChild(option);
		}
	})
}



function start()
{
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
        var deviceId = videoSource.value; 
        var constraints = {
			  video : {width:640,
				   height:480,
				  facingMode: 'enviroment',
				  deviceId : deviceId ? {exact:deviceId} : undefined
				  },
			  audio : {
				    noiseSuppression:true,
				    echoCancellation:true

				   }
				
                          }
        navigator.mediaDevices.getUserMedia(constraints)
          .then(gotMediaStream)
          .catch(handleError);
  }	
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
        var deviceId = videoSource.value; 
        var constraints = {
			  video : {width:640,
				   height:480,
				  facingMode: 'enviroment',
				  deviceId : deviceId ? {exact:deviceId} : undefined
				  },
			  audio : {
				    noiseSuppression:true,
				    echoCancellation:true

				   }
				
                          }
        navigator.mediaDevices.getUserMedia(constraints)
          .then(gotMediaStream)
	  .then(gotDevices)
          .catch(handleError);
  }	






start();
videoSource.onchange = start;


snapshot.onclick = function() {
	picture.className = filtersSelect.value;
	picture.getContext('2d').drawImage(videoplay, 0, 0, picture.width, picture.height);
}


















