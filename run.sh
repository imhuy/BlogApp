echo 1. xoá và cài lại node modules
echo 2. xoá và cài lại pods
echo 3. xoá và cài lại hết
echo Nhập số:
read modules

if [ $modules == 1 ]; then
    echo "Đang xoá node_modules"
    rm -rf node_modules
    echo "yarn lại"
    yarn
elif [ $modules == 2 ]; then
    echo "Đang xoá Pods "
    rm -rf ios/Pods
    echo "yarn lại"
    cd ios pod install
elif [ $modules == 3 ]; then
    echo "Đang xoá node_modules"
    rm -rf node_modules
    echo "yarn lại"
    yarn
    echo "Đang xoá Pods "
    rm -rf ios/Pods
    echo "pod install lại "
    cd ios && pod install
else
    echo "Nhập sai "
fi
npm start
