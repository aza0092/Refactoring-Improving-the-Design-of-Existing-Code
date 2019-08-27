//A utility company installs its services in sites.

class Site {
  get customer() {return this._customer;}
}

//There are various properties of the customer class; I'll consider three of them.

class Customer {

  get name()            {...}
  get billingPlan()     {...}
  set billingPlan(arg)  {...}
  get paymentHistory()  {...}
}

// Most of the time, a site has a customer, 
// but sometimes there isn't one. Someone may have moved out and I don't yet know who, 
// if anyone, has moved in. When this happens, 
// the data record fills the customer field with the string "unknown". 
// Because this can happen, clients of the site need to be able to handle an unknown customer. 
// Here are some example fragments:

client 1…

  const aCustomer = site.customer;
  // ... lots of intervening code ...
  let customerName;
  if (aCustomer === "unknown") customerName = "occupant";
  else customerName = aCustomer.name;
client 2…

  const plan = (aCustomer === "unknown") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
client 3…

  if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;
client 4…

  const weeksDelinquent = (aCustomer === "unknown") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;