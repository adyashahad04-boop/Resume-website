document.documentElement.classList.add('js');

// rainbow progress bar
var bar = document.getElementById('progress');
window.addEventListener('scroll', function () {
  var h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
});

// fade-in on scroll
var items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
} else { items.forEach(function (el) { el.classList.add('show'); }); }

// confetti
var colours = ['#ff9cbc', '#ffe36e', '#9be8cf', '#c9b3ff', '#ffb38a', '#2f5bff'];
function confetti(n) {
  for (var i = 0; i < n; i++) {
    var c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
    c.style.animationDelay = Math.random() * 0.6 + 's';
    document.body.appendChild(c);
    setTimeout(function (el) { el.remove(); }.bind(null, c), 3200);
  }
}
document.getElementById('surprise').addEventListener('click', function () {
  confetti(60);
  var cs = ['#fbf6ec', '#fff4e6', '#f1ecff', '#eafaf4', '#fff0f5'];
  document.body.style.backgroundColor = cs[Math.floor(Math.random() * cs.length)];
});
document.querySelectorAll('.doodle').forEach(function (d) {
  d.addEventListener('click', function () { confetti(25); });
});
