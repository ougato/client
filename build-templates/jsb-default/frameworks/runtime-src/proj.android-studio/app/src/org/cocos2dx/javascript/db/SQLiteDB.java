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
import java.util.Arrays;
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
        upgradeFiled(db);
        upgradeIndex(db);
    }

    private String getIndexName(String tableName, String fieldName) {
        return String.format("%s_%s", tableName, fieldName);
    }

    private Boolean isSysTable(String tableName) {
        return Arrays.asList(DBConfig.Define.SYSTEM_TABLE_NAME_LIST).contains(tableName);
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
                    createTableQuery.append(String.format("CREATE INDEX %s ON %s (%s)", getIndexName(tableInfo.name, fieldInfo.name), tableInfo.name, fieldInfo.name));
                    db.execSQL(createTableQuery.toString());
                }
            }
        }
    }

    private void upgradeTable(SQLiteDatabase db) {
        List<String> oldTableNameList = getTableNames(db);

        for (String oldTableName : oldTableNameList) {
            boolean isNewTable = false;

            if(isSysTable(oldTableName)) {
                continue;
            }

            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
                isNewTable = mStruct.stream()
                        .anyMatch(tableInfo -> tableInfo.name.equals(oldTableName));
            }

            if (!isNewTable) {
                db.execSQL(String.format("DROP TABLE IF EXISTS %s", oldTableName));
            }
        }

        for (DBConfig.Table tableInfo : mStruct) {
            if (!oldTableNameList.contains(tableInfo.name)) {
                StringBuilder createTableQuery = new StringBuilder();
                createTableQuery.append(String.format("CREATE TABLE %s (%s INTEGER PRIMARY KEY", tableInfo.name, tableInfo.options.keyPath));
                if(tableInfo.options.autoIncrement) {
                    createTableQuery.append(" AUTOINCREMENT");
                }
                createTableQuery.append(")");
                db.execSQL(createTableQuery.toString());
            }
        }
    }

    private void upgradeFiled(SQLiteDatabase db) {
        for (DBConfig.Table tableInfo : mStruct) {
            List<String> oldFieldNameList = getFieldNames(db, tableInfo.name);

            for (DBConfig.Field fieldInfo : tableInfo.fieldList) {
                if (!oldFieldNameList.contains(fieldInfo.name)) {
                    db.execSQL(String.format("ALTER TABLE %s ADD COLUMN %s %s", tableInfo.name, fieldInfo.name, fieldInfo.type));
                }
            }
        }
    }

    private void upgradeIndex(SQLiteDatabase db) {
        for (DBConfig.Table tableInfo : mStruct) {
            List<String> oldIndexNameList = getIndexNames(db, tableInfo.name);

            for (String oldIndexName : oldIndexNameList) {
                boolean isNewIndex = false;
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
                    isNewIndex = tableInfo.fieldList.stream()
                            .anyMatch(fieldInfo -> getIndexName(tableInfo.name, fieldInfo.name).equals(oldIndexName));
                }

                if (!isNewIndex) {
                    db.execSQL(String.format("DROP INDEX IF EXISTS %s", oldIndexName));
                }
            }

            for (DBConfig.Field fieldInfo : tableInfo.fieldList) {
                if (!oldIndexNameList.contains(getIndexName(tableInfo.name, fieldInfo.name))) {
                    db.execSQL(String.format("CREATE INDEX %s ON %s (%s)", getIndexName(tableInfo.name, fieldInfo.name), tableInfo.name, fieldInfo.keyPath));
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

    private List<String> getIndexNames(SQLiteDatabase db, String tableName) {
        List<String> indexNames = new ArrayList<>();
        Cursor cursor = db.rawQuery(String.format("PRAGMA index_list(%s)", tableName), null);

        while (cursor.moveToNext()) {
            int columnIndex = cursor.getColumnIndex("name");
            if(columnIndex >= 0) {
                String indexName = cursor.getString(columnIndex);
                indexNames.add(indexName);
            }
        }

        cursor.close();
        return indexNames;
    }

    private List<String> getFieldNames(SQLiteDatabase db, String tableName) {
        List<String> fieldNames = new ArrayList<>();
        Cursor cursor = db.rawQuery(String.format("PRAGMA table_info(%s)", tableName), null);

        while (cursor.moveToNext()) {
            int columnIndex = cursor.getColumnIndex("name");
            if(columnIndex >= 0) {
                String columnName = cursor.getString(columnIndex);
                fieldNames.add(columnName);
            }
        }

        cursor.close();
        return fieldNames;
    }
}
