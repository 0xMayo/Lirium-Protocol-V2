export default class Miner {
    constructor({ lirium, wallet, transactionPool, pubnubServer}) {
        this.lirium = lirium;
        this.wallet = wallet;
        this.transactionPool = transactionPool;
        this.pubnubServer = pubnubServer;
    };

    mineTransaction(){
        const validTransactions = Object.values(this.transactionPool.transactionMap);

        this.lirium.addBlock({ data: validTransactions });

        this.pubnubServer.broadcast();

        this.transactionPool.clearTransactionPool();
    }
}