var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 78,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 56,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 95,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 98,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 71,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "RxJava (Android)",
    "pc": {
      "r": 116,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 72,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 78,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Akka-Http",
    "pc": {
      "r": 284,
      "t": 156
    },
    "movement": "t"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 240,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 231,
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 299,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 236,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Http4s",
    "pc": {
      "r": 297,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 265,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 245,
      "t": 136
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 327,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 343,
      "t": 174
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 345,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 361,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "Spray",
    "pc": {
      "r": 342,
      "t": 142
    },
    "movement": "t"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 173,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 183,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 164,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 155,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 152,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 143,
      "t": 146
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "AWS EMR",
    "pc": {
      "r": 53,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "AWS S3",
    "pc": {
      "r": 80,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 114,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 118,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 52,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 120,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 100,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 109,
      "t": 42
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 78,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 118,
      "t": 29
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 114,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 97,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 288,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 252,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 264,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 258,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 371,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 334,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 388,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 351,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 335,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 348,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 370,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 383,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 323,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 343,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 322,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 332,
      "t": 48
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 336,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Oracle DB",
    "pc": {
      "r": 342,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 374,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 386,
      "t": 64
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 173,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 171,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 166,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 208,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 169,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "Presto",
    "pc": {
      "r": 176,
      "t": 32
    },
    "movement": "t"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 120,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 97,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 79,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 106,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 60,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 58,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 108,
      "t": 209
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 115,
      "t": 252
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 72,
      "t": 222
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 236,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 273,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 321,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 327,
      "t": 240
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 370,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 355,
      "t": 184
    },
    "movement": "c"
  },
  {
    "name": "saltstack",
    "pc": {
      "r": 324,
      "t": 192
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 163,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 206,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 155,
      "t": 188
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Go",
    "pc": {
      "r": 109,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 109,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 65,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 105,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 110,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 94,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 263,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 284,
      "t": 276
    },
    "movement": "t"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 248,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 298,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 273,
      "t": 286
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 367,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 372,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 326,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 337,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 380,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 356,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 343,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 358,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 350,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 353,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 180,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 154,
      "t": 278
    },
    "movement": "c"
  }
]
  }
];
