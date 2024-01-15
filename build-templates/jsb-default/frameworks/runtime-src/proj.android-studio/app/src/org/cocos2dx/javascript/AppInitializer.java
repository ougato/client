package org.cocos2dx.javascript;

import android.view.WindowManager;

public class AppInitializer {

    private AppActivity mAppActivity = null;
    private static AppInitializer sInstance = null;

    public static AppInitializer getInstance() {
        if (null == sInstance) {
            sInstance = new AppInitializer();
        }
        return sInstance;
    }

    public void init(AppActivity appActivity) {
        mAppActivity = appActivity;

        initBrightness();
    }

    /**
     * 初始化屏幕常量
     */
    protected void initBrightness() {
        mAppActivity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }

}
