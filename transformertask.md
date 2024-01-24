# Feedbacks Processing

This document provides an overview and explanation of the code snippets related to processing feedbacks in JavaScript.

## Task One: Format Feedbacks for List

In this task, the goal is to create a function that takes a list of feedbacks and returns a formatted version containing only the required fields. The fields include id, label, formId, stepId, sectionId, sortIndex, placeholder, visibleAccordingTo, isRequired, isHidden, isFullwidth, type, minLength, and maxLength.

The `formatFeedbacksForList` function maps through the feedbacks, extracts the required fields, and sorts the result based on the sortIndex.

## Task Two: Get Feedback by ID and Format

This task involves creating functions to retrieve feedback by its ID and format it, including all existing fields. The `getFeedbackById` function finds the feedback with a given ID, and the `formatFeedback` function structures the feedback with detailed information about its inputs.

The example usage demonstrates how to retrieve feedback by ID and format it accordingly.

## Task Three (Optional): Filter and Concatenate Feedbacks

Task Three is optional and involves filtering feedbacks based on a specific value in the feedback's values field. If the value matches the criteria, the corresponding input details are concatenated with the feedback.

The code filters feedbacks and creates an array with concatenated details, showcasing how to handle cases where the corresponding input is found or not.

Note: Replace specific IDs and values according to your actual use case.

