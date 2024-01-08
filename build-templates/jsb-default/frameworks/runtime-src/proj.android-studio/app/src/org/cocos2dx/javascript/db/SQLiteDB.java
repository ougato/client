package org.cocos2dx.javascript.db;

import android.annotation.SuppressLint;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.cocos2dx.javascript.config.DBConfig;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class SQLiteDB extends SQLiteOpenHelper {

    private static Context sContext = null;
    // 类实例
    private static SQLiteDB sInstance = null;
    // 数据库对象
    private SQLiteDatabase mDB = null;
    // 表数据结构
    private List<DBConfig.Table> mStruct = null;

    public static void setContext(final Context context) {
        sContext = context;
    }

    public static boolean init(String dbName, int dbVersion, String struct) {
        SQLiteDB.sInstance = new SQLiteDB(SQLiteDB.sContext, dbName, null, dbVersion, struct);
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

    public SQLiteDB(Context context, String name, SQLiteDatabase.CursorFactory factory, int version, String struct) {
        super(context, name, factory, version);

        Type listType = new TypeToken<List<DBConfig.Table>>() {}.getType();
        mStruct = new Gson().fromJson(struct, listType);

        mDB = getWritableDatabase();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        createTable(db);
        createIndex(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        upgradeTable(db);
        upgradeIndex();
    }

    private String getIndexName(String tableName, String fieldName) {
        return String.format("%s_%s", tableName, fieldName);
    }

    private void createTable(SQLiteDatabase db) {
        for(DBConfig.Table tableInfo : mStruct) {
            StringBuilder createTableQuery = new StringBuilder();
            createTableQuery.append(String.format("CREATE TABLE %s (%s INTEGER PRIMARY KEY", tableInfo.name, tableInfo.options.keyPath));
            if(tableInfo.options.autoIncrement) {
                createTableQuery.append(" AUTOINCREMENT");
            }

            if(tableInfo.fieldList.size() > 0) {
                createTableQuery.append(", ");
            }

            int i = 0;
            for(DBConfig.Field fieldInfo : tableInfo.fieldList) {
                createTableQuery.append(String.format("%s %s", fieldInfo.name, fieldInfo.type));
                if(fieldInfo.options.unique) {
                    createTableQuery.append(" UNIQUE");
                }

                if(i++ == tableInfo.fieldList.size() - 1) {
                    createTableQuery.append(")");
                } else {
                    createTableQuery.append(", ");
                }
            }
            db.execSQL(createTableQuery.toString());
        }
    }

    private void createIndex(SQLiteDatabase db) {
        for(DBConfig.Table tableInfo : mStruct) {
            for(DBConfig.Field fieldInfo : tableInfo.fieldList) {
                if(fieldInfo.isIndex) {
                    StringBuilder createTableQuery = new StringBuilder();
                    createTableQuery.append(String.format("CREATE INDEX %s ON %s (%s)", this.getIndexName(tableInfo.name, fieldInfo.name), tableInfo.name, fieldInfo.name));
                    db.execSQL(createTableQuery.toString());
                }
            }
        }
    }

    private void upgradeTable(SQLiteDatabase db) {
        List<String> oldTableNameList = getTableNames(db);

        for (String oldTableName : oldTableNameList) {
            boolean isNewTable = false;
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
                isNewTable = mStruct.stream()
                        .anyMatch(tableInfo -> tableInfo.name.equals(oldTableName));
            }

            if (!isNewTable) {
                db.execSQL("DROP TABLE IF EXISTS " + oldTableName);
            }
        }

        for (DBConfig.Table tableInfo : mStruct) {
            if (!oldTableNameList.contains(tableInfo.name)) {
                db.execSQL("CREATE TABLE " + tableInfo.name + " (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
            }
        }
    }

    private void upgradeIndex() {
        for (DBConfig.Table tableInfo : mStruct) {
            List<String> oldIndexNameList = getIndexNames(tableInfo.name);

            for (String oldIndexName : oldIndexNameList) {
                boolean isNewIndex = false;
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
                    isNewIndex = tableInfo.fieldList.stream()
                            .anyMatch(fieldInfo -> fieldInfo.name.equals(oldIndexName));
                }

                if (!isNewIndex) {
                    mDB.execSQL("DROP INDEX IF EXISTS " + oldIndexName);
                }
            }

            for (DBConfig.Field fieldInfo : tableInfo.fieldList) {
                if (!oldIndexNameList.contains(fieldInfo.name)) {
                    mDB.execSQL("CREATE INDEX " + fieldInfo.name + " ON " + tableInfo.name + " (" + fieldInfo.keyPath + ")");
                }
            }
        }
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
