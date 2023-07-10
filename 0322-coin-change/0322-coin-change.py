class Solution(object):
    def __init__(self):
        self.memo = {}
        
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        if amount in self.memo:
            return self.memo[amount]
        
        if amount == 0:
            return 0
        
        if amount < 0:
            return -1
        
        possible = False
        min_coins = float('inf')
        
        for coin in coins:
            if coin <= amount:
                possible = True
                result = self.coinChange(coins, amount-coin)
                
                if result != -1:
                    min_coins = min(min_coins, result)
        
        if possible and min_coins != float('inf'):
            self.memo[amount] = 1 + min_coins
        else:
            self.memo[amount] = -1
            
        return self.memo[amount]
                