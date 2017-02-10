# AwesomeProject
reactnative 入门第二天

搭建好环境后，执行以下

创建项目
进入你的工作目录，运行

react-native init MyProject
并耐心等待数（或数十）分钟。

运行packager
react-native start

可以用浏览器访问http://localhost:8081/index.android.bundle?platform=android

react-native run-android


2.新建的Activity，可以将布局文件都写在index.android.js中，并且采用AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);注册上，
或者根据实际业务来区分，将布局文件写在其他js文件中，
然后在需要的地方引入 （如 import SecondProject from './out'; //通过引入布局外部，或者都写在当前文件中）


React-Native 与原生的3种交互通信（Android）

大致分为2种情况：
•	Android主动向JS端传递事件、数据
•	JS端被动向Android询问获取事件、数据
方式	优点	缺点
事件方式：RCTDeviceEventEmitter	可任意时刻传递，Native主导控制	个人觉得此种方式缺点小
CallBack回调方式	JS调用一次，Native返回一次	CallBack为异步操作，返回时机不确定
Promises 方式	JS调用一次，Native返回一次	每次使用需要JS调用一次



1.在工程根目录下执行打包命令，比如
生成bundle包，需要执行以下
react-native bundle --entry-file index.android.js --bundle-output ./bundle/index.android.bundle --platform android --assets-dest ./bundle --dev false

2.增量升级的话不要把图片资源直接打包到res中，脚本如下：
react-native bundle --entry-file index.android.js --bundle-output ./bundle/index.android.bundle

3.保证MainActivity.java中的 setBundleAssetName与你的jsbundle文件名一致，比如.setBundleAssetName(“index.android.jsbundle”)就与我生成的资源名一致




配置签名，具体参照：http://reactnative.cn/docs/0.41/signed-apk-android.html#content
1.在android 目录下，执行 gradlew assembleRelease，你就可以在android/app/build/outputs/apk/app-release.apk中找到你的应用包。

2.之后执行 pushy uploadApk android/app/build/outputs/apk/app-release.apk，
即可上传apk以供后续版本比对之用。随后你可以选择往应用市场发布这个版本，也可以先往设备上直接安装这个apk文件以进行测试。

3. 你可以尝试修改一行代码(譬如将版本一修改为版本二)，然后生成新的热更新版本。
执行 pushy bundle --platform android，根据提示输入相关信息，此时版本已经提交到update服务，
但用户暂时看不到此更新，你需要先将特定的包版本绑定到此热更新版本上。

4.注意，发布热更新必须是签名过的包，不能通过react-native run-android来启动，用户可以在执行第一步后，找到release包安装到手机。
