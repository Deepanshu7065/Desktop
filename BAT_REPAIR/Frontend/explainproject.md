

 **ERP PROJECT**

1. ##### Parking Management #####

   ### Parking A
   - **Vehicle List**: Displays all vehicles with status filters, driver selection, manual out, parking slip print, and gate pass print.
   - **View Parking**: Lists all vehicles with their parking time.


2. #####  Parking B #####
- Same functionalities as Parking A.


3. #### Store Management #### 

  ### Store Manager A
  - **Vehicle List**: View all vehicles, Button request a vehicle, and copy vehicle ID.
  - **Vehicle In**: Displays vehicles in Store A with status "VehicleIn" and allows print voucher by  Order ID.
  - **Weight List**: Allows weight addition for vehicles.
  - **Order Out**: Generates a weight-filled voucher.


4.  #### Store Manager B #####
  - Same functionalities as Store Manager A but only store as B.


5. ##### Store Manager Ring #####

  - **Ring Order**: Displays only ring orders, allows print voucher by Order ID if weight is not loaded. If weight is loaded, it generates a filled voucher. The view button enables weight addition and product selection.
  - **Completed Order**: Displays all completed ring orders.


6. #### Store Manager Gift ######

  - **Master**: Displays all gifts with edit and add options.
  - **Entry**: Lists pending approval orders with approve and reject buttons. Approval requires quantity entry.


7. ###### Store Manager Pipe ######

  - **Sheet and Pipe Order**: Displays all sheet and pipe orders, allowing print vouchers by Order ID.
  - **Completed Order**: Displays all completed sheet and pipe orders.


8. #### Gatekeeping Management #####

 ### Gatekeeper A, B, C
  - **Input Field**: Enter vehicle ID.
  - **Approve Button**: Approves vehicle entry.
  - **API Call Simulation**: Handles approval requests.



9. ##### Billing & Accounts #####

 ### Billing Page Functionalities
  ### Overview
   The **Billing Page** displays all orders from different stores. Users can print bills, cancel IRNs, or create invoices based on order status.

 #### Main Actions
   - **Cash Invoice**: Create an invoice by selecting partner, shipping, vehicle, products, quantity, unit, rate per MT, and TCS application.
   - **Manual Invoice**: Same as Cash Invoice with manual data entry.

 #### Order Status & Billing
   - **Finalized Orders**: Allows bill printing.
   - **Non-Finalized Orders**: Displays "Create Invoice" button.

 #### Cancel IRN
   - If IRN is filled, users must provide a reason before cancellation.

 #### Invoice Creation Process
   - **Modal Includes**:
    - Seller details
    - Order details
    - Checkbox for TCS application (True/False)

 #### Order Rate Confirmation & Print Voucher
  - Requires rate confirmation.
  - **Voucher Includes**:
    - Ring product details
    - Envelope print option
    - Gift print option
    - Submitting completes invoice creation.

#### View Invoice & Additional Actions
 - Displays a **View Invoice** button after invoice generation.
   - Allows:
     - Viewing invoice details
     - Creating a **WayBill**
     - Finalizing order after IRN creation

 ### Expected Workflow
  1. Users view all orders on the **Billing Page**.
  2. Based on order status, they either:
     - Print the bill (if finalized) OR
     - Click **Create Invoice** (if not finalized).
  3. **Invoice Creation Process**:
     - Enter seller and order details.
     - Select **TCS Application** (True/False).
     - Confirm rates per order.
     - Print **Voucher, Ring, Envelope, and Gift details**.
     - Submit the invoice.
  4. If needed, users can **Cancel IRN** by providing a reason.
  5. After invoice generation, users can **View Invoice**, create a **WayBill**, and finalize the order once IRN is created.

 #### Voucher Page Functionality
  - All voucher reports downlaods csv and xlss file format filter by date selected 

 #### Order page Functionality 
  1. View all orders Today Order and filter by dates 
  2. View all orders by Order ID
  3. print voucher by Order ID 
  4. print envelop by Order ID
  5. print bill invoice by orderid

 #### Order Category Rate
  1. View all rates by Order Category

