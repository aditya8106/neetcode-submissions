class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack =[]
        for(let astr of asteroids){
            let alive = true
            while(alive && stack.length &&stack[stack.length-1] > 0 &&  astr <0){
                let top = stack[stack.length -1]
                if(Math.abs(top) < Math.abs(astr)){
                    stack.pop()
                    
                }else if(Math.abs(top) === Math.abs(astr)){
                    stack.pop()
                    alive = false
                
                } else {
                    alive = false
                }
                
            }
            if(alive){
                stack.push(astr)
            }

        }
        return stack
    }
}
