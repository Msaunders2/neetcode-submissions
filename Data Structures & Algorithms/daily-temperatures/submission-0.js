class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const len = temperatures.length;
        let stack = [];
        let res = new Array(len).fill(0);

        for(let i = 0; i < len; i++){
            for(let index of stack){
                res[index]++;
            }

            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                stack.pop();
            }
            stack.push(i);
        }

        for (const idx of stack) {
            res[idx] = 0;
        }

        return res;

    }
}
