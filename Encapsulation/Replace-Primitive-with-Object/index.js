class Order {
  constructor(data) {
    this.priority = data.priority;
    // more initialization
  }

// some client use it like this: 
highPriorityCount = orders.filter(o => "high" === o.priority
                                   || "rush" === o.priority).length;
									  