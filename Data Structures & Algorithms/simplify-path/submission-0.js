class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack =[]
        for(let part of path.split('/')){
            if(part == '' || part === '.'){
                continue
            }
            else if(part =='..'){
                stack.pop()
            }
            else{
                stack.push(part)
            }
        }
        return '/' + stack.join("/")
    }
}
