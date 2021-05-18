/**
 * @param {string[]} paths
 * @return {string[][]}
 */
 var findDuplicate = function(paths) {
    const map = new Map();
    for (const path of paths) {
        let [p, ...files] = path.split(' ');
        for (const file of files) {
            let [name, content] = file.split(/\(|\)/);
            if (!map.has(content)) {
                map.set(content, []);
            }
            map.get(content).push(`${p}/${name}`);
        }
    }
    return [...map.values()].filter(item => item.length > 1);
};