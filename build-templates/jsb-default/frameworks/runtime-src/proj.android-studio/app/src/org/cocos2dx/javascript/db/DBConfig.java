package org.cocos2dx.javascript.db;

import java.util.List;

public class DBConfig {

    public static class Struct {
        public String name;
        public List<Index> indexList;
    }

    public static class Index {
        public String name;
        public String keyPath;
        public Options options;
    }

    public static class Options {
        // 在这里添加任何其他选项
    }

}
