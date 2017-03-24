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
    "name": "Guava",
    "pc": {
      "r": 77,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 81,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 118,
      "t": 152
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 74,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 62,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 53,
      "t": 139
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 61,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 101,
      "t": 132
    },
    "movement": "t"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 104,
      "t": 145
    },
    "movement": "t"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 113,
      "t": 119
    },
    "movement": "c"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 100,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 142,
      "t": 98
    },
    "movement": "t"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 203,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 155,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 210,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 174,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 152,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 236,
      "t": 116
    },
    "movement": "t"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 250,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 237,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 294,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 236,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 273,
      "t": 156
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 375,
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 334,
      "t": 102
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 372,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 348,
      "t": 150
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
    "name": "Cassandra",
    "pc": {
      "r": 55,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 120,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 114,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 102,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 53,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 90,
      "t": 49
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 84,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 60,
      "t": 42
    },
    "movement": "t"
  },
  {
    "name": "AWS EMR",
    "pc": {
      "r": 83,
      "t": 29
    },
    "movement": "t"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 73,
      "t": 55
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 73,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 180,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 183,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 183,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 160,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 171,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 270,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 290,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 292,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 247,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 347,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 382,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 388,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 389,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 382,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 355,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 324,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 324,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 351,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 345,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 357,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 366,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 381,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 364,
      "t": 64
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 325,
      "t": 8
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
      "r": 106,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 110,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 82,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 115,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 57,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 68,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 94,
      "t": 222
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 110,
      "t": 196
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 119,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 152,
      "t": 200
    },
    "movement": "t"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 192,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 199,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 242,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 370,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 345,
      "t": 240
    },
    "movement": "t"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 336,
      "t": 184
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 349,
      "t": 264
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
    "name": "Java",
    "pc": {
      "r": 116,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 75,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 89,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 96,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 53,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 78,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 210,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 155,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 278,
      "t": 296
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 273,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 270,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 243,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 324,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 345,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 352,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 323,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 390,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 350,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 385,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 341,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 327,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 344,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 338,
      "t": 274
    },
    "movement": "c"
  }
]
  }
];
