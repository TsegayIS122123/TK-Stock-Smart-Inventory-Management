// chart.js
// Frontend-only charts built from existing tables

// ======================
// SALES CHART
// ======================
let salesChart = null;

function getSalesDataFromTable() {
  const rows = document.querySelectorAll("#salesReportTable tr");
  const grouped = {};

  rows.forEach((row) => {
    const cells = row.children;
    if (cells.length < 4) return;

    const date = cells[0].textContent.trim();
    const revenue = parseFloat(cells[3].textContent.replace(/[^0-9.]/g, ""));

    if (!isNaN(revenue)) {
      grouped[date] = (grouped[date] || 0) + revenue;
    }
  });

  return { labels: Object.keys(grouped), values: Object.values(grouped) };
}

function renderSalesChart() {
  const canvas = document.getElementById("salesChart");
  if (!canvas) return;

  if (salesChart) salesChart.destroy();

  salesChart = new Chart(canvas.getContext("2d"), {
    type: "bar",
    data: {
      labels: getSalesDataFromTable().labels,
      datasets: [
        {
          label: "Revenue",
          data: getSalesDataFromTable().values,
          borderWidth: 1,
        },
      ],
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } },
  });
}

// ======================
// INVENTORY CHART
// ======================
let inventoryChart = null;

function getInventoryDataFromTable() {
  const rows = document.querySelectorAll("#inventoryReportTable tr");
  const labels = [];
  const values = [];

  rows.forEach((row) => {
    const cells = row.children;
    if (cells.length < 3) return;

    labels.push(cells[0].textContent.trim());
    values.push(parseFloat(cells[2].textContent.replace(/[^0-9.]/g, "")));
  });

  return { labels, values };
}

function renderInventoryChart() {
  const canvas = document.getElementById("inventoryChart");
  if (!canvas) return;

  if (inventoryChart) inventoryChart.destroy();

  inventoryChart = new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels: getInventoryDataFromTable().labels,
      datasets: [
        {
          label: "Stock Value",
          data: getInventoryDataFromTable().values,
          borderWidth: 1,
        },
      ],
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } },
  });
}

// ======================
// PROFIT CHART
// ======================
let profitChart = null;

function getProfitDataFromTable() {
  const rows = document.querySelectorAll("#profitReportTable tr");
  const labels = [];
  const values = [];

  rows.forEach((row) => {
    const cells = row.children;
    if (cells.length < 4) return;

    labels.push(cells[0].textContent.trim()); // Month
    values.push(parseFloat(cells[3].textContent.replace(/[^0-9.]/g, ""))); // Profit
  });

  return { labels, values };
}

function renderProfitChart() {
  const canvas = document.getElementById("profitChart");
  if (!canvas) return;

  if (profitChart) profitChart.destroy();

  profitChart = new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels: getProfitDataFromTable().labels,
      datasets: [
        {
          label: "Profit",
          data: getProfitDataFromTable().values,
          tension: 0.3,
          fill: true,
          borderWidth: 2,
        },
      ],
    },
    options: { responsive: true },
  });
}

// ======================
// CUSTOMER CHART
// ======================
let customerChart = null;

function getCustomerDataFromTable() {
  const rows = document.querySelectorAll("#customerReportTable tr");
  const labels = [];
  const values = [];

  rows.forEach((row) => {
    const cells = row.children;
    if (cells.length < 3) return;

    labels.push(cells[0].textContent.trim()); // Customer
    values.push(parseFloat(cells[2].textContent.replace(/[^0-9.]/g, ""))); // Purchases
  });

  return { labels, values };
}

function renderCustomerChart() {
  const canvas = document.getElementById("customerChart");
  if (!canvas) return;

  if (customerChart) customerChart.destroy();

  customerChart = new Chart(canvas.getContext("2d"), {
    type: "pie",
    data: {
      labels: getCustomerDataFromTable().labels,
      datasets: [
        {
          label: "Total Purchases",
          data: getCustomerDataFromTable().values,
          borderWidth: 1,
        },
      ],
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } },
  });
}

// ======================
// AUTO-UPDATE OBSERVERS
// ======================
function observeTable(tableId, renderFn) {
  const table = document.getElementById(tableId);
  if (!table) return;

  new MutationObserver(renderFn).observe(table, { childList: true });
}

observeTable("salesReportTable", renderSalesChart);
observeTable("inventoryReportTable", renderInventoryChart);
observeTable("profitReportTable", renderProfitChart);
observeTable("customerReportTable", renderCustomerChart);
