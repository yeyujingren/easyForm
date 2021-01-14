- 通过一下命令以追踪废弃告警的栈堆信息，并推断出是由哪个 plugin 或 loader 引起的
```Shell
node --trace-deprecation node_modules/webpack/bin/webpack.js
```

├── README.md 
├── build // webpack配置相关
├── doc // 项目规范要求相关
├── package-lock.json
├── package.json
├── public  // 静态资源相关
│   └── index.html
├── src // 开发目录
│   ├── apis  // api层
│   ├── component // 公共组件层
│   ├── config  // 配置层
│   ├── index.tsx // 入口
│   ├── pages // 页面
│   ├── store // redux
│   └── utils // 工具包
├── test  // 单元测试
└── tsconfig.json
