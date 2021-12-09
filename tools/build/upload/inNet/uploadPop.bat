
set serverAddress=%1
set staticPath=%2
set romoteZipFile=%3
set localZipResPath=%4

REM @echo off


REM ERRORLEVEL "成功"用0 表示 "失败"用 1 表示
scp -r %localZipResPath% %serverAddress%:%staticPath%
set result=%ERRORLEVEL%
if %result% == 0 (
     echo upload success 
) else (
    echo upload fail
    goto :end
      )
REM 解压文件
ssh %serverAddress% "cd %staticPath%; unzip -o %romoteZipFile% -d %staticPath%"

set result=%ERRORLEVEL%
if %result% == 0 (
     echo unzip success
     ) else ( 
    echo unzip fail 
      goto :end
    )
:end
pause