## Summary
This ERP system efficiently manages parking, store operations, gatekeeping, and billing, ensuring seamless workflow, proper validations, and structured processing.




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




###### Canteen #########

**Layout Page**
  - Header :- 
             1. Logo :- user Details, images and Logout
             2. PosButton :- Go to POS Page, 
  - Sidebar :- 
             1. Dashboard, 
             2. Invoice, 
             3. User, 
             4. Canteen, 
             5. Supplier, 
             6. stocks, 
             7. Purchase

 ***DAHBOARD***

  - show monthly yearly and daily report 
  - show last 20 orders and view details and print order bill

 *** INVOICE ***
  - list show all Orders 
  - show order details and print order bill
  - canteen name order id customer name types amount date all details are show in list


 *** User ***
  - list show all Users
  - filter By User Role ADMIN, USER, EMPLOYEE
  **Functionality**
  - create user :- add user details and user role
  - edit user :- edit user details and user role
  - add Voucher :- IN User Add Voucher Modal and description and amount
  - view voucher :- IN User View Voucher Modal and show all voucher details


 *** Canteen ***
  - create Canteen button click and add canteen details, field are required is :- canteen name, canteen address, phone number ,
    canteen email, password , canteen description

  - list show all Canteen 

  **Functionality**
  - Copy Url  :- click and copy canteen id with url 
  - Show QrCode :- click and show QrCode in Modal in qrcode cantee id

 *** Products ***
  - list show all Products

  **Functionality**
  - create product :- add product details and product image field are required is :- product name, description, price,  
    unit, available  , image
  - view image :- click and show product image in Modal
  - edit product :- edit product details and product image
  - delete product :- delete product details and product image

 *** Supplier ***
  - list show all Suppliers

  **Functionality**
  - create Supplier :- add Supplier details and Supplier image field are required is :- Supplier name, Supplier address, phone number ,
  - edit Supplier :- edit Supplier details and Supplier image
  - delete Supplier :- delete Supplier details and Supplier image

 *** Stocks ***
  - list show all Stocks products, quantity 

  **Functionality**
  - create Stocks :- add Stocks details and Stocks image field are required is :- Stocks name, Description, unit
  - View Button :- click and Show Stocks All details in Modal


 *** Purchase ***
  - list show all Purchases

  **Functionality**
  - create Purchase :- add Purchase details and Purchase image field are required is :- Purchase name, Description, unit,
    selected supplierId, selected productId
  - View Button :- click and Show Purchase All details in Modal


 #### POS ####
  if you are Employee
  - **POS**: Show all Products in your canteen
   
    ### POS Functionality
     1. **Filter** :- By Product Types
     2. **Search** :- Search By Product Name
     3. **Add Cart** :- Add Product in Cart
     4. **Stocks** :- two tabs 1. update stocks, 2. use Stocks
                    1. add quantity in stocks
                    2. use quantity in stocks
   
     - **Cart**: Show all Items in your cart
                - increase Quantity and decrease Quantity
                - remove Item from cart
                - clear cart

     - **Checkout**: Show all Items in your cart
                    - Calculate products total amount
                    - Calculate total amount
                    - select user
                    - select payment method
                    - if you have a voucher then you select the checkbox for use voucher

     - **Create Order**: Create Order     after successfully checkout

if you are User you are not login first you logged in
  - **POS**: Show all Products in your canteen

    ### POS Functionality
     1. **Order List** :- Show all Your Orders
     2. **Filter** :- By Product Types
     3. **Search** :- Search By Product Name
     4. **Add Cart** :- Add Product in Cart
     5. **Stocks** :- two tabs 1. update stocks, 2. use Stocks
                    1. add quantity in stocks
                    2. use quantity in stocks

     - **Cart**: Show all Items in your cart
                - increase Quantity and decrease Quantity
                - remove Item from cart
                - clear cart

     - **Checkout**: Show all Items in your cart
                    - Calculate products total amount
                    - Calculate total amount
                    - if you have a voucher then you select the checkbox for use voucher

     - **Create Order**: Create Order     after successfully checkout
     6. **logout** :- logout from your account


 ##### MAGADH #####
  
  *** Chat ***
  - 