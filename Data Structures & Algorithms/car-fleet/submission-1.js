class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // Create an array of { target, speed } pairs
        const cars = [];

        // Create a monotonic stack for time to destination for each car
        // (increasing only, as lower times mean a car would become part of the slower car's fleet)
        const timeStack = [];

        // Fill out the array of pairs for each car
        for (let i = 0; i < speed.length; i++) {
            const pair = {};
            pair.position = position[i];
            pair.speed = speed[i];

            cars.push(pair);
        };

        // Sort descending by position (closest to target to longest to target)
        cars.sort((carA, carB) => {
            return carB.position - carA.position;
        });

        // Loop through cars utilizing the time stack to count fleets
        // Check the closest cars first, store slowest time's (increasing only),
        // as those represent net new fleets (the farther away slowing moving car will never meet)
        cars.forEach((car) => {
            const timeToArrival = (target - car.position) / car.speed;

            timeStack.push(timeToArrival);

            // This car will reach the destination sooner, meaning it will join the fleet
            if (timeStack.length >= 2 && timeStack.at(-1) <= timeStack.at(-2)) {
                // We only want unique fleets, so get rid of the extra car
                timeStack.pop();
            }
        })

        return timeStack.length;
    }
}
