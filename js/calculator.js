// =========================================================
// MAKSOLUTIONS - Loan Calculator
// =========================================================

const INTEREST_RATE = 30;
const LOAN_TERM_DAYS = 30;

// =========================================================
// ELEMENTS
// =========================================================

const calculator = document.getElementById("loanCalculator");

const loanAmountInput = document.getElementById("loanAmount");

const interestRateInput = document.getElementById("interestRate");

const displayLoanAmount = document.getElementById("displayLoanAmount");

const displayInterest = document.getElementById("displayInterest");

const displayTotal = document.getElementById("displayTotal");

// =========================================================
// FORMAT CURRENCY
// =========================================================

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// =========================================================
// CALCULATE
// =========================================================

function calculateLoan(amount) {
  const interest = amount * (INTEREST_RATE / 100);

  const total = amount + interest;

  return {
    amount,
    interest,
    total,
  };
}

// =========================================================
// UPDATE DISPLAY
// =========================================================

function updateCalculator() {
  const amount = Number(loanAmountInput.value);

  if (!amount || amount <= 0) {
    displayLoanAmount.textContent = "R 0.00";

    displayInterest.textContent = "R 0.00";

    displayTotal.textContent = "R 0.00";

    return;
  }

  const result = calculateLoan(amount);

  displayLoanAmount.textContent = formatCurrency(result.amount);

  displayInterest.textContent = formatCurrency(result.interest);

  displayTotal.textContent = formatCurrency(result.total);
}

// =========================================================
// FORM SUBMIT
// =========================================================

calculator.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = Number(loanAmountInput.value);

  if (!amount || amount <= 0) {
    loanAmountInput.classList.add("is-invalid");

    return;
  }

  loanAmountInput.classList.remove("is-invalid");

  updateCalculator();
});

// =========================================================
// LIVE CALCULATION
// =========================================================

loanAmountInput.addEventListener("input", () => {
  loanAmountInput.classList.remove("is-invalid");

  updateCalculator();
});

// =========================================================
// INITIAL STATE
// =========================================================

interestRateInput.value = INTEREST_RATE;

updateCalculator();
