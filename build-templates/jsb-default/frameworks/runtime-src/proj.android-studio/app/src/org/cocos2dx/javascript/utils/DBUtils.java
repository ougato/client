package org.cocos2dx.javascript.utils;

import android.content.Context;

import org.cocos2dx.javascript.db.SQLiteDB;

public class DBUtils {

    private static Context sContext = null;
    // 数据库实例
    private static SQLiteDB sSQLiteDB = null;

    public static void setContext(final Context context) {
        sContext = context;
    }

    public static boolean init(String dbName, int dbVersion, String struct) {
        sSQLiteDB = new SQLiteDB(sContext, dbName, null, dbVersion, struct);
        return sSQLiteDB != null;
    }

    public static void insert() {

    }

    public static void delete() {

    }

    public static void update() {

    }

    public static void select() {

    }

}
