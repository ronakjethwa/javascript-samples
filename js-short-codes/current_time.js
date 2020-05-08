// get the current time with day of the week

class Clock {
  constructor(template) {
    this.template = template;
  }

  render() {
    let date = new Date();
    let weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    
    let weekDay = weekday[date.getDay()];

    console.log(output + " on " + weekDay);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 10000);
  }
}

let myClock = new Clock('h:m:s');
myClock.start();