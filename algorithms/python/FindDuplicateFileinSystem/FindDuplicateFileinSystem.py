class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for path in paths:
            items = path.split(' ')
            for i in range(1, len(items)):
                file, content = items[i].split('(')
                d[content[:-1]].append(items[0] + '/' + file)
        return [v for v in d.values() if len(v) > 1]