package org.cocos2dx.javascript.utils;

import android.content.Context;

import org.bytedeco.ffmpeg.global.avcodec;
import org.bytedeco.javacv.FrameRecorder;
import org.cocos2dx.javascript.config.RecordConfig;
import org.cocos2dx.javascript.record.ScreenRecord;

import java.io.ByteArrayOutputStream;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class RecordUtils {

    private static final int FRAME_RATE = 24;
    private static Context sContext = null;
    private static ScreenRecord sRecorder = null;
    private static ByteArrayOutputStream sOutputStream = new ByteArrayOutputStream();
    private static RecordConfig.State sState = RecordConfig.State.STOP;
    private static ScheduledExecutorService sExecutorService = null;

    public static void setContext(final Context context) {
        sContext = context;
    }

    public static void init() {
        sRecorder = new ScreenRecord(sOutputStream, NativeUtils.getScreenWidth(), NativeUtils.getScreenHeight());
        sRecorder.setVideoCodec(avcodec.AV_CODEC_ID_H264);
        sRecorder.setFormat("mp4");
    }

    public static void start() {
        if(sState != RecordConfig.State.STOP) {
            return;
        }

        try {
            sRecorder.start();
            sExecutorService = Executors.newScheduledThreadPool(1);
            sExecutorService.scheduleAtFixedRate(() -> {
                if(sState == RecordConfig.State.START) {
                    sRecorder.recordFrameStream();
                }
            }, 0, 1 / FRAME_RATE * 1000, TimeUnit.MILLISECONDS);
        } catch (FrameRecorder.Exception e) {
            throw new RuntimeException(e);
        }

    }

    public static void pause() {
        sState = RecordConfig.State.PAUSE;
    }

    public static void resume() {
        sState = RecordConfig.State.START;
    }

    public static void stop() {
        sState = RecordConfig.State.STOP;
    }

}