/*import the algorand development kit*/
import algosdk from "algosdk"; 

/* it create a new account and save it */
const myaccount = algosdk.generateAccount();

/* this lines of code print the values for easy access */
console.log("Account created. Save address & Mnemonic!");
console.log("Account Address = " + myaccount.addr);
let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
console.log("Account Mnemonic = " + account_mnemonic); 

