class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a, b) => a - b);
        let leftOverMoney = money;
        for (let i = 0; i<2; i++){
            leftOverMoney = leftOverMoney - prices[i];
        }

        if(leftOverMoney >= 0){
            return leftOverMoney;
        }

        return money;
    }
}
