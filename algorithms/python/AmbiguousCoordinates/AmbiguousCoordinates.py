class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
        def nums(start=1, end=len(s)-1):
            for i in range(start+1, end+1):
                left = s[start:i]
                right = s[i:end]
                if (not left.startswith('0') or left == '0') and not right.endswith('0'):
                    yield f'{left}{"." if i != end else ""}{right}'

        return [
            f'({x}, {y})'
            for i in range(2, len(s)-1)
            for x, y in product(nums(end=i), nums(start=i))
        ]