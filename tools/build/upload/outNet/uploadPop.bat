REM @echo off

 


:: 没事别动这个----------------------------------



::-----------------------------------------------

echo start up hotFile of %2

::设置启动窗口的标题
 

::1.定义一个变量OSSUtil_HOME, OSSUtil工具的安装路径
::☆☆☆☆ "D:\Program Files\Tool\OSSUtil\ossutil64" ☆☆☆☆ 为ossUtil所在根目录
set PAN=D:
set OSSUTIL_HOME="D:\oss\ossutil64"

echo ---------111----- %1
::2.定义热更新文件所在路径, 热更新文件夹外层
set HOTFILE_HOME= %1
rem set HOTFILE_HOME="F:\nbd"

::3.定义热更新文件上传到Bucket的路径, 热更新文件夹存放的外层
echo --------222------ %2


set SLMJ_OBJECT=oss://parkour-pre/%2
rem set SLMJ_OBJECT="oss://banabana/nbd/"

echo --------222------ %SLMJ_OBJECT%

cd \

::管理员权限进入OSSUTIL所在盘符
%PAN%

::设置启动窗口的颜色
color 0a

::进入OSSUtil工具的根目录
cd %OSSUTIL_HOME%

ossutil64.exe rm %SLMJ_OBJECT% -rf
::执行上传任务  -u 是
ossutil64.exe cp -r %HOTFILE_HOME%  %SLMJ_OBJECT% -u