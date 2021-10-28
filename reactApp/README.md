# React Task 1

You need to implement simple page with information about user.
The user has next data and should be stored as constant variable and passed as props into application:

```sh
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "avatarSrc":"img_girl.jpg",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
```

You are free to implement different design (discuss it with mentors), but UX should be the following:
![screenshot](./public/images/task10.png)

# React Task 2
You have to create request for albums data from https://jsonplaceholder.typicode.com/ and paste this information into you application inside <Content/> component from previous task.
So UX should be next: 

![screenshot](./public/images/task10-2.png)

No any strict rules for UI or UX, but you need paste this data like list items
Don’t use react hooks for this task (only classes available if you need side effects)

 
# React Task 3
You have to implement next things
1.	Rewrite classed components to functional components with hooks
2.	Add logic for clicking on album: you should load all photos from album and paste it into <Content/> component. 

So UX should be next: 
1.	Initial you load albums and paste it into <Content/> (it has to be done in previous task)
2.	After it you can click on album and load photos
3.	there is should be back button to go back to albums in case if you are on “photos” page (fells free to choose place for it)
![screenshot](./public/images/task10-3.png)

# React Task 4
You have to add state management of your application with Redux
1.	You need to implement action creators for albums, photos
2.	You need to implement reducers for albums, photos, user
3.	You need to review you components and “connect” store with application
4.	You need to add buttons “Add album” and “Add photo”after last items in corresponding lists. Clicking on this buttons must add new items with hardcoded values 
IMPORTANT NOTE: Considering limitations in API that it doesn’t add new items intolist of albums or photos (it’s only return “OK” status), you need to think about how you should save new items. I propose you to use special field in reducer for new items, created locally.Resulted list for components should combine items from API and local added items. But you can discus with you mentors and find more suitable solution if you want. The main target of this task –move out of components business logic with storing and creating items with Redux


### Task 5
You have to add forms for creating new album and photos
1. Instead if creating hardcoded albums and photos you need to show modal window with necessary fields. Modal window must be independent component and can be used separately with different content. UI must include minimum number of features (see the picture). Try to use features that we mentioned in lecture (context or renderProps for content, portal for placement of modal window, or your own ideas)/ Implement simple validation
2. Add ErrorBoundry to your application
3. As we can have a lot of items from API response, we need to have a way to go to bottom of page. So you need to add a control inside of <Content/>component that will scroll to bottom of page on click (any UI for this control)

### Additional task: as we don’t touch topic how to implement custom hooks, try to implement:
- hook to get previous value of props, state, etc
usePrevious(value)
- hook that will repeat behavior of componentDidUnmount lifecycle method useComponentDidUnmount(callback)