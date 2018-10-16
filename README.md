# Electron-ffi-dll

## 项目说明
这是一个electron中ffi模块直接调用dll的demo，将其下载之后就能够直接进项目开发，无须配置其他环境，
极大减轻配置环境过程中的痛苦，这个用作test的dll内部函数是`int double(int n1)`，即输入一个数，将其乘以2后，返回这个结果。
需要注意的是这个是32位的dll，故electron也是32位的。

## 目录说明
1. 静态资源在`public`文件夹
2. dll文件在`public/dll/dlltest.dll`文件
3. 调用dll的js文件在`src/modules/index`文件

## 运行
* `npm run start`
