import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab")

      // Remove active class from all tabs and contents
      tabBtns.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      btn.classList.add("active")
      document.getElementById(`${tabId}-content`).classList.add("active")
    })
  })

  // Initialize charts
  initializeCharts()
})

function initializeCharts() {
  // Heart Rate Chart
  const heartRateCtx = document.getElementById("heartRateChart").getContext("2d")
  const heartRateChart = new Chart(heartRateCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Heart Rate (bpm)",
          data: [72, 75, 78, 74, 76, 70, 72],
          borderColor: "#0a5f9e",
          backgroundColor: "rgba(10, 95, 158, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: "#0a5f9e",
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "white",
          titleColor: "#212121",
          bodyColor: "#212121",
          borderColor: "#dadada",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            title: (tooltipItems) => tooltipItems[0].label,
            label: (context) => `${context.parsed.y} bpm`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 60,
          grid: {
            color: "#f0f0f0",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutQuart",
      },
    },
  })

  // Sleep Chart
  const sleepCtx = document.getElementById("sleepChart").getContext("2d")
  const sleepChart = new Chart(sleepCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sleep Duration (hours)",
          data: [7.2, 6.8, 7.5, 8.1, 6.5, 7.8, 7.4],
          borderColor: "#3c92d1",
          backgroundColor: "rgba(60, 146, 209, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: "#3c92d1",
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "white",
          titleColor: "#212121",
          bodyColor: "#212121",
          borderColor: "#dadada",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            title: (tooltipItems) => tooltipItems[0].label,
            label: (context) => `${context.parsed.y} hours`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 5,
          grid: {
            color: "#f0f0f0",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutQuart",
      },
    },
  })
}
