echo "-- 打印参数 ---"
for i in "$@"; do
    echo $i
done
echo "-- 打印参数结束 ---"
 serverAddress=$1
 staticPath=$2
 romoteZipFile=$3
 localZipResBasePath=$4

#获取运行的程序名
PRONAME=`basename $0`
#获取文件运行的当前目录
CURPATH=$(cd "$(dirname "$0")"; pwd)

parkourKeyPath=${CURPATH}/parkour.pem
echo $parkourKeyPath

cd $localZipResBasePath
scp -i $parkourKeyPath -r $romoteZipFile $serverAddress:$staticPath
# REM  "成功"用0 表示 "失败"用 1 表示
	if [[ "$?" -eq "0" ]];then
		echo -e "执行的命令: [$1]\t执行结果: 成功"
        
	else
		echo -e "执行命令：[$1]\t执行结果:失败"
        sleep 100000
        exit 0;
	fi
echo 1111112222
ssh -i $parkourKeyPath $serverAddress "cd $staticPath; unzip -o $romoteZipFile"
	if [[ "$?" -eq "0" ]];then
		echo -e "执行的命令: [$1]\t执行结果: 成功"
        
	else
		echo -e "执行命令：[$1]\t执行结果:失败"
       sleep 100000
       exit 0;
	fi
echo execute end
