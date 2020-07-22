(function bank() {
    'use strict';


    const performTransaction = function (amount) {
        this.balance += amount;
    };

    const account1 = {
        balance: 0,
        // performTransaction: function (amount) {
        //     this.balance += amount;
        // }

    };

    const account2 = {
        balance: 0,
        // performTransaction: function (amount) {
        //     this.balance += amount;
        // }

    };

    // account1.performTransaction(200);
    // account1.performTransaction(-50);
    // console.log(account1.balance);

    // account2.performTransaction(400);
    // account2.performTransaction(-100);
    // console.log(account2.balance);

    performTransaction.call(account1, 200);
    performTransaction.apply(account1, [-50]);
    console.log(account1.balance);

    let performTransAccount2 = performTransaction.bind(account2);
    performTransAccount2(400);
    performTransAccount2(-100);
    console.log(account2.balance);
}());

