package org.cocos2dx.javascript.utils;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.WindowManager;

import org.cocos2dx.javascript.AppActivity;

public class NativeUtils {

    private static AppActivity sAppActivity = null;

    public static void setContext(final AppActivity appActivity) {
        sAppActivity = appActivity;
    }

    /**
     * 设置内容到系统剪切板
     * @param content {String} 内容
     * @return {boolean} 是否已拷贝到剪切板
     */
    public static boolean setClipboard(final String content) {
        boolean isOK = false;
        try {
            ClipboardManager clipboard = (ClipboardManager) sAppActivity.getSystemService(sAppActivity.CLIPBOARD_SERVICE);
            ClipData clip = ClipData.newPlainText("Content",content);
            clipboard.setPrimaryClip(clip);
            isOK = true;
        } catch (Exception e) {

        }
        return isOK;
    }

    /**
     * 获取系统剪切板的内容
     * @return {String} 剪切板内容
     */
    public static String getClipboard() {
        String content = "";
        try {
            ClipboardManager clipboard = (ClipboardManager) sAppActivity.getSystemService(sAppActivity.CLIPBOARD_SERVICE);
            if(clipboard.hasPrimaryClip()) {
                ClipData clipData = clipboard.getPrimaryClip();
                CharSequence charSequence = clipData.getItemAt(0).getText();
                content = String.valueOf(charSequence);
            }
        } catch (Exception e) {

        }
        return content;
    }

    /**
     * 获取屏幕宽度
     * @return {int} 宽度
     */
    public static int getScreenWidth() {
        WindowManager windowManager = (WindowManager) sAppActivity.getSystemService(Context.WINDOW_SERVICE);
        Display display = windowManager.getDefaultDisplay();

        DisplayMetrics displayMetrics = new DisplayMetrics();
        display.getMetrics(displayMetrics);

        return displayMetrics.widthPixels;
    }

    /**
     * 获取屏幕高度
     * @return {int} 高度
     */
    public static int getScreenHeight() {
        WindowManager windowManager = (WindowManager) sAppActivity.getSystemService(Context.WINDOW_SERVICE);
        Display display = windowManager.getDefaultDisplay();

        DisplayMetrics displayMetrics = new DisplayMetrics();
        display.getMetrics(displayMetrics);

        return displayMetrics.heightPixels;
    }
}
