#GoCode Problem Service


## how routing is working
-/api/v1/problems/ping 
-because the route starts with /api
   /api   ->/v1/   ->/problems    ->/ping
   apiRouter->v1Router->problemRouter->problemController->service layer

   the final middleware is refered as controller because from here we are making calls to service layer