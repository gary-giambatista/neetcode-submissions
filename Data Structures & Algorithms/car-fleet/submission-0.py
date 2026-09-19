class Solution:
    def carFleet(
        self,
        target: int,
        position: list[int],
        speed: list[int]
    ) -> int:

        # Create a list of tuples, where (position, speed) pairs represent an index (car)
        cars = list(zip(position, speed))
        # Sort cars descending based upon position
        cars.sort(reverse=True)

        stack = []

        for position, speed in cars:
            # Calculate how long the car needs to reach the target (time = distance remaining / speed)
            time = (target - position) / speed

            stack.append(time)

            # Whenever a faster (smaller time) is added, pop it off, as it would catch the slower
            # car and become part of the fleet
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()

        # All remaining cars will be their own fleet
        return len(stack)