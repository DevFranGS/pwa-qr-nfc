
var testsUl = document.getElementById('tests');
var codes = {
    error: 2,
    warning: 1,
    ok: 0,
    toColor: function (code) {
        switch (code) {
            case 0:
                return '#00AF00';
            case 1:
                return '#FFAF00';
            case 2:
                return '#AF0000';
            default:
                return '#000000';
        }
    }
};

function testWebAssembly() {
    return typeof WebAssembly === 'object' ? true : false;
};

function testASM() {
    try {
        (function MyAsmModule() { "use asm"; return {} })();
        return true;
    }
    catch (err) {
        return false;
    }
};

function testWebGL() {
    try {
        var canvas = document.createElement('canvas');
        var webgl = !!(window).WebGLRenderingContext && (
            canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        return webgl ? true : false;
    }
    catch (e) {
        return false;
    }
};

function testHTTPS() {
    return (location.protocol === 'https:') ? true : false;
};

function testGetUserMedia() {
    if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return true;
    }

    return false;
};

function captureAndInjectCameraFeed(callback) {
    var video = document.createElement('video');
    video.width = 640;
    video.height = 480;
    video.setAttribute('autoplay', '');

    var constraints = {
        video: true,
        audio: false
    };

    function handleSuccess(stream) {
        window.stream = stream; // make stream available to browser console
        video.srcObject = stream;
        document.body.appendChild(video);
        callback(false);
    }

    function handleError(error) {
        console.log('navigator.getUserMedia error: ', error);
        callback(true, error);
    }

    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);
};

function runTests() {
    var returnCode = codes.ok;

    // Warnings
    if (!testWebAssembly()) {
        outputTest('WebAssembly: Warning, WebAssembly not supported. Performance may be a degraded, should fallback to ASM.', codes.warning);
        returnCode = codes.warning;
    } else {
        outputTest('WebAssembly: Success.', codes.ok);
    }

    if (!testASM()) {
        outputTest('ASM: Warning, ASM not supported. Performance may be a degraded, will fallback to standard JavaScript execution.', codes.warning);
        returnCode = codes.warning;
    } else {
        outputTest('ASM: Success.', codes.ok);
    }

    if (!testHTTPS()) {
        outputTest('HTTPS: Warning, served from HTTP, Camera access might be blocked depending on Browser.', codes.warning);
        returnCode = codes.warning;
    } else {
        outputTest('HTTPS: Success.', codes.ok);
    }

    // Errors
    if (!testWebGL()) {
        outputTest('WebGL: Error, browser not supported.', codes.error);
        returnCode = codes.error;
    } else {
        outputTest('WebGL: Success.', codes.ok);
    }

    if (!testGetUserMedia()) {
        outputTest('getUserMedia: Error, browser not supported.', codes.error);
        returnCode = codes.error;
    } else {
        outputTest('getUserMedia: Success.', codes.ok);
    }

    return returnCode;
};

function appendElement(element, message, code) {
    var e = document.createElement(element);
    e.style.color = codes.toColor(code);
    e.innerHTML = message;
    document.body.appendChild(e);
    console.log(message);
};

function outputTest(message, code) {
    var li = document.createElement('li');
    li.style.color = codes.toColor(code);
    li.innerHTML = message;
    testsUl.appendChild(li);
    console.log(message);
};

function onTestsPassed(e) {
    captureAndInjectCameraFeed(function (error, message) {
        if (!error) {
            outputTest('Camera: Success, was found and injected into the webpage', codes.ok);
        } else {
            outputTest('Camera: Failed, an error occured and did not inject camera feed into the webpage.', codes.error);
            appendElement('p', 'Error: ' + JSON.stringify(message), codes.error);
            appendElement('p', 'This error may appear if you have not clicked a permissions pop up (browser dependant), manually blocked the camera, or if the experience is being served from an unsecured host. If the HTTPS test failed please click "Force redirect to HTTPS" and try again.', codes.error);
        }
    });
};

function goToHTTPS() {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

window.onload = function (e) {
    if (runTests() < codes.error) {
       location.replace('scan-qr.html');
    } else {
        appendElement('p', 'Due to found errors camera streaming will not be injected.', codes.error);
       alert('Test ERROR');
    }
};