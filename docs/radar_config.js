window.Rings = {
  ADOPT: 0,
  TRIAL: 1,
  ASSESS: 2,
  HOLD: 3
};

window.Moved = {
  NO: 0,
  IN: 1,
  OUT: -1
}

window.quadrants = [
  { name: "Design Patterns & Techniques" },
  { name: "Infrastructure" },
  { name: "Languages & Libraries" },
  { name: "Data management" }
];

window.rings = [
  { name: Object.keys(Rings)[0], color: "#02b388" },
  { name: Object.keys(Rings)[1], color: "#9ae1cf" },
  { name: Object.keys(Rings)[2], color: "#f8cab5" },
  { name: Object.keys(Rings)[3], color: "#ee5744" }
];

window.entries = [
  // Design Patterns & Techniques
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Functional",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Immutable",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Object Oriented",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Composable",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Orthogonal",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Service-Oriented/Componentized",
    tags: ["services"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.HOLD,
    label: "Monolithic",
    tags: ["services"],
    moved: Moved.OUT
  },
  {
    quadrant: 0,
    ring: Rings.HOLD,
    label: "Threaded Concurrency",
    tags: ["services"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Cooperative Concurrency",
    tags: ["services"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.HOLD,
    label: "REST APIs",
    tags: ["services", "apis"],
    moved: Moved.OUT
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "JSON APIs",
    notes: "Preferred for external facing APIs. For internal only APIs, consider GraphQL.",
    tags: ["apis"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "GraphQL",
    tags: ["apis"],
    moved: Moved.IN
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "Design By Contract",
    tags: ["programming"],
    moved: Moved.NO
  },
  {
    quadrant: 0,
    ring: Rings.ADOPT,
    label: "TDD",
    tags: ["programming"],
    moved: Moved.NO
  },

  // Infrastructure
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Docker",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Kubernetes",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Grafana",
    tags: ["monitoring"],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Vault",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Consul",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.HOLD,
    label: "AWS ELBs",
    tags: [],
    moved: Moved.OUT
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "AWS ALBs",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Kamailio",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Nginx",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Logstash",
    tags: ["logging"],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Kibana",
    tags: ["logging"],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.HOLD,
    label: "Graphite",
    tags: ["monitoring"],
    moved: Moved.OUT
  },
  {
    quadrant: 1,
    ring: Rings.HOLD,
    label: "Statsd",
    tags: ["monitoring"],
    moved: Moved.OUT
  },
  {
    quadrant: 1,
    ring: Rings.ADOPT,
    label: "Prometheus",
    tags: ["monitoring"],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.HOLD,
    label: "Chef",
    tags: [],
    moved: Moved.NO
  },
  {
    quadrant: 1,
    ring: Rings.ASSESS,
    label: "Kustomize",
    tags: [],
    moved: Moved.NO
  },

  // Languages
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Ruby",
    tags: ["language", "ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Python",
    tags: ["language"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "JavaScript",
    tags: ["javascript", "language"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ASSESS,
    label: "Go",
    tags: ["language"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "Elixir",
    tags: ["language"],
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "PHP",
    tags: ["language"],
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.ASSESS,
    label: "Rust",
    tags: ["language"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "C++",
    tags: ["language"],
    moved: Moved.NO
  },

  // Frameworks & Libraries
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Ruby on Rails",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Sinatra",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "Goliath",
    tags: ["ruby"],
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "Event Machine",
    tags: ["ruby", "concurrency"],
    notes: "Should not be used on it's own. If doing concurrent programming, use with EM::Synchrony",
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Event Machine + Synchrony",
    tags: ["ruby", "concurrency"],
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.ASSESS,
    label: "Async",
    tags: ["ruby", "concurrency"],
    moved: Moved.IN
  },
  {
    quadrant: 2,
    ring: Rings.ASSESS,
    label: "NodeJS",
    tags: ["javascript", "concurrency"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "Sidekiq",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "DelayedJob",
    tags: ["ruby"],
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "Unicorn",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.ASSESS,
    label: "Falcon",
    tags: ["ruby"],
    moved: Moved.IN
  },
  {
    quadrant: 2,
    ring: Rings.ADOPT,
    label: "RSpec",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "MiniTest",
    tags: ["ruby"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "RR",
    tags: ["ruby"],
    notes: "Mocking and stubbing library. Exists in web but rspec-mocks should be used instead",
    moved: Moved.OUT
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "PhantomJS",
    tags: ["javascript"],
    moved: Moved.NO
  },
  {
    quadrant: 2,
    ring: Rings.HOLD,
    label: "Capistrano",
    tags: ["deploy"],
    moved: Moved.OUT
  },

  // Data management
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "MySQL",
    tags: ["database"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "PostgreSQL",
    tags: ["database"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "ElasticSearch",
    tags: ["database"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "Kafka",
    tags: ["messaging", "event-driven"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "Kafka Racecar",
    tags: ["messaging", "event-driven"],
    note: "InvocaKafka is the preferred wrapper around Racecar (which is a wrapper around ruby-kafka)",
    url: "https://github.com/Invoca/invoca_kafka",
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "Redis",
    tags: ["database", "cache"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "Memcache",
    tags: ["database", "cache"],
    moved: Moved.OUT
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "AWS ElastiCache",
    tags: ["database", "cache", "aws"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ADOPT,
    label: "AWS S3",
    tags: ["aws"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.ASSESS,
    label: "AWS Dynamo",
    tags: ["database", "aws"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "MongoDB",
    tags: ["database"],
    moved: Moved.OUT
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "Redshift",
    tags: ["database"],
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.HOLD,
    label: "RabbitMQ",
    tags: ["messaging"],
    notes: "BunnyBus is the Invoca library built on top of RabbitMQ",
    moved: Moved.NO
  },
  {
    quadrant: 3,
    ring: Rings.TRIAL,
    label: "DataBricks",
    tags: ["machine-learning"],
    moved: Moved.NO
  }
];
