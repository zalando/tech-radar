var h = 1000;
var w = 1450;

var radar_arcs = [
  {'r': 130, 'name': 'ADOPT'},
  {'r': 220, 'name': 'TRIAL'},
  {'r': 310, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
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
      "r": 57,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 31,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 57,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 99,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 59,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 33,
      "t": 152
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 47,
      "t": 145
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 97,
      "t": 119
    },
    "movement": "t"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 35,
      "t": 132
    },
    "movement": "t"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 78,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 117,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 2.x",
    "pc": {
      "r": 144,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 149,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 158,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 168,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 172,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 177,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 244,
      "t": 106
    },
    "movement": "t"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 244,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 279,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 286,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 293,
      "t": 136
    },
    "movement": "c"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 300,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 348,
      "t": 118
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 376,
      "t": 142
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 376,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 390,
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
      "r": 36,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 100,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 120,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 87,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 43,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 71,
      "t": 75
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 101,
      "t": 29
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 118,
      "t": 55
    },
    "movement": "t"
  },
  {
    "name": "AWS EMR",
    "pc": {
      "r": 64,
      "t": 68
    },
    "movement": "t"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 93,
      "t": 42
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 111,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 149,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 186,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 196,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 196,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 205,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 251,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 258,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 286,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 300,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 327,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 327,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 327,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 334,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 334,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 341,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 348,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 355,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 355,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 355,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 362,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 362,
      "t": 72
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 376,
      "t": 64
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 383,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 390,
      "t": 32
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
      "r": 51,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 92,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 54,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 47,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 55,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 90,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 87,
      "t": 222
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 60,
      "t": 196
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 33,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 144,
      "t": 248
    },
    "movement": "t"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 191,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 205,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 286,
      "t": 246
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 327,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 355,
      "t": 224
    },
    "movement": "t"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 376,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 390,
      "t": 192
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
      "r": 99,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 83,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 103,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 102,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 114,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 30,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 144,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 149,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 258,
      "t": 296
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 279,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 293,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 293,
      "t": 286
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 341,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 348,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 355,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 355,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 362,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 369,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 376,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 383,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 383,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 383,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 390,
      "t": 338
    },
    "movement": "c"
  }
]
  }
];
