class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate = false;

        for(let i=0;i < nums.length;i++) {
            for(let j=0; j < nums.length;j++) {
                // not same index
                if(i !== j) {
                    if(nums[i] === nums[j]) {
                        duplicate = true;
                        break;
                    }
                }
            }

            // not to run anymore if duplicate is true
            if(duplicate) {
                break;
            }
        }

        return duplicate;
    }
}
