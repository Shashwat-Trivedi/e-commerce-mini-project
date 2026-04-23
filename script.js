const models = {
  subscription: {
    label: "Subscription Commerce",
    summary:
      "Best when your product has repeat demand and your strategy prioritizes predictable recurring revenue and retention.",
  },
  affiliate: {
    label: "Affiliate-Led Commerce",
    summary:
      "Best when startup capital is lean and growth can come from performance-based channels, content, and partnerships.",
  },
  d2c: {
    label: "Direct-to-Consumer (D2C)",
    summary:
      "Best when you want brand control, stronger margins, and direct ownership of customer relationships.",
  },
  marketplace: {
    label: "Two-Sided Marketplace",
    summary:
      "Best when you can attract both buyers and sellers, and build systems that balance supply, demand, trust, and transactions.",
  },
};

const criteria = [
  {
    key: "capital",
    label: "1) Available startup capital",
    options: [
      { value: "low", label: "Low", score: { affiliate: 3, subscription: 1, d2c: 0, marketplace: 1 } },
      { value: "medium", label: "Medium", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "high", label: "High", score: { affiliate: 1, subscription: 2, d2c: 3, marketplace: 3 } },
    ],
  },
  {
    key: "repeatPurchase",
    label: "2) Product purchase frequency",
    options: [
      { value: "rare", label: "Mostly one-time", score: { affiliate: 2, subscription: 0, d2c: 2, marketplace: 2 } },
      { value: "occasional", label: "Occasional repeat", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "frequent", label: "Frequent repeat", score: { affiliate: 1, subscription: 4, d2c: 2, marketplace: 1 } },
    ],
  },
  {
    key: "brandControl",
    label: "3) Need for end-to-end brand control",
    options: [
      { value: "low", label: "Low", score: { affiliate: 3, subscription: 1, d2c: 0, marketplace: 2 } },
      { value: "medium", label: "Moderate", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "high", label: "High", score: { affiliate: 0, subscription: 2, d2c: 4, marketplace: 2 } },
    ],
  },
  {
    key: "contentStrength",
    label: "4) Content/community distribution strength",
    options: [
      { value: "low", label: "Limited", score: { affiliate: 0, subscription: 1, d2c: 2, marketplace: 2 } },
      { value: "medium", label: "Growing", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "high", label: "Strong", score: { affiliate: 4, subscription: 2, d2c: 2, marketplace: 2 } },
    ],
  },
  {
    key: "opsComplexity",
    label: "5) Operational complexity you can handle",
    options: [
      { value: "low", label: "Keep it simple", score: { affiliate: 3, subscription: 2, d2c: 1, marketplace: 0 } },
      { value: "medium", label: "Moderate", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "high", label: "Comfortable with complexity", score: { affiliate: 1, subscription: 2, d2c: 2, marketplace: 4 } },
    ],
  },
  {
    key: "inventory",
    label: "6) Inventory ownership preference",
    options: [
      { value: "none", label: "Avoid inventory", score: { affiliate: 4, subscription: 1, d2c: 0, marketplace: 2 } },
      { value: "some", label: "Limited inventory", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "full", label: "Willing to own inventory", score: { affiliate: 0, subscription: 3, d2c: 4, marketplace: 1 } },
    ],
  },
  {
    key: "revenueStyle",
    label: "7) Revenue preference",
    options: [
      { value: "quick", label: "Faster campaign-driven cash flow", score: { affiliate: 3, subscription: 1, d2c: 2, marketplace: 1 } },
      { value: "balanced", label: "Balanced", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "predictable", label: "Predictable recurring revenue", score: { affiliate: 1, subscription: 4, d2c: 2, marketplace: 2 } },
    ],
  },
  {
    key: "networkPotential",
    label: "8) Ability to attract both supply and demand",
    options: [
      { value: "low", label: "Low", score: { affiliate: 2, subscription: 2, d2c: 3, marketplace: 0 } },
      { value: "medium", label: "Moderate", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "high", label: "High", score: { affiliate: 1, subscription: 2, d2c: 1, marketplace: 5 } },
    ],
  },
  {
    key: "regulationComfort",
    label: "9) Compliance and trust-process maturity",
    options: [
      { value: "basic", label: "Basic processes only", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 0 } },
      { value: "developing", label: "Developing compliance stack", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "advanced", label: "Advanced checks and policies", score: { affiliate: 1, subscription: 2, d2c: 2, marketplace: 4 } },
    ],
  },
  {
    key: "retentionFocus",
    label: "10) Strategic focus for the next 12 months",
    options: [
      { value: "acquisition", label: "Aggressive acquisition", score: { affiliate: 3, subscription: 1, d2c: 2, marketplace: 2 } },
      { value: "mixed", label: "Balanced", score: { affiliate: 2, subscription: 2, d2c: 2, marketplace: 2 } },
      { value: "retention", label: "Retention and LTV", score: { affiliate: 1, subscription: 4, d2c: 3, marketplace: 2 } },
    ],
  },
];

