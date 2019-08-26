/* 
  This code that looks at a set of temperature readings 
  and determines whether any of them fall outside of an operating range 
*/
const station = { name: "ZB1",
                    readings: [
                      {temp: 47, time: "2016-11-10 09:10"},
                      {temp: 53, time: "2016-11-10 09:20"},
                      {temp: 58, time: "2016-11-10 09:30"},
                      {temp: 53, time: "2016-11-10 09:40"},
                      {temp: 51, time: "2016-11-10 09:50"},
                    ]
                  };
				  
/* 
  This function finds the readings that are outside a temperature range
*/
function readingsOutsideRange(station, min, max) {
	return station.readings
      .filter(r => r.temp < min || r.temp > max);
  }
  
/*
  It might be called from some code like this:
*/
alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
