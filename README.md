# FriendFinder

# https://safe-cove-83329.herokuapp.com/

This app is a friend finder that uses Express to route data between the client and server side.

It tells you based on locally stored data who your best friend on the list is based on your answers to the questions.

It is deployed in the above web page on Heroku.

It has an API interface that gives a JSON of all user data in the application.

It is fun and easy to use, find a friend today!

The user's most compatible friend is found in the following way:

   * Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, the difference between current user's scores against those from other users are compared, question by question. The total differences are added up to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.

