class Solution:
    def isAnagrams(self, s: str, t):
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        if countS == countT: return True
        else: return False

print(Solution().isAnagrams("hello", "olleh"))
print(Solution().isAnagrams("hello", "olles"))