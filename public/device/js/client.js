'use strict'
    
var audioSource  = document.querySelector("select#audioSource");
var audioOutput  = document.querySelector("select#audioOutput");
var videoSource  = document.querySelector("select#videoSource");
//首次运行引导用户，信任域名
    var first = window.localStorage.getItem('first');
    if(first == null ){
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
            //调用用户媒体设备, 访问摄像头
           alert('支持访问用户媒体');;
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
        
        deviceInfos.forEach( function(deviceInfo){
		console.log(deviceInfo.kind + ": label = " 
				+ deviceInfo.label + ": id = "
				+ deviceInfo.deviceId + ": groupId = "
				+ deviceInfo.groupId);	
		var option = document.createElement('option');
		option.text = deviceInfo.label;
		option.value = deviceInfo.deviceId;
		if(deviceInfo.kind === 'audioinput'){
			option.text += "AudioIn:";
			audioSource.appendChild(option);
		}else if(deviceInfo.kind === 'audiooutput'){
			option.text += "AudioOut:";
			audioOutput.appendChild(option);
		}else if(deviceInfo.kind === 'videoinput'){
			videoSource.appendChild(option);
        }
            
        });
        
    }
 
    function handleError(error) {
        console.log('Error: ', error);
    }
 
 
