- 通过一下命令以追踪废弃告警的栈堆信息，并推断出是由哪个 plugin 或 loader 引起的
```Shell
node --trace-deprecation node_modules/webpack/bin/webpack.js
```
