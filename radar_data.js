var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 145
  },
  {
    "name": "TRIAL",
    "r": 230
  },
  {
    "name": "ASSESS",
    "r": 315
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
      "r": 100,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Maven",
    "pc": {
      "r": 55,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 97,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 61,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 50,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 75,
      "t": 152
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 105,
      "t": 132
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 61,
      "t": 106
    },
    "movement": "t"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 97,
      "t": 145
    },
    "movement": "t"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 50,
      "t": 119
    },
    "movement": "c"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 50,
      "t": 158
    },
    "movement": "c"
  },
  {
    "name": "Angular",
    "pc": {
      "r": 169,
      "t": 146
    },
    "movement": "t"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 169,
      "t": 170
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 210,
      "t": 98
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 174,
      "t": 134
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 186,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 164,
      "t": 122
    },
    "movement": "c"
  },
  {
    "name": "gRPC",
    "pc": {
      "r": 251,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Ember.js",
    "pc": {
      "r": 261,
      "t": 106
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 282,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 268,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 249,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "Aurelia",
    "pc": {
      "r": 292,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 349,
      "t": 94
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 374,
      "t": 110
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 334,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 1.x",
    "pc": {
      "r": 358,
      "t": 102
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
      "r": 108,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 110,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 132,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 99,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 62,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 54,
      "t": 49
    },
    "movement": "t"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 133,
      "t": 55
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 125,
      "t": 29
    },
    "movement": "t"
  },
  {
    "name": "AWS EMR",
    "pc": {
      "r": 114,
      "t": 42
    },
    "movement": "t"
  },
  {
    "name": "Nakadi",
    "pc": {
      "r": 115,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 106,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 158,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 173,
      "t": 8
    },
    "movement": "t"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 159,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 196,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 220,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 262,
      "t": 66
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 273,
      "t": 6
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 302,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 269,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 351,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 383,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 380,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 375,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 351,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 354,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 382,
      "t": 84
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 389,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 326,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 366,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 335,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 339,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 382,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 343,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 380,
      "t": 72
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
      "r": 98,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "ZMON",
    "pc": {
      "r": 107,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 57,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 74,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 74,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 121,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 124,
      "t": 196
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 96,
      "t": 209
    },
    "movement": "t"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 79,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 208,
      "t": 200
    },
    "movement": "t"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 183,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 213,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 268,
      "t": 206
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 345,
      "t": 184
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 378,
      "t": 256
    },
    "movement": "t"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 332,
      "t": 240
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 368,
      "t": 216
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
      "r": 89,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 122,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 81,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 123,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 96,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 91,
      "t": 293
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 200,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 168,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 275,
      "t": 296
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 250,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 262,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 293,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 357,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 341,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 362,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 346,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 333,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 340,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 388,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 342,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 360,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 358,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": ".NET / languages",
    "pc": {
      "r": 389,
      "t": 330
    },
    "movement": "c"
  }
]
  }
];
