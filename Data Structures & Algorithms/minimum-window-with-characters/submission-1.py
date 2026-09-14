class Solution:
    def minWindow(self, s: str, t: str) -> str:
        # No substring exists because t is larger than s
        if len(t) > len(s):
            return ""

        # Create a map of char -> frequency from t
        need = {}
        # Define a char -> frequency map for the current window
        window = {}

        # Fill up the needed freq map
        for char in t:
            need[char] = need.get(char, 0) + 1

        # Define the required unique chars (length of the freq map)
        requiredUniqueChars = len(need)
        # Define the current unique chars in the window
        matchedCharQuantities = 0

        # Define the starting left index
        left = 0
        # Define the shortest length of the window containing all requiredUniqueChars
        shortestLength = float("inf")
        # Define the best position for left
        shortestLeft = 0

        # Loop through s to build our window
        for right in range(len(s)):
            currentChar = s[right]
            
            # Increment frequency of currentChar in window freq map
            window[currentChar] = window.get(currentChar, 0) + 1

            # If the current char is in the need map and quantity matches
            if currentChar in need and need[currentChar] == window[currentChar]:
                matchedCharQuantities += 1 # Increment matched quantities

            # When we have all the chars and matching quantities
            # Attempt to update the shortestLength and shortestLeft variables
            while requiredUniqueChars == matchedCharQuantities:
                # Get the width of the current window, 0 index adjusted
                currentLength = right - left + 1

                if currentLength < shortestLength:
                    shortestLength = currentLength
                    shortestLeft = left

                leftChar = s[left]
                # Decrement the frequency of the left char by 1, to see if we can move right
                window[leftChar] -= 1

                if (
                    leftChar in need 
                    and window[leftChar] < need[leftChar]
                ):
                    # The window has too few of leftChar, decrement matches
                    matchedCharQuantities -= 1

                # Move the window right
                left += 1

        # No valid widows were found, return default case
        if shortestLength == float('inf'):
            return ""

        return s[shortestLeft : shortestLeft + shortestLength]

                

            




