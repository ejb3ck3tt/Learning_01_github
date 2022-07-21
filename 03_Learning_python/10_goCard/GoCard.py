class GoCard():

    def __init__(self, currBalance):
        self.currBalance = currBalance

    def ride(self, amt):
        self.currBalance -= amt
        return self.currBalance

    def top(self, amt):
        self.currBalance += amt
        return self.currBalance

    def balance(self):
        return self.currBalance


