# DTI
## In emergency page we will calculate user's distance with the hospital's distance if it is <= 50km then we will display those requests. For this thing to work we need longitudes and latitudes of user and each hospital.
## The emergency page can be accessed without any login. But it is necessary to provide location access.

## Map page not yet linked to a single component in home page.

## recently merged from branch main2 which was 2 commits ahead and 2 commits behind of main.  Before the merge : 2 commits regarding maps were done in main2 ; 1 commit regarding merging pull request and 1 commit regarding readme.md file were done in main. It was merged into main by ort strategy.Any files lost or changed is not yet checked.

## in 16th commit .we converted hospital name in emergency list into a hyperlink .We resloved problem which caused the data in emergency list to be overwritten when the send request form was submitted after reloading/revisiting the page. 
## Still we have one objective : to be able to delete the any tuple in emergency list by the admin. For that we need to add 2 options in the login page.1)send request 2)delete request ... the admin can select one of the hyperlinks and can goto corresponding webpages to perform the action. We need to create a delete_request_page where we shall see the same data as the emergency list but with option to delete a tuple at a time. Whenever a tuple of index i is deleted , the tuples below it (index > i) should be shifted one step up (i.e i+1 th tuple comes into i th position.. so on[it is similar to executing a delete operation in linear queue]), and the data must be uploaded back into localStorage. We must be able to connect the emergency list with the delete request page , just like we did with send request page.

## Added a hidden tag about creator. Click on info button on top right to disclose it .(present at bottom of home page)

# Todo
## add update,delete option to admin for managing hospital accs