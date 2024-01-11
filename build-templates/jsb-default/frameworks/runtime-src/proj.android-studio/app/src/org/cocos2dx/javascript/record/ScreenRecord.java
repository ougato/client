package org.cocos2dx.javascript.record;

import android.graphics.Bitmap;

import org.bytedeco.javacv.FFmpegFrameRecorder;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class ScreenRecord extends FFmpegFrameRecorder {

    private OutputStream mOutputStream = null;
    private int mWidht = 0;
    private int mHeight = 0;

    public ScreenRecord(OutputStream outputStream, int imageWidth, int imageHeight) {
        super(outputStream, imageWidth, imageHeight);
        mOutputStream = outputStream;
        mWidht = imageWidth;
        mHeight = imageHeight;
    }

    public void recordFrameStream() {
        try {
            ByteArrayOutputStream frameStream = new ByteArrayOutputStream();
            Bitmap bitmap = Bitmap.createBitmap(mWidht, mHeight, Bitmap.Config.ARGB_8888);
            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, frameStream);
            mOutputStream.write(frameStream.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
