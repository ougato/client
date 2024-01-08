package org.cocos2dx.javascript;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;

public class CocosJsCallNative {

    private static Context mContext = null;

    public static void init(final Context context) {
        mContext = context;
    }

    /**
     * 设置内容到系统剪切板
     * @param content {String} 内容
     * @return {boolean} 是否已拷贝到剪切板
     */
    public static boolean setClipboard(final String content) {
        boolean isOK = false;
        try {
            ClipboardManager clipboard = (ClipboardManager) mContext.getSystemService(mContext.CLIPBOARD_SERVICE);
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
            ClipboardManager clipboard = (ClipboardManager) mContext.getSystemService(mContext.CLIPBOARD_SERVICE);
            if(clipboard.hasPrimaryClip()) {
                ClipData clipData = clipboard.getPrimaryClip();
                CharSequence charSequence = clipData.getItemAt(0).getText();
                content = String.valueOf(charSequence);
//                for (int i = 0; i < clipData.getItemCount(); ++i) {
//                    ClipData.Item item = clipData.getItemAt(i);
//                    CharSequence str = item.coerceToText(mContext);
//                    content += str;
//                }
            }
        } catch (Exception e) {

        }
        return content;
    }

}
