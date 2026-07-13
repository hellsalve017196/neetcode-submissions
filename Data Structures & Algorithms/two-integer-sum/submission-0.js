class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arrayIndex = [];

        for(let i=0;i < nums.length;i++) {
            for(let j=0;j < nums.length;j++) {
                if(i !== j) {
                    let neighBourTotal = nums[i] + nums[j];

                    if(neighBourTotal === target) {
                        arrayIndex.push(i);
                        arrayIndex.push(j);
                        break;
                    }
                }
            }

            if(arrayIndex.length > 0) {
                break;
            }
        }

        return arrayIndex;
    }
}
