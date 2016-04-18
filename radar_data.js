var h = 1000;
var w = 1450;

var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
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
    "name": "Maven",
    "pc": {
      "r": 69,
      "t": 135
    },
    "movement": "c"
  },
  {
    "name": "Guava",
    "pc": {
      "r": 39,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 33,
      "t": 105
    },
    "movement": "c"
  },
  {
    "name": "Sbt",
    "pc": {
      "r": 57,
      "t": 120
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 52,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "Play (Scala)",
    "pc": {
      "r": 110,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "scikit-learn",
    "pc": {
      "r": 110,
      "t": 163
    },
    "movement": "t"
  },
  {
    "name": "Guice",
    "pc": {
      "r": 115,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "OpenNLP",
    "pc": {
      "r": 120,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Thymeleaf",
    "pc": {
      "r": 131,
      "t": 175
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 131,
      "t": 151
    },
    "movement": "c"
  },
  {
    "name": "Gradle",
    "pc": {
      "r": 136,
      "t": 103
    },
    "movement": "c"
  },
  {
    "name": "Apache Camel",
    "pc": {
      "r": 142,
      "t": 133
    },
    "movement": "c"
  },
  {
    "name": "Camunda BPMN Engine",
    "pc": {
      "r": 147,
      "t": 157
    },
    "movement": "c"
  },
  {
    "name": "AspectJ",
    "pc": {
      "r": 152,
      "t": 169
    },
    "movement": "c"
  },
  {
    "name": "Node.js ",
    "pc": {
      "r": 158,
      "t": 145
    },
    "movement": "t"
  },
  {
    "name": "Akka (Scala)",
    "pc": {
      "r": 168,
      "t": 121
    },
    "movement": "c"
  },
  {
    "name": "Akka (Java)",
    "pc": {
      "r": 174,
      "t": 109
    },
    "movement": "c"
  },
  {
    "name": "scilab",
    "pc": {
      "r": 210,
      "t": 141
    },
    "movement": "t"
  },
  {
    "name": "Flux",
    "pc": {
      "r": 266,
      "t": 121
    },
    "movement": "c"
  },
  {
    "name": "Spray",
    "pc": {
      "r": 266,
      "t": 101
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 274,
      "t": 151
    },
    "movement": "t"
  },
  {
    "name": "Play (Java)",
    "pc": {
      "r": 282,
      "t": 171
    },
    "movement": "t"
  },
  {
    "name": "AngularJS 2.x",
    "pc": {
      "r": 310,
      "t": 115
    },
    "movement": "t"
  },
  {
    "name": "BackboneJS",
    "pc": {
      "r": 342,
      "t": 147
    },
    "movement": "c"
  },
  {
    "name": "Drools",
    "pc": {
      "r": 374,
      "t": 155
    },
    "movement": "c"
  },
  {
    "name": "Activiti",
    "pc": {
      "r": 374,
      "t": 179
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
    "name": "AWS S3",
    "pc": {
      "r": 86,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 68,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Cassandra",
    "pc": {
      "r": 55,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 70,
      "t": 25
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 39,
      "t": 70
    },
    "movement": "c"
  },
  {
    "name": "MemCached",
    "pc": {
      "r": 46,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 110,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Kairos",
    "pc": {
      "r": 120,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 131,
      "t": 8
    },
    "movement": "c"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 147,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS",
    "pc": {
      "r": 152,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 158,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "AWS EMR",
    "pc": {
      "r": 174,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HDFS",
    "pc": {
      "r": 174,
      "t": 38
    },
    "movement": "c"
  },
  {
    "name": "Google BigQuery",
    "pc": {
      "r": 174,
      "t": 26
    },
    "movement": "t"
  },
  {
    "name": "Flink",
    "pc": {
      "r": 184,
      "t": 74
    },
    "movement": "t"
  },
  {
    "name": "AWS DynamoDB",
    "pc": {
      "r": 234,
      "t": 66
    },
    "movement": "c"
  },
  {
    "name": "AWS Kinesis",
    "pc": {
      "r": 234,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/YARN",
    "pc": {
      "r": 242,
      "t": 26
    },
    "movement": "c"
  },
  {
    "name": "Storm",
    "pc": {
      "r": 250,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Samza",
    "pc": {
      "r": 250,
      "t": 6
    },
    "movement": "c"
  },
  {
    "name": "Google BigTable",
    "pc": {
      "r": 274,
      "t": 46
    },
    "movement": "c"
  },
  {
    "name": "Datomic",
    "pc": {
      "r": 310,
      "t": 28
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/MR",
    "pc": {
      "r": 310,
      "t": 84
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 318,
      "t": 44
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 318,
      "t": 12
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 318,
      "t": 76
    },
    "movement": "c"
  },
  {
    "name": "Riak",
    "pc": {
      "r": 326,
      "t": 60
    },
    "movement": "c"
  },
  {
    "name": "Hadoop/HBase",
    "pc": {
      "r": 326,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "CouchBase",
    "pc": {
      "r": 334,
      "t": 52
    },
    "movement": "c"
  },
  {
    "name": "HornetQueue",
    "pc": {
      "r": 342,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Apache Artemis",
    "pc": {
      "r": 350,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "Aerospike",
    "pc": {
      "r": 350,
      "t": 4
    },
    "movement": "c"
  },
  {
    "name": "MySQL",
    "pc": {
      "r": 350,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 358,
      "t": 64
    },
    "movement": "c"
  },
  {
    "name": "Esper CEP",
    "pc": {
      "r": 358,
      "t": 24
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 374,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Oracle DB",
    "pc": {
      "r": 374,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "ActiveMQ",
    "pc": {
      "r": 382,
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
    "name": "ZMON",
    "pc": {
      "r": 82,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 32,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "slf4j",
    "pc": {
      "r": 74,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "Jetty",
    "pc": {
      "r": 67,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "log4j2",
    "pc": {
      "r": 52,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 60,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "STUPS",
    "pc": {
      "r": 69,
      "t": 257
    },
    "movement": "c"
  },
  {
    "name": "Tomcat",
    "pc": {
      "r": 80,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Hystrix",
    "pc": {
      "r": 46,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "HAProxy",
    "pc": {
      "r": 53,
      "t": 227
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 120,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "logback",
    "pc": {
      "r": 152,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Undertow",
    "pc": {
      "r": 168,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "Zookeeper",
    "pc": {
      "r": 184,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Nginx+",
    "pc": {
      "r": 234,
      "t": 186
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 242,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 242,
      "t": 226
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 250,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "AWS Simple Workflow Service",
    "pc": {
      "r": 266,
      "t": 206
    },
    "movement": "t"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 274,
      "t": 246
    },
    "movement": "c"
  },
  {
    "name": "Rocket (rkt)",
    "pc": {
      "r": 310,
      "t": 184
    },
    "movement": "c"
  },
  {
    "name": "Grizzly",
    "pc": {
      "r": 318,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "log4j",
    "pc": {
      "r": 326,
      "t": 256
    },
    "movement": "c"
  },
  {
    "name": "JBoss",
    "pc": {
      "r": 374,
      "t": 208
    },
    "movement": "c"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 390,
      "t": 224
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
    "name": "Python",
    "pc": {
      "r": 80,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Java",
    "pc": {
      "r": 75,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "Javascript",
    "pc": {
      "r": 87,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 80,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 68,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "Clojure",
    "pc": {
      "r": 120,
      "t": 278
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 147,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "ClojureScript",
    "pc": {
      "r": 152,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "R",
    "pc": {
      "r": 242,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 250,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Elm",
    "pc": {
      "r": 266,
      "t": 306
    },
    "movement": "t"
  },
  {
    "name": "ScalaJS",
    "pc": {
      "r": 266,
      "t": 336
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 282,
      "t": 316
    },
    "movement": "t"
  },
  {
    "name": "Rust",
    "pc": {
      "r": 282,
      "t": 286
    },
    "movement": "c"
  },
  {
    "name": "Elixir",
    "pc": {
      "r": 326,
      "t": 330
    },
    "movement": "c"
  },
  {
    "name": "Haskell",
    "pc": {
      "r": 334,
      "t": 346
    },
    "movement": "c"
  },
  {
    "name": "Erlang",
    "pc": {
      "r": 342,
      "t": 298
    },
    "movement": "c"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 350,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "C/C++",
    "pc": {
      "r": 350,
      "t": 322
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 358,
      "t": 274
    },
    "movement": "c"
  },
  {
    "name": "Jython",
    "pc": {
      "r": 366,
      "t": 282
    },
    "movement": "c"
  },
  {
    "name": "PHP",
    "pc": {
      "r": 374,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "JRuby",
    "pc": {
      "r": 382,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "Perl",
    "pc": {
      "r": 382,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 382,
      "t": 354
    },
    "movement": "c"
  },
  {
    "name": ".NET",
    "pc": {
      "r": 390,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "Mono",
    "pc": {
      "r": 390,
      "t": 342
    },
    "movement": "c"
  }
]
  }
];
