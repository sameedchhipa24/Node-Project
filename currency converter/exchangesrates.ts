

 interface exchangesrates {
  "Pakistani Rupee(PKR)": {
    "Pakistani Rupee(PKR)": number
    "United States Dollar(USD)": number;
    "Saudi Arabia(RIYAL)": number;
    "EURO(\u20AC)": number;
    }
"United States Dollar(USD)": {
  "United States Dollar(USD)": number
  "Pakistani Rupee(PKR)": number;
  "Saudi Arabia(RIYAL)": number;
  "EURO(\u20AC)": number;
}
"Saudi Arabia(RIYAL)": {
  "Saudi Arabia(RIYAL)": number
  "Pakistani Rupee(PKR)": number;
  "United States Dollar(USD)": number;
  "EURO(\u20AC)": number;
},
"EURO(€)": {
  "EURO(\u20AC)": number;
  "Pakistani Rupee(PKR)": number;
  "United States Dollar(USD)": number;
  "Saudi Arabia(RIYAL)": number;
}
}

export const exchangeRates: exchangesrates = {
  "Pakistani Rupee(PKR)": {
    "Pakistani Rupee(PKR)": 1.0,
    "United States Dollar(USD)": 0.00348,
    "Saudi Arabia(RIYAL)": 0.0125,
    "EURO(€)": 0.0033,
  },
  "United States Dollar(USD)": {
    "United States Dollar(USD)": 1.0,
    "Pakistani Rupee(PKR)": 287,
    "Saudi Arabia(RIYAL)": 3.75,
    "EURO(€)": 0.94,
  },
  "Saudi Arabia(RIYAL)": {
    "Saudi Arabia(RIYAL)":1.00,
    "Pakistani Rupee(PKR)": 76,
    "United States Dollar(USD)": 0.2666,
    "EURO(€)": 0.25,
  },
  "EURO(€)": {
    "EURO(€)":1.00,
    "Pakistani Rupee(PKR)": 306.39,
    "United States Dollar(USD)": 1.0638,
    "Saudi Arabia(RIYAL)": 4,
  },
};

