---
title: 'Summary of testing Python code'
description: 'The steps I used to create a unit-testing environment for testing my Leetcode Python code from scratch'
pubDate: 2025-01-19
heroImage: "https://plus.unsplash.com/premium_photo-1664303799202-af9165d754a6?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ['python', 'leetcode', 'dev']
---

I have a habit to do leetcode questions sequentially. Last week I encountered 14 questions in a row about Pandas, which I think worth to do a little recap to enhance my memory. When I was learning Machine Learning 7-8 years ago. (The famous course on Coursera by [Andrew Ng](https://www.linkedin.com/in/andrewyng/).) I was using Octave and then didn't touch Python / Pandas for a long time as I am a full-stack .NET guy. Before I can start solving those questions. I have to setup the testing environment to verify my code. It is always good to document how do I setup such a Python unit-testing environment from scratch. This is more easier to use than I was expected, except some discrepancy during Python setup. 


## Setup Python

<!-- These are the first questions in Python that I have encountered on Leetcode.  -->

1. Check if Python installed:
```
python3 --version
```

If not:
```
brew install python3
```

2. Create virtual environment, isolated environment with a standalone python installation with pip installed in root directory:

```
python3 -m venv .
```

3. Activate the virtual environment:
```
source bin/activate
```

4. Install pytest:
```
python3 -m pip install pytest
```

5. Deactivate the virtual environment (In case needed)
```
deactivate
```
## Setup Python unit-testing

There are two major unit testing framework in Python:
- unittest
- pytest

### `pytest` vs `unittest`

| Feature           | `pytest`                          | `unittest`                        |
|-------------------|-----------------------------------|-----------------------------------|
| Installation      | Third-party (`pip install pytest`)| Built-in (part of standard library)|
| Test Structure    | Function-based                    | Class-based                       |
| Boilerplate Code  | Less                              | More                              |
| Assertions        | Simple `assert` statements        | Methods like `self.assertEqual`   |
| Advanced Features | Fixtures, parameterized testing, plugins | Limited                           |
| Test Discovery    | Automatic                         | Requires `unittest` discovery     |

I choose `pytest` as it work in a modern way.

To use `pytest`:
```python
pip install pytest
```

To run test for a file
```
pytest filename.py
```

To get output from `print()`
```
pytest -s filename.py
```

Run all tests in a folder
```
pytest
```

**Test files must either start with `test_` or end with `_test.py`**

And you are all done:
```
% pytest
===== test session starts =====
platform darwin -- Python 3.13.1, pytest-8.3.4, pluggy-1.5.0
rootdir: /Users/ferrywlto/Documents/GitHub/Personal/kata-dojo/python/leetcode
collected 15 items                                                                                        

easy/q2877_create_dataframe_from_list_test.py  [  6%]
easy/q2878_get_size_of_dataframe_test.py       [ 13%]
easy/q2879_display_first_three_rows_test.py    [ 20%]
easy/q2880_select_data_test.py                 [ 26%]
easy/q2881_create_new_column_test.py           [ 33%]
easy/q2882_drop_duplicate_rows_test.py         [ 40%]
easy/q2883_drop_missing_data_test.py           [ 46%]
easy/q2884_modify_columns_test.py              [ 53%]
easy/q2885_rename_column_test.py               [ 60%]
easy/q2886_change_data_type_test.py            [ 66%]
easy/q2887_fill_missing_data_test.py           [ 73%]
easy/q2888_reshape_data_concatenate_test.py    [ 80%]
easy/q2889_reshape_data_pivot_test.py          [ 86%]
easy/q2890_reshape_data_melt_test.py           [ 93%]
easy/q2891_method_chaining_test.py             [100%]

===== 15 passed in 0.53s =====
```

### Some Python basics 
```python
# Defining a function
def function_name(param_name: param_type) -> return_type:
    # code

# Comparing a tuple
assert (10, 5) == (rows, cols)

# Print something
print("message")
```