class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let missingNumber = 0;

        nums = nums.sort();

        nums.forEach((currentNumber,index) => {
            if(index <= nums.length) {
                let nextPossibleNumber = currentNumber + 1;
                if(nextPossibleNumber !== nums[index+1] && ( nextPossibleNumber <= nums.length) ) {
                    missingNumber = nextPossibleNumber;
                }
            }
        });

        return missingNumber;
    }
}
