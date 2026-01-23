function checkHealth() {
  fetch("/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("status").innerText =
        data.message + " ✅";
    });
}

function simulateTraffic() {
  let t = document.getElementById("traffic");
  t.innerText = "High traffic detected... Auto-scaling triggered 🚀";

  setTimeout(() => {
    t.innerText = "Traffic normalized. System stable ✅";
  }, 3000);
}
