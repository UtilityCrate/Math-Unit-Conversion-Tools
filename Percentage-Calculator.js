
function calculatePercentage() {
  const percent = parseFloat(document.getElementById("percentValue").value);
  const number = parseFloat(document.getElementById("ofValue").value);
  const result = document.getElementById("percentageResult");

  if (isNaN(percent) || isNaN(number)) {
    result.innerHTML = `<p class="text-red-600">Please enter valid numbers.</p>`;
    return;
  }

  const value = (percent / 100) * number;
  result.innerHTML = `
    <p><strong>${percent}%</strong> of <strong>${number}</strong> is <strong>${value.toFixed(2)}</strong>.</p>
  `;
}

