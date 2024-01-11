package org.cocos2dx.javascript.record;

import static org.cocos2dx.javascript.config.RecordConfig.Define.REQUEST_CODE_SCREEN_CAPTURE;

import android.content.Context;
import android.content.Intent;
import android.media.MediaRecorder;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionManager;
import android.os.Build;

import org.cocos2dx.javascript.AppActivity;
import org.cocos2dx.javascript.config.RecordConfig;

import java.io.IOException;

public class VideoRecord {

    private AppActivity mContext = null;
    private MediaProjectionManager mMediaProjectionManager = null;
    private MediaProjection mMediaProjection = null;
    private MediaRecorder mMediaRecorder = null;

    public VideoRecord(AppActivity context) {
        mContext = context;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            mMediaProjectionManager = (MediaProjectionManager) context.getSystemService(Context.MEDIA_PROJECTION_SERVICE);
            context.requestMediaProjection(mMediaProjectionManager.createScreenCaptureIntent(), RecordConfig.Define.REQUEST_CODE_SCREEN_CAPTURE);
        }
    }

    public void onAuthorized(int resultCode, Intent data) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            mMediaProjection = mMediaProjectionManager.getMediaProjection(resultCode, data);
            mMediaRecorder = new MediaRecorder();

//            mMediaRecorder.setVideoSource(MediaRecorder.VideoSource.SURFACE);
//            mMediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
//            mMediaRecorder.setVideoEncoder(MediaRecorder.VideoEncoder.H264);
//            mMediaRecorder.setVideoSize(720, 1280);
//            mMediaRecorder.setVideoFrameRate(30);
//            mMediaRecorder.setOutputFile(getFilePath());
//
//            try {
//                mMediaRecorder.prepare();
//            } catch (IOException e) {
//                e.printStackTrace();
//                return;
//            }
//
//            virtualDisplay = mMediaProjection.createVirtualDisplay(
//                    "ScreenRecording",
//                    720,
//                    1280,
//                    getResources().getDisplayMetrics().densityDpi,
//                    DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR,
//                    mMediaRecorder.getSurface(),
//                    null,
//                    null);
//
//            mMediaRecorder.start();
        }
    }

}
