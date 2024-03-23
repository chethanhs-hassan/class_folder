//we want to represent the BankAccount entity
//Accnt holder name,accnt number,ifsc,branch name,balance.

class BankAccount {
    constructor(name,accnt_number,ifsc,branch_name,balance)
    {
      this.name = name;
      this.accnt_number = accnt_number;
      this.ifsc = ifsc;
      this.branch_name = branch_name;
      this.balance = balance;
    }

    credit(amount)
    {
      this.balance += amount
      console.log(`Amount credited:${amount} Available balance:${this.balance}`)
    }

    debit(amount)
    {
        if(this.balance>amount)
        {
            this.balance -=amount;
            console.log(`Amount debited:${amount} Available balance:${this.balance}`)
        }
        else
        {
          console.log("Insufficient balance")
        }
    }

    Check_balance()
    {

      console.log(`Available balance:${this.balance }`)

    }

    Add_interest()
    {
      this.balance +=(8/100 * this.balance)
    }
}


class savingaccount extends BankAccount
{
       constructor(name,accnt_number,ifsc,branch_name,balance)
       {
        super(name,accnt_number,ifsc,branch_name,balance)
        this.interest = 6

         }

         Add_interest()
         {
          console.log("Saving account ......Add_interest")

            this.balance +=(this.interest/100   *  this.balance)
         }
}

class PersonalLoanAccnt extends BankAccount
{
       constructor(name,accnt_number,ifsc,branch_name,balance,emi,loan_amt_sanctioned,interest)
       {
        super(name,accnt_number,ifsc,branch_name,balance)
         this.interest = interest
        this.emi = emi
        this.principal_amt = loan_amt_sanctioned
        this.loan_amt_balance =  this.principal_amt +  interest*num_yrs*this.principal_amt
        

         }

         pay_emi()
         {
          if(this.loan_amt_balance>this.emi){
          this.loan_amt_balance -=this.emi
         }
         else{
          console.log("No loan amount balance left")
         }
        }

        get_loan_balance(){
          return  this.loan_amt_balance 
        }

}


let myaccount = new BankAccount("vikas",1000642317,"IcIcI00072","HASSAN",500)
let mysavingaccount = new savingaccount("ravi",1000642313,"IcIcI000722","HASSAN",6000)

myaccount.debit(600)
myaccount.credit(1000)
myaccount.Check_balance()
myaccount.Add_interest()
myaccount.debit(100)

mysavingaccount.Check_balance()
mysavingaccount.Add_interest()