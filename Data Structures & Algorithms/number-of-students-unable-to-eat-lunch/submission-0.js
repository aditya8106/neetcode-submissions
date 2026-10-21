class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count0 = students.filter(s => s === 0).length;
            let count1 = students.length - count0;

                for (let sandwich of sandwiches) {
                        if (sandwich === 0) {
                                    if (count0 === 0) return count1;
                                                count0--;
                                                        } else {
                                                                    if (count1 === 0) return count0;
                                                                                count1--;
                                                                                        }
                                                                                            }

                                                                                                return 0;
    }
}
