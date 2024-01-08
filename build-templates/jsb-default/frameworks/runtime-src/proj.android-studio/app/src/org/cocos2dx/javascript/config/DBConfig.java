package org.cocos2dx.javascript.config;

import java.util.List;

public class DBConfig {

    public static class Table {
        public String name;
        public Options options;
        public List<Index> indexList;
    }

    public static class Options {
        public String keyPath;
        public boolean autoIncrement;
    }

    public static class Index {
        public String name;
        public String keyPath;
        public IndexParameters options;
    }

    public static class IndexParameters {
        public Boolean multiEntry;
        public Boolean unique;
    }

}
