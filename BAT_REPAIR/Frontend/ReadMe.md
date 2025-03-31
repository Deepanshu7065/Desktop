**LOGISTICS** 
 
### Pages 
 TRIP 
  |----- MASTER VEHICLE
  |----- ORDER LIST
  |----- TRIP
  |----- VEHCILE OUT
  |----- EXPNSE-REPORT
  |----- COMPLETED
  |----- ATTENDANCE

 FUEL
  |-----  FUEL LIST


 #### MASTER VEHICLE #####
  
  - **Vehicle List**: Displays a list of vehicles with status
   1. Download  in excel file all incharges atteched with vehicle
   2. Manged by Manger Download file in excel format all vehicle details whith driver name 
   3. filter by manager
   4. filter by Vehicle Status

  - **ALL FUNCTIONALITIES**:
   1. Add Driver in vehicle if driver not added. if already added show driver name and delete 
   2. show manager name and delete in vehicle and add button 
   3. View details if in vehcile added freight 
   4. Create frieght if vehicle status is new_trip and vehicle_in 

 #### ORDER LIST #####

  - **Order List**: Displays a list of orders with status 
  1. click order id to view order details all products details
  
  - **ALL FUNCTIONALITIES**:
   1. Add Vehicle in orderId if vehicle not added. if already added show vehicle number and delete
   2. view button to view order details 


 #### TRIP #####
  in trip page we have 2 Tab Buttons

  - **Trip List**: Displays a list of trips with status

   ### Trip List Functionality
    1. **Filter** :- By Manager 
    2. **crete trip** :- Create Trip Button click add vehicle for trip
    3. **Create Freight** :- Button CreateFreight click add  freight details 
                            and orders select orderid 
                            Manual Add freight details party name , 
                            distrubutor name, invoice no, adress, weight and freight rate 
    4. **View Button**:- After submit freight view button click and show details for freight
    5. **Vehcile Out**:- And vehcile out button click  for vehcile out and next step go to fuel add in vehicle
    6. **Details**:- Builty Details Button click and Modal open and show details builty details , 
                     other expenses and logs details
                     in builty details merge by party name and address and print by builty number
    7. **Delete Button** :- Delete Button click and delete trip and all freight and trip status change to delete
    8. **Edit Button** :- Edit Button click and edit trip and all freight and trip status change to edit in json format 
    9. **Add Expense** :- Add Expense Button click and add expense details and amount 
   
  
  - **BUILTY LIST**: Displays a list of trips with status
     
    ### Builty Functionality
     1. All Builty Add List show here
     2. status is freight_added 
     3. **Edit Button** :- click and edit bulty details in json format 
     4. **Print Receipt** :- Print by builty number 
 
 
 #### Vehicle OUT ##### 
  Same  as trip page only status is vehicle_out


#### EXPENSE-REPORT #####
 in this page we have 2 Tab Buttons
  
  - **Expense List**: Displays a list of trips with status is FUEL_ADDED

   ### Expense Functionality
    1. **Filter** :- By Manager 
    2. **Expense ADD** :- Add Expense Button click oen Modal 
                          - Two Tabs Expense and Update Amount 
                          - Add expense details and amount
                          - And add maintainance Cost and Driver Commission
                          - In update Amount edit builty details bank amount, receive amount, cash amount and 
                            freight rate, and bank date  
    3. **Edit Button** :- click and edit expense details in json format 
    4. **Details**:- Builty Details Button click and Modal open and show details builty details , 
                     other expenses and logs details
                     in builty details merge by party name and address and print by builty number
    5. **Delete Button** :- Delete Button click and delete expense and expense status change to delete
 
  - **BUILTY WISE**: Displays a list of trips with status is COMPLETED
    
    ### Builty Functionality
     1. All Builty Add List show here
     2. status is freight_added
     3. show in bulty number and amount 
     4. **update Amount** :-  In update Amount edit builty details bank amount, receive amount, cash amount and 
                              freight rate, and bank date 
     5. **Edit Button** :- click and edit bulty details in json format


 #### COMPLETED #####
   we have 2 tabs 

  - **Completed List**: Displays a list of trips with status is COMPLETED

   ### Completed Functionality
    1. **Filter** :- By Manager 
    2. **Details**:- Builty Details Button click and Modal open and show details builty details ,
    3. **Edit Button** :- click and edit bulty details in json format

  - **BUILTY COMPLETED**: Displays a list of trips with status is COMPLETED
    
    ### Builty Functionality
     1. Filter By Manager
     2. Filter all details by date selected
     3. Download report in excel format 
     4. Download button Tally Report in excelformat 
     5. **Edit Button** :- click and edit bulty details in json format
     6. **Print Receipt** :- Print By Challan Number


 #### ATTENDANCE ####
  in this page we have 2 Tab Buttons
   
   - **Attendance List**: Displays a List of Driver Name and Vehicle Number
    
     ### Attendance Functionality
      1. **filter** :- - By Manager
                      - By Driver Types
                      - By Sailery Types Commission or Sailery 
                      - By Absent And Present
                      - By Date
                      - By Active or InActive
      2. **Create Driver** :- name, phone, vehicle, driver_type, licence number, sailery_type, 
                             commission, sailery, image,adhar card, licence image, expiration date
      3. **Edit Button** :- click and edit driver details in Modal
      4. **Action** :- click Absent and present driver 
                      - add and remove vehicle in driver
      5. **View Documnet** :- click and view driver Documents in Modal

  - **Attendence Report**: Displays a List of Driver Name and Vehicle Number 
                          And details persent and absent all day of the month
    
    ### Attendence Report Functionality
     1. **filter** :- - By Month
                     - By Driver Types
                     - By Sailery Types Commission or Sailery
                     - Active or InActive
     2. **Download Report** :- Download Report in excel format


 #### FUEL ####

   - **Fuel List**: Displays a list of trips with status is FUEL_ADDED

    ### Fuel Functionality
     1. **Fuel Update** :- Fuel Rate Update  
     2. **Fuel Added**:-  In vehicle Number add DeisleLt , And fuel Rate, End Reading 
                          extra fuel rate reading and extra fuel amount, add image of reading vehcile


