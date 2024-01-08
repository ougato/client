package org.cocos2dx.javascript.config;

import java.util.List;

public class DBConfig {

    public static class Table {
        public String name;
        public Options options;
        public List<Field> fieldList;
    }

    public static class Options {
        public String keyPath;
        public boolean autoIncrement;
    }

    public static class Field {
        public String name;
        public String keyPath;
        public boolean isIndex;
        public String type;
        public IndexParameters options;
    }

    public static class IndexParameters {
        public Boolean multiEntry;
        public Boolean unique;
    }

}