const plannerForm = document.querySelector("#planner-form");
const barsRoot = document.querySelector("#bars");
const resultBox = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const resultPoints = document.querySelector("#result-points");
const resultHybrid = document.querySelector("#result-hybrid");
const confidencePill = document.querySelector("#confidence-pill");

function renderForm() {
  const fragment = document.createDocumentFragment();
  criteria.forEach((criterion) => {
    const field = document.createElement("div");
    field.className = "field";

    const label = document.createElement("label");
    label.htmlFor = criterion.key;
    label.textContent = criterion.label;

    const select = document.createElement("select");
    select.id = criterion.key;
    select.name = criterion.key;

    criterion.options.forEach((option) => {
      const optionEl = document.createElement("option");
      optionEl.value = option.value;
      optionEl.textContent = option.label;
      select.appendChild(optionEl);
    });

    field.append(label, select);
    fragment.appendChild(field);
  });
  plannerForm.appendChild(fragment);
}

function renderBars() {
  const fragment = document.createDocumentFragment();
  Object.entries(models).forEach(([key, model]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-top">
        <span>${model.label}</span>
        <strong id="score-${key}">0</strong>
      </div>
      <div class="meter"><div id="fill-${key}" class="fill"></div></div>
    `;
    fragment.appendChild(row);
  });
  barsRoot.appendChild(fragment);
}

function collectAnswers() {
  const values = {};
  criteria.forEach((criterion) => {
    values[criterion.key] = document.querySelector(`#${criterion.key}`).value;
  });
  return values;
}

function computeScores(answers) {
  const scores = { subscription: 0, affiliate: 0, d2c: 0, marketplace: 0 };
  const reasons = { subscription: [], affiliate: [], d2c: [], marketplace: [] };

  criteria.forEach((criterion) => {
    const selected = criterion.options.find((option) => option.value === answers[criterion.key]);
    Object.keys(scores).forEach((modelKey) => {
      const delta = selected.score[modelKey];
      scores[modelKey] += delta;
      if (delta >= 4) reasons[modelKey].push(`${criterion.label.replace(/^\d+\)\s/, "")}: ${selected.label}`);
    });
  });

  return { scores, reasons };
}

function updateBars(scores) {
  const max = Math.max(...Object.values(scores));
  Object.keys(scores).forEach((modelKey) => {
    const score = scores[modelKey];
    const pct = max ? Math.round((score / max) * 100) : 0;
    document.querySelector(`#score-${modelKey}`).textContent = score;
    document.querySelector(`#fill-${modelKey}`).style.width = `${pct}%`;
  });
}

function confidenceFromGap(topScore, secondScore) {
  const gap = topScore - secondScore;
  if (gap >= 6) return { label: "High Confidence", tone: "ok" };
  if (gap >= 3) return { label: "Moderate Confidence", tone: "warn" };
  return { label: "Hybrid Opportunity", tone: "warn" };
}

function setConfidencePill(confidence) {
  confidencePill.textContent = confidence.label;
  confidencePill.style.color = confidence.tone === "ok" ? "var(--ok)" : "var(--warn)";
}

function renderResult(scores, reasons) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topModel, topScore] = sorted[0];
  const [runnerModel, runnerScore] = sorted[1];
  const top = models[topModel];
  const runner = models[runnerModel];

  resultTitle.textContent = `Recommended: ${top.label}`;
  resultSummary.textContent = top.summary;

  resultPoints.innerHTML = "";
  const points = reasons[topModel].length
    ? reasons[topModel].slice(0, 4)
    : ["Your selected profile aligns with this model across capital, growth, and operating preferences."];

  points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    resultPoints.appendChild(li);
  });

  const confidence = confidenceFromGap(topScore, runnerScore);
  setConfidencePill(confidence);

  if (topScore - runnerScore <= 2) {
    resultHybrid.textContent = `Near tie detected: consider a hybrid of ${top.label} + ${runner.label} for phased execution.`;
  } else {
    resultHybrid.textContent = `Second-best fit: ${runner.label}. Keep as a fallback if assumptions change.`;
  }

  resultBox.classList.remove("hidden");
}

document.querySelector("#analyze-btn").addEventListener("click", () => {
  const answers = collectAnswers();
  const { scores, reasons } = computeScores(answers);
  updateBars(scores);
  renderResult(scores, reasons);
});

document.querySelector("#reset-btn").addEventListener("click", () => {
  plannerForm.reset();
  const zeros = { subscription: 0, affiliate: 0, d2c: 0, marketplace: 0 };
  updateBars(zeros);
  confidencePill.textContent = "Awaiting Input";
  confidencePill.style.color = "";
  resultBox.classList.add("hidden");
});

renderForm();
renderBars();
