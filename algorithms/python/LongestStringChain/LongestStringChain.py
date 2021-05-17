class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        words.sort(key=len)
        seen = defaultdict(int)
        for word in words:
            v = max(seen[word[0:i] + word[i+1:]] for i in range(len(word)))
            seen[word] = v + 1
        return max(seen.values(), default=0)