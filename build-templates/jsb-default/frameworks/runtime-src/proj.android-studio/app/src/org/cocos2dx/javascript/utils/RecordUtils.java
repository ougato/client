package org.cocos2dx.javascript.utils;

import static android.app.Activity.RESULT_OK;

import android.content.Intent;

import org.cocos2dx.javascript.AppActivity;
import org.cocos2dx.javascript.config.RecordConfig;
import org.cocos2dx.javascript.record.VideoRecord;

import java.io.ByteArrayOutputStream;

public class RecordUtils {

    private static AppActivity sContext = null;
    private static VideoRecord mVideoRecord = null;
    private static ByteArrayOutputStream sOutputStream = new ByteArrayOutputStream();

    public static void setContext(final AppActivity context) {
        sContext = context;
    }

    public static void init() {
        mVideoRecord = new VideoRecord(sContext);
    }

    public static void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == RecordConfig.Define.REQUEST_CODE_SCREEN_CAPTURE && resultCode == RESULT_OK && data != null) {
            mVideoRecord.onAuthorized(resultCode, data);
        }
    }

    public static void start() {

    }

    public static void pause() {

    }

    public static void resume() {

    }

    public static void stop() {

    }

}