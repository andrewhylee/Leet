import sys

# Soln 1
def containsDuplicate(nums):
	return len(set(nums)) != len(nums)

print(containsDuplicate([5,14,12,5]))
print(containsDuplicate([1,14,12,5]))

# Soln 2

