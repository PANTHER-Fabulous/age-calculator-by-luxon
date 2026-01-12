const {DateTime} = luxon;

function calculateAge() {
    const hbInput = document.getElementById('hb').value;
    if(!hbInput) {
        document.getElementById('result').textContent = 'Please enter your date of birth.';
        return;
    }
   // convert input to DateTime
    const birthDate = DateTime.fromISO(hbInput);
      if (!birthDate.isValid) {
        document.getElementById('result').textContent = 'Invalid date format. Please use YYYY-MM-DD.';
        return;
    }

  // get current date
    const today = DateTime.now();

  // calculate age
    const age = Math.floor(today.diff(birthDate, 'years').years);
    document.getElementById('result').textContent = `Your age is ${age} years.`;
}