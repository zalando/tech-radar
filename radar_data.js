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
      "r": 67,
      "t": 113
    },
    "movement": "t"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 108,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 87,
      "t": 136
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 44,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 106,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 96,
      "t": 165
    },
    "movement": "t"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 110,
      "t": 119
    },
    "movement": "c"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 64,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 281,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 280,
      "t": 156
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 240,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 257,
      "t": 96
    },
    "movement": "t"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 292,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 294,
      "t": 136
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 325,
      "t": 174
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 341,
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 354,
      "t": 102
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 344,
      "t": 94
    },
    "movement": "c"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 198,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 176,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 199,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 191,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 166,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 163,
      "t": 98
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
      "r": 97,
      "t": 23
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 106,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 104,
      "t": 10
    },
    "movement": "t"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 46,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 95,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 62,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 119,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 89,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 66,
      "t": 42
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 77,
      "t": 29
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 57,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 233,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 236,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 254,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 290,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 324,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 379,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 327,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 328,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 370,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 382,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 355,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 332,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 359,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 384,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 366,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 381,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 374,
      "t": 48
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 321,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 334,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 175,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 199,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 203,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 191,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 161,
      "t": 56
    },
    "movement": "c"
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
      "r": 87,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 86,
      "t": 229
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 66,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 42,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 108,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 74,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 109,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 45,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 65,
      "t": 209
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 274,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 361,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 336,
      "t": 240
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 327,
      "t": 264
    },
    "movement": "t"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 348,
      "t": 232
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 194,
      "t": 224
    },
    "movement": "t"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 198,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 147,
      "t": 248
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
      "r": 85,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 115,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 116,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 47,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 86,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 77,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 273,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 257,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 284,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 279,
      "t": 276
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 334,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 330,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 323,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 337,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 336,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 355,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 350,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 325,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 375,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 347,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 361,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 163,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 152,
      "t": 302
    },
    "movement": "c"
  }
]
  }
];
