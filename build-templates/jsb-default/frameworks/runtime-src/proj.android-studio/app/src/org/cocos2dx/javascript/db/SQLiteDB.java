package org.cocos2dx.javascript.db;

import android.annotation.SuppressLint;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

public class SQLiteDB extends SQLiteOpenHelper {

    private static Context sContext = null;
    // 类实例
    private static SQLiteDB sInstance = null;
    // 数据库对象
    private SQLiteDatabase mDB = null;

    public static void setContext(final Context context) {
        sContext = context;
    }

    public static boolean init(String dbName, int dbVersion, String struct) {
        SQLiteDB.sInstance = new SQLiteDB(SQLiteDB.sContext, dbName, null, dbVersion);
        return SQLiteDB.sInstance != null;
    }

    public static void insert() {

    }

    public static void delete() {

    }

    public static void update() {

    }

    public static void select() {

    }

    public SQLiteDB(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
        mDB = getWritableDatabase();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        upgradeTable(db);
        upgradeIndex();
    }

    private void upgradeTable(SQLiteDatabase db) {
//        List<String> oldTableNameList = getTableNames(db);
//
//        for (String oldTableName : oldTableNameList) {
//            boolean isNewTable = DBConfig.Struct.stream()
//                    .anyMatch(tableInfo -> tableInfo.name.equals(oldTableName));
//
//            if (!isNewTable) {
//                db.execSQL("DROP TABLE IF EXISTS " + oldTableName);
//            }
//        }
//
//        for (DBInterface.Table tableInfo : DBConfig.Struct) {
//            if (!oldTableNameList.contains(tableInfo.name)) {
//                db.execSQL("CREATE TABLE " + tableInfo.name + " (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
//            }
//        }
    }

    private void upgradeIndex() {
//        for (DBInterface.Table tableInfo : DBConfig.Struct) {
//            List<String> oldIndexNameList = getIndexNames(tableInfo.name);
//
//            for (String oldIndexName : oldIndexNameList) {
//                boolean isNewIndex = tableInfo.indexList.stream()
//                        .anyMatch(indexInfo -> indexInfo.name.equals(oldIndexName));
//
//                if (!isNewIndex) {
//                    _db.execSQL("DROP INDEX IF EXISTS " + oldIndexName);
//                }
//            }
//
//            for (DBInterface.Index indexInfo : tableInfo.indexList) {
//                if (!oldIndexNameList.contains(indexInfo.name)) {
//                    _db.execSQL("CREATE INDEX " + indexInfo.name + " ON " + tableInfo.name + " (" + indexInfo.keyPath + ")");
//                }
//            }
//        }
    }

    private List<String> getTableNames(SQLiteDatabase db) {
        List<String> tableNames = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT name FROM sqlite_master WHERE type='table'", null);

        while (cursor.moveToNext()) {
            String tableName = cursor.getString(0);
            tableNames.add(tableName);
        }

        cursor.close();
        return tableNames;
    }

    private List<String> getIndexNames(String tableName) {
        List<String> indexNames = new ArrayList<>();
        Cursor cursor = mDB.rawQuery("PRAGMA index_list(" + tableName + ")", null);

        while (cursor.moveToNext()) {
            @SuppressLint("Range") String indexName = cursor.getString(cursor.getColumnIndex("name"));
            indexNames.add(indexName);
        }

        cursor.close();
        return indexNames;
    }
}
