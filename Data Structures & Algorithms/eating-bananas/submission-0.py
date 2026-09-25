class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # Define the smallest, and largest bananas per hour (rates)
        smallest = 1
        largest = max(piles)

        # Set answer to max rate, as this is the worst case scenario
        answer = largest

        while smallest <= largest:
            # Calculate the middle of smallest and largest (rates)
            rate = (smallest + largest) // 2

            # Create a variable for counting the time needed to eat all piles
            total_time = 0

            # At the current rate how long would it take each pile to be ate
            for pile in piles:
                total_time += math.ceil(pile / rate)

            if total_time <= h:
                # This rate is acceptable, set it
                answer = rate

                # Check if we can use a slower rate,
                # given we are after the min rate
                largest = rate - 1
            else:
                # Too slow, increase the rate
                smallest = rate + 1

        return answer
