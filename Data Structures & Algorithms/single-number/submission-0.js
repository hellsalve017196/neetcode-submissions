class Solution {
    findDuplicate(currentNumber,nums,currentIndex = 0,storeDuplicate) {
        let duplicate = false;

        if(storeDuplicate) {
            duplicate = storeDuplicate;
        }
    
        // done with traversal
        if(currentIndex >= nums.length) {
            return duplicate;
        }
        else {
            // check if current number is duplicated
            if(nums.indexOf(currentNumber) !== currentIndex) {
                if(currentNumber === nums[currentIndex]) {
                    duplicate = true;    
                }
            }

            currentIndex++;
            return this.findDuplicate(currentNumber,nums,currentIndex,duplicate);
        }
    };

    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let notDuplicateNumber;

        nums.forEach((currentNumber) => {
            let hasDuplocate = this.findDuplicate(currentNumber,nums);

            if(!hasDuplocate) {
                notDuplicateNumber = currentNumber;
            }  
        });

        return notDuplicateNumber;
    }
}
