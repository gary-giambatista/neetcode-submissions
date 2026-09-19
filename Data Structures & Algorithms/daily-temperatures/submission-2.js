class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const answer = new Array(temperatures.length).fill(0);
        const dayStack = [];

        for (let day = 0; day < temperatures.length; day++) {
            const currentTemp = temperatures[day];

            // Current Day is warmer than the previous day
            while (dayStack.length > 0 
            && temperatures[dayStack[dayStack.length - 1]] < currentTemp) {
                const previousDay = dayStack.pop();

                const dayDifference = day - previousDay;

                answer[previousDay] = dayDifference;
            }

            // Push the current day onto the dayStack (index)
            dayStack.push(day);
        }
        return answer;
    }
}
