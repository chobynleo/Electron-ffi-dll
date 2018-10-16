// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict';

const ffi = require('ffi');
const path = require('path');

const demo = ffi.Library(path.join(__dirname, 'dll/dlltest.dll'), {
    "Double": ['int', ['int']]
});

// 按钮的点击事件
function double(){
    // 输入的数
    const input = document.getElementById('input').value;
    if(input){
        document.getElementById('result').value = demo.Double(input)
    }
}
