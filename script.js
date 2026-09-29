const wheel = document.querySelector('#wheel');
const button = document.querySelector('#chargeButton');
const meterFill = document.querySelector('#meterFill');
const status = document.querySelector('#status');
const foods = ['Noodles', 'Burger', 'Sushi', 'Pizza', 'Salad', 'Tacos', 'Fried Rice', 'Sandwich'];

let startTime = 0;
let charging = false;
let currentRotation = 0;
let meterTimer;
const maxCharge = 3000;

function updateMeter() {
  const elapsed = Math.min(Date.now() - startTime, maxCharge);
  const percent = (elapsed / maxCharge) * 100;
  meterFill.style.width = `${percent}%`;
  status.textContent = `Charging: ${Math.ceil(percent)}%`;
  if (charging) meterTimer = requestAnimationFrame(updateMeter);
}

function startCharge(event) {
  if (button.disabled) return;
  event.preventDefault();
  charging = true;
  startTime = Date.now();
  button.textContent = 'Release to spin!';
  button.setPointerCapture?.(event.pointerId);
  updateMeter();
}

function releaseCharge() {
  if (!charging) return;
  charging = false;
  cancelAnimationFrame(meterTimer);
  const held = Math.min(Date.now() - startTime, maxCharge);
  const power = Math.max(held / maxCharge, 0.08);
  const turns = 0.25 + power * 8;
  const randomAngle = Math.random() * 360;
  const finalRotation = currentRotation + turns * 360 + randomAngle;
  const duration = 0.55 + power * 4.5;
  button.disabled = true;
  button.textContent = 'Spinning…';
  status.textContent = power < .2 ? 'A light spin…' : 'Charged up — let’s see!';
  wheel.style.transition = `transform ${duration}s cubic-bezier(.12,.7,.08,1)`;
  wheel.style.transform = `rotate(${finalRotation}deg)`;
  currentRotation = finalRotation;

  window.setTimeout(() => {
    const normalized = ((finalRotation % 360) + 360) % 360;
    const index = Math.round((360 - normalized) / 45) % 8;
    status.textContent = `Lunch today: ${foods[index]}!`;
    meterFill.style.width = '0';
    button.disabled = false;
    button.textContent = 'Spin again';
  }, duration * 1000);
}

button.addEventListener('pointerdown', startCharge);
button.addEventListener('pointerup', releaseCharge);
button.addEventListener('pointercancel', releaseCharge);
button.addEventListener('lostpointercapture', releaseCharge);
