
  class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.targetDate = targetDate;
      this.timerRef = document.querySelector(selector);
      this.daysRef = this.timerRef.querySelector('[data-value="days"]');
      this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
      this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
      this.secsRef = this.timerRef.querySelector('[data-value="secs"]');
      this.start();
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const timeLeft = this.targetDate - Date.now();

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
        const secs = Math.floor((timeLeft / 1000) % 60);

        if (timeLeft <= 0) {
            clearInterval(this.intervalId);
            this.updateClock(0, 0, 0, 0);
            return;
          }

        this.updateClock(days, hours, mins, secs);
      }, 1000);
    }
  
    updateClock(days, hours, mins, secs) {
      this.daysRef.textContent = days
      this.hoursRef.textContent = hours
      this.minsRef.textContent = mins
      this.secsRef.textContent = secs
    }
  }

  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 31, 2025'),
  });