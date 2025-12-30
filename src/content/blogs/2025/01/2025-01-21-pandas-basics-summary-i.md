---
title: 'Pandas Basics Summary I'
description: 'Some Pandas functions I have learned during leetcode'
pubDate: '2025-01-21'
heroImage: 'https://plus.unsplash.com/premium_photo-1695717076798-404f76f121da?q=80&w=2991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tags: ['leetcode', 'python', 'pandas']
---

Continue with [my previous post](../2025-01-19), below are the Leetcode questions about Pandas

### The list of questions about Pandas

2877. [Create a DataFrame from List](https://leetcode.com/problems/create-a-dataframe-from-list)
2878. [Get the Size of a DataFrame](https://leetcode.com/problems/get-the-size-of-a-dataframe)
2879. [Display the First Three Rows](https://leetcode.com/problems/display-the-first-three-rows)
2880. [Select Data](https://leetcode.com/problems/select-data)
2881. [Create a New Column](https://leetcode.com/problems/create-a-new-column)
2882. [Drop Duplicate Rows](https://leetcode.com/problems/drop-duplicate-rows)
2883. [Drop Missing Data](https://leetcode.com/problems/drop-missing-data)
2884. [Modify Columns](https://leetcode.com/problems/modify-columns)
2885. [Rename Columns](https://leetcode.com/problems/rename-columns)
2886. [Change Data Type](https://leetcode.com/problems/change-data-type)
2887. [Fill Missing Data](https://leetcode.com/problems/fill-missing-data)
2888. [Reshape Data: Concatenate](https://leetcode.com/problems/reshape-data-concatenate)
2889. [Reshape Data: Pivot](https://leetcode.com/problems/reshape-data-pivot)
2890. [Reshape Data: Melt](https://leetcode.com/problems/reshape-data-melt)
2891. [Method Chaining](https://leetcode.com/problems/method-chaining)

### Setup Pandas
Pandas is all about manipulating `DataFrame`. Imagine `DataFrame` is a table. 

To use Pandas, import it from `pd`:

```python
import pandas as pd
```

### Pandas Functions

```python
# Create DataFrame from a list
list = [[1, 'Apple'], [2, 'Banana'], [3, 'Orange']]
df = pd.DataFrame(list, columns=['id', 'fruit'])


# Create DataFrame from an object
# Each property is a list
obj = {
    'name': ['Piper', 'Grace', 'Georgia', 'Willow', 'Finn', 'Thomas'],
    'salary': [4548, 28150, 1103, 6593, 74576, 24433]
}
pd.DataFrame(obj)


# Get number of rows
len(data)


# Get columns from a dataframe 
df.columns


# Get row with indexer, iloc = integer location 
df.iloc[n][column_name]
# e.g. df.iloc[0]['id']
df.iloc[0, 0]  # Selects the first row and first column value
df.iloc[0:2]   # Selects rows from position 0 to 1 (end position 2 is excluded)


# Get row by labels
df.loc['index_label']
df.loc['index_label', 'column_name']
df.loc['index_label_start':'index_label_end']


# Get shape (rows x columns) from a dataframe
(rows, cols) = df.shape


# Get top N rows
df.head(3)


# Filter rows
df[df['column_name'] == val]
# e.g row = students[students['student_id'] == 101]


# Select fields from rows
df[['column_name1', 'column_name2']]


# Create new column from existing column
df['new_column'] = df['old_column'] * 2


# Modify all values in a column
df['column_name'] = df['column_name'] * 2


# Iterate rows
for row_id, row in df.iterrows():


# Drop duplicates
df.drop_duplicates(subset='column_name', keep='first')
# drops rows that drop_duplicates() returns TRUE, see the test case below for details
# keep=False, Mark all duplicates TRUE
# duplicates_false = df.duplicated(subset='email', keep=False)
# 0    False
# 1     True <- Both marked true as keep set to false, don't keep any duplicates
# 2     True <-

# duplicates_first = df.duplicated(subset='email', keep='first')
# keep='first', Mark all duplicates TRUE except the first occurance
# 0    False
# 1    False <- Marked false to keep because it is the first
# 2     True

# duplicates_last = df.duplicated(subset='email', keep='last')
# keep='last', Mark all duplicates TRUE except the last occurance
# 0    False
# 1     True
# 2    False <- Marked false to keep because it is the last


# Filter rows by column not null
df[df['column_name'].notnull()]
# returns a series of id, boolean
# since TRUE = 1, FALSE = 0, counting not null rows can be:
df['column_name'].notnull().sum() == 1


# Filter rows by column is null
df[df['column_name'].isnull()]


# Sum all rows from a column
df['column_name'].sum()


# Rename columns
df.rename(columns={'old_column1': 'new_column1', 'old_column2': 'new_column2'})


# Get column name
df.columns.tolist() == ['column_name1', 'column_name2']


# Change column type
df['column_name'] = df['column_name'].astype(int)


# Check column type
ptypes.is_float_dtype(df['column_name'])


# Fill data for null
df['column_name'] = df['column_name'].fillna(value)


# Append / concat dataframes
pd.concat([df1, df2])


# Sort rows by a columns
df.sort_values(by='column_name', ascending=False) # or
df.sort_values(by=['column_name1','column_name2'], ascending=False) # or


# Get the indexes
df.index

# Setting index
df.set_index('name', inplace=True)
# if inplace = False it will create a new dataframe


# Reset index to default integer index (index can be set to a string field for example with set_index)
df.reset_index(drop=True)
# if drop = false, the original index column will preserve, column will be dropped entirely otherwise 


# Reshape from long to wide format (Pivot)
# values to columns
# e.g use the month as index column, then each unique value in city column become a new column, then aggregate values from temperature column. 
df.pivot(index='product', columns='quarter', values='sales')
# index: Column to use to make new frame’s index.
# columns: Column to use to make new frame’s columns.
# values: Column(s) to use for populating new frame’s values.

# before
# product     | quarter   | sales
# Umbrella    | quarter_1 | 417
# SleepingBag | quarter_1 | 800
# Umbrella    | quarter_2 | 224
# SleepingBag | quarter_2 | 936
# ...

# after
# product    | quarter_1 | quarter_2 
# Umbrella   | 417       | 224       
# SleepingBag| 800       | 936       


# Reshape from wide to long format (Melt)
# columns to values
pd.melt(report, id_vars=['product'], var_name='quarter', value_name='sales')

# Sample DataFrame
data = {
    'product': ['Umbrella', 'SleepingBag'],
    'quarter_1': [417, 800],
    'quarter_2': [224, 936],
}
# before
# product    | quarter_1 | quarter_2 
# Umbrella   | 417       | 224       
# SleepingBag| 800       | 936       

# after
# product     | quarter   | sales
# Umbrella    | quarter_1 | 417
# SleepingBag | quarter_1 | 800
# Umbrella    | quarter_2 | 224
# SleepingBag | quarter_2 | 936
# ...
```
