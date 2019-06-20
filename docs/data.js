export default {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Zalando Tech Radar — 2018.10",
  quadrants: [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Frameworks" },
    { name: "Data Management" }
  ],
  rings: [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
  ],
  print_layout: true,
  // zoomed_quadrant: 0,
  //ENTRIES
  entries: [
    {
      quadrant: 3,
      ring: 0,
      label: "AWS EMR",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Spark",
      active: false,
      link: "../data_processing/spark.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Airflow",
      active: false,
      link: "../data_processing/airflow.html",
      moved: 1
    },
    {
      quadrant: 3,
      ring: 1,
      label: "AWS Data Pipeline",
      active: false,
      link: "../data_processing/aws_data_pipeline.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Flink",
      active: false,
      link: "../data_processing/flink.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Google BigQuery",
      active: false,
      link: "../data_processing/google_bigquery.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Presto",
      active: false,
      link: "../data_processing/presto.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Hadoop",
      active: false,
      link: "../data_processing/hadoop.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "YARN",
      active: false,
      link: "../data_processing/yarn.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Esper",
      active: false,
      link: "../data_processing/esper.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "AWS S3",
      active: false,
      link: "../datastores/aws_s3.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Cassandra",
      active: false,
      link: "../datastores/cassandra.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Elasticsearch",
      active: false,
      link: "../datastores/elasticsearch.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "etcd",
      active: false,
      link: "../datastores/etcd.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "PostgreSQL",
      active: false,
      link: "../datastores/postgresql.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Redis",
      active: false,
      link: "../datastores/redis.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Solr",
      active: false,
      link: "../datastores/solr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "AWS DynamoDB",
      active: false,
      link: "../datastores/aws_dynamodb.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "HDFS",
      active: false,
      link: "../datastores/hdfs.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "KairosDB",
      active: false,
      link: "../datastores/kairos.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Consul",
      active: false,
      link: "../datastores/consul.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Google Bigtable",
      active: false,
      link: "../datastores/google_bigtable.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "RocksDB",
      active: false,
      link: "../datastores/rocksdb.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Aerospike",
      active: false,
      link: "../datastores/aerospike.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "CouchBase",
      active: false,
      link: "../datastores/couchbase.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "HBase",
      active: false,
      link: "../datastores/hbase.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Memcached",
      active: false,
      link: "../datastores/memcached.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "MongoDB",
      active: false,
      link: "../datastores/mongodb.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "MySQL",
      active: false,
      link: "../datastores/mysql.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Oracle DB",
      active: false,
      link: "../datastores/oracle_db.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "Riak",
      active: false,
      link: "../datastores/riak.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "ZooKeeper",
      active: false,
      link: "../datastores/zookeeper.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Akka (Scala)",
      active: false,
      link: "../frameworks/akka_scala.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Node.js",
      active: false,
      link: "../frameworks/nodejs.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Play (Scala)",
      active: false,
      link: "../frameworks/play_scala.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "ReactJS",
      active: false,
      link: "../frameworks/reactjs.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "RxJava (Android)",
      active: false,
      link: "../frameworks/rxjava_android.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "scikit-learn",
      active: false,
      link: "../frameworks/scikit_learn.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Spring",
      active: false,
      link: "../frameworks/spring.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Akka-Http",
      active: false,
      link: "../frameworks/akka_http.html",
      moved: 1
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Angular",
      active: false,
      link: "../frameworks/angular.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "AspectJ",
      active: false,
      link: "../frameworks/aspectj.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Camel",
      active: false,
      link: "../frameworks/camel.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Camunda",
      active: false,
      link: "../frameworks/camunda.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "OpenNLP",
      active: false,
      link: "../frameworks/opennlp.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "TensorFlow",
      active: false,
      link: "../frameworks/tensorflow.html",
      moved: 1
    },
    {
      quadrant: 2,
      ring: 1,
      label: "Thymeleaf",
      active: false,
      link: "../frameworks/thymeleaf.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Aurelia",
      active: false,
      link: "../frameworks/aurelia.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Ember.js",
      active: false,
      link: "../frameworks/emberjs.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "gRPC",
      active: false,
      link: "../frameworks/grpc.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Http4s",
      active: false,
      link: "../frameworks/http4s.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "jOOQ",
      active: false,
      link: "../frameworks/jooq.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Redux",
      active: false,
      link: "../frameworks/redux.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Vert.x",
      active: false,
      link: "../frameworks/vertx.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 2,
      label: "Vue.js",
      active: false,
      link: "../frameworks/vuejs.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Activiti",
      active: false,
      link: "../frameworks/activiti.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "AngularJS 1.x",
      active: false,
      link: "../frameworks/angularjs_1x.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "BackboneJS",
      active: false,
      link: "../frameworks/backbonejs.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Drools",
      active: false,
      link: "../frameworks/drools.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Spray",
      active: false,
      link: "../frameworks/spray.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Docker",
      active: false,
      link: "../infrastructure/docker.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "HAProxy",
      active: false,
      link: "../infrastructure/haproxy.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Hystrix",
      active: false,
      link: "../infrastructure/hystrix.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Jetty",
      active: false,
      link: "../infrastructure/jetty.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Kubernetes",
      active: false,
      link: "../infrastructure/kubernetes.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Nginx",
      active: false,
      link: "../infrastructure/nginx.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "STUPS",
      active: false,
      link: "../infrastructure/stups.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Tomcat",
      active: false,
      link: "../infrastructure/tomcat.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "ZMON",
      active: false,
      link: "../infrastructure/zmon.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Failsafe",
      active: false,
      link: "../infrastructure/failsafe.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "OpenTracing",
      active: false,
      link: "../infrastructure/opentracing.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Undertow",
      active: false,
      link: "../infrastructure/undertow.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 2,
      label: "AWS Lambda",
      active: false,
      link: "../infrastructure/aws_lambda.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Go",
      active: true,
      link: "go.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Java",
      active: true,
      link: "java.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "JavaScript",
      active: true,
      link: "javascript.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "OpenAPI (Swagger)",
      active: true,
      link: "openapi_swagger.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Python",
      active: true,
      link: "python.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Scala",
      active: true,
      link: "scala.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "Swift",
      active: true,
      link: "swift.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Clojure",
      active: true,
      link: "clojure.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Haskell",
      active: true,
      link: "haskell.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "Kotlin",
      active: true,
      link: "kotlin.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "TypeScript",
      active: true,
      link: "typescript.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Elm",
      active: true,
      link: "elm.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 2,
      label: "R",
      active: true,
      link: "r.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 2,
      label: "Rust",
      active: true,
      link: "rust.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "C languages",
      active: true,
      link: "c_languages.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "CoffeeScript",
      active: true,
      link: "coffeescript.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Erlang",
      active: true,
      link: "erlang.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Groovy",
      active: true,
      link: "groovy.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: ".NET languages",
      active: true,
      link: "net_languages.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Perl",
      active: true,
      link: "perl.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "PHP",
      active: true,
      link: "php.html",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 3,
      label: "Ruby",
      active: true,
      link: "ruby.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "AWS SNS",
      active: false,
      link: "../queues/aws_sns.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "AWS SQS",
      active: false,
      link: "../queues/aws_sqs.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Kafka",
      active: false,
      link: "../queues/kafka.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Nakadi",
      active: false,
      link: "../queues/nakadi.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "RabbitMQ",
      active: false,
      link: "../queues/rabbitmq.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "AWS Kinesis",
      active: false,
      link: "../queues/aws_kinesis.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "ActiveMQ",
      active: false,
      link: "../queues/activemq.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 3,
      label: "HornetQ",
      active: false,
      link: "../queues/hornetq.html",
      moved: 0
    },
  ]
}
