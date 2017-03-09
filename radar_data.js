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
      "r": 53,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 102,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 68,
      "t": 145
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 31,
      "t": 130
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 33,
      "t": 160
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 105,
      "t": 167
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 39,
      "t": 137
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 35,
      "t": 122
    },
    "movement": "t"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 102,
      "t": 152
    },
    "movement": "t"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 39,
      "t": 107
    },
    "movement": "c"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 61,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 2.x",
    "pc": {
      "r": 144,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 149,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 158,
      "t": 170
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
      "t": 158
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
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 279,
      "t": 156
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
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 348,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 376,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 376,
      "t": 142
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 390,
      "t": 94
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
      "r": 113,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 84,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 86,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 113,
      "t": 70
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 42,
      "t": 25
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 70,
      "t": 77
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 95,
      "t": 47
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 53,
      "t": 17
    },
    "movement": "t"
  },
  {
    "name": "AWS EMR",
    "pc": {
      "r": 78,
      "t": 32
    },
    "movement": "t"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 76,
      "t": 62
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 62,
      "t": 0
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 149,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 186,
      "t": 44
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
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 251,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 258,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 286,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 300,
      "t": 16
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
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 327,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 334,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 334,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 341,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 348,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 355,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 355,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 355,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 362,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 362,
      "t": 64
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 376,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 383,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 390,
      "t": 24
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
      "r": 47,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 76,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 112,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 58,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 94,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 71,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 117,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 87,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 109,
      "t": 227
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 73,
      "t": 257
    },
    "movement": "c"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 191,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 205,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 286,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 327,
      "t": 240
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 334,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 355,
      "t": 192
    },
    "movement": "t"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 376,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 390,
      "t": 184
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
      "r": 97,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 111,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 89,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 84,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 95,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 36,
      "t": 287
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
      "t": 278
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 258,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 279,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 293,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 293,
      "t": 316
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 341,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 348,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 355,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 355,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 362,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 369,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 376,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 383,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 383,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 383,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 390,
      "t": 274
    },
    "movement": "t"
  }
]
  }
];
