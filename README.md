- 通过一下命令以追踪废弃告警的栈堆信息，并推断出是由哪个 plugin 或 loader 引起的
```Shell
node --trace-deprecation node_modules/webpack/bin/webpack.js
```

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
```


port: 7890
socks-port: 7891
redir-port: 0
allow-lan: false
mode: Rule
log-level: info
external-controller: '0.0.0.0:9090'
secret: ''


proxies:
- { name: "u9un-v2-HK-HongKong1",type: vmess,server: hk1.v2u9.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong2",type: vmess,server: hk2.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong3",type: vmess,server: hk3.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong4",type: vmess,server: hk4.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong5",type: vmess,server: hk5.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong6",type: vmess,server: hk6.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong7",type: vmess,server: hk7.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong8",type: vmess,server: hk8.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong9",type: vmess,server: hk9.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong0",type: vmess,server: hk0.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong11Unicom",type: vmess,server: hk11.u9v2.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong12Unicom",type: vmess,server: hk12.u9v2.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong13Mobile",type: vmess,server: hk13.u9v2.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong14Mobile",type: vmess,server: hk14.u9v2.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-HK-HongKong15Mobile",type: vmess,server: hk15.u9v2.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo1",type: vmess,server: jp1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo2Mobile",type: vmess,server: jp2.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo3Mobile",type: vmess,server: jp3.v2u9.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo4Unicom",type: vmess,server: jp4.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo5Unicom",type: vmess,server: jp5.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-JP-Tokyo6Unicom",type: vmess,server: jp6.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-TW-Taipei1",type: vmess,server: tw1.v2u9.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-TW-Taipei2",type: vmess,server: tw2.v2u9.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore1",type: vmess,server: sg1.v2u9.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore2",type: vmess,server: sg2.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore3",type: vmess,server: sg3.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore4",type: vmess,server: sg4.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore5",type: vmess,server: sg5.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore6",type: vmess,server: sg6.u9v2v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore7",type: vmess,server: sg7.u9v2v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore8",type: vmess,server: sg8.u9v2v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore9",type: vmess,server: sg9.u9v2v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-SG-Singapore0",type: vmess,server: sg0.u9v2v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-IN-India1",type: vmess,server: in1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-IN-India2",type: vmess,server: in2.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-KR-Seoul1",type: vmess,server: kr1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-KR-Seoul2",type: vmess,server: kr2.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-KR-Seoul3",type: vmess,server: kr3.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-KR-Seoul4",type: vmess,server: kr4.u9v2.top,port: 444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-MY-Malaysia",type: vmess,server: my1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-MO-Macao",type: vmess,server: mo1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-TH-Thailand",type: vmess,server: th1.v2u9.top,port: 14444,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-US-LosAngeles1",type: vmess,server: us1.u9v2v2.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-US-LosAngeles2",type: vmess,server: us2.u9v2v2.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-US-LosAngeles3",type: vmess,server: us3.u9v2v2.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-US-LosAngeles4",type: vmess,server: us4.u9v2v2.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}
- { name: "u9un-v2-US-LosAngeles5",type: vmess,server: us5.u9v2v2.top,port: 443,uuid: 2FD9DBB2-95FB-EA6D-A39A-7C77A2FC34EC,alterId: 1,cipher: none, network: ws, tls: true}


proxy-groups:
- { name: 100型号云服务器V2一年, type: select, proxies: ["u9un-v2-HK-HongKong1", "u9un-v2-HK-HongKong2", "u9un-v2-HK-HongKong3", "u9un-v2-HK-HongKong4", "u9un-v2-HK-HongKong5", "u9un-v2-HK-HongKong6", "u9un-v2-HK-HongKong7", "u9un-v2-HK-HongKong8", "u9un-v2-HK-HongKong9", "u9un-v2-HK-HongKong0", "u9un-v2-HK-HongKong11Unicom", "u9un-v2-HK-HongKong12Unicom", "u9un-v2-HK-HongKong13Mobile", "u9un-v2-HK-HongKong14Mobile", "u9un-v2-HK-HongKong15Mobile", "u9un-v2-JP-Tokyo1", "u9un-v2-JP-Tokyo2Mobile", "u9un-v2-JP-Tokyo3Mobile", "u9un-v2-JP-Tokyo4Unicom", "u9un-v2-JP-Tokyo5Unicom", "u9un-v2-JP-Tokyo6Unicom", "u9un-v2-TW-Taipei1", "u9un-v2-TW-Taipei2", "u9un-v2-SG-Singapore1", "u9un-v2-SG-Singapore2", "u9un-v2-SG-Singapore3", "u9un-v2-SG-Singapore4", "u9un-v2-SG-Singapore5", "u9un-v2-SG-Singapore6", "u9un-v2-SG-Singapore7", "u9un-v2-SG-Singapore8", "u9un-v2-SG-Singapore9", "u9un-v2-SG-Singapore0", "u9un-v2-IN-India1", "u9un-v2-IN-India2", "u9un-v2-KR-Seoul1", "u9un-v2-KR-Seoul2", "u9un-v2-KR-Seoul3", "u9un-v2-KR-Seoul4", "u9un-v2-MY-Malaysia", "u9un-v2-MO-Macao", "u9un-v2-TH-Thailand", "u9un-v2-US-LosAngeles1", "u9un-v2-US-LosAngeles2", "u9un-v2-US-LosAngeles3", "u9un-v2-US-LosAngeles4", "u9un-v2-US-LosAngeles5"], url: http://connectivitycheck.platform.hicloud.com/generate_204 }

rules:
- DOMAIN-SUFFIX,google.com,100型号云服务器V2一年
- DOMAIN-KEYWORD,google,100型号云服务器V2一年
- DOMAIN,google.com,100型号云服务器V2一年

# LAN
- IP-CIDR,127.0.0.0/8,DIRECT
- IP-CIDR,172.16.0.0/12,DIRECT
- IP-CIDR,192.168.0.0/16,DIRECT

- GEOIP,CN,DIRECT
- MATCH,100型号云服务器V2一年
