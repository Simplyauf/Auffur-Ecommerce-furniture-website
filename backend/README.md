## Auffur index SERVER URL
- https://auffur.onrender.com

## Prerequisites
- yarn/npm should be installed
- Basic knowledge of git
- knowledge of express and mongoose to contribute

## Installation

To install this project, follow these steps:
- Clone the repository
`git clone https://github.com/Simplyauf/Auffur.git`
- cd your-project and Install dependencies
`yarn add`
- Start the development server
-`yarn run start`
  
## How to Contribute
  
### Contributions are welcomed, changes will be reviewed and merged  if they are a good fit for the project. Thank you for contributing!
  
- Fork the repository
- Create a new branch: `git checkout -b new-feature`
- Make your changes and commit them: `git commit -m 'commit message'`
- Push to the branch: `git push origin new-feature`


 ## Environment variables
 
 * SERVER_URL,CLOUD_NAME,CLOUD_API_SECRET,CLOUD_API_KEY(Cloudinary parameters), MONGO_URI, FRONTEND_URL(index),SECRET_TOKEN_KEY(jwt secret pass),MAIL_PASS and MAIL_FOR_SENDING(for email sending)

## Products
* SingleProductFormat: { id :`product id`,categories: `{
  Featured Categories: ["featured", "first order deal", "discounts"] , features: ["chairs", "tables", "sets", "cupboards", "lighting", "sofa"] , location:["kitchen", "dining", "bedroom", "living room", "office"] , others: ["kids"] }`, createdAt: `Date`,  discountPercentValue: `percent value(0-100)`, image: `Image path`, price: `price value`, stock: `stock value` , title : `Product name`, updatedAt:`Date`}

 * The key(category) in categories(Featured Categories,Features,location,others) are constant while its properties(sub-category) in the array can vary and change based on the categories it falls on ,but it must not pass the range of those in the arrays.This means the array can take some sub-category it meets standard with but cant take pass the range of what is in the array.

### Get all products

```http
  GET /api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

### Get a specific product

```http
  GET /api/v1/products//getProduct/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


### Upload image to obtain image url as response for product creation

```http
  Post /api/v1/products/upload
```

* req headers : Content-Type - `multipart/form-data`,  Authorization - `Bearer ${LoginToken}`


| Resquest body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Image` | `File` | **Required**. Your Image File,not more than 3mb |

### Create new product

```http
  POST /api/v1/products/
```
* req headers : Authorization - `Bearer ${LoginToken}`

|Request body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. product name |
| `price` | `Number` | **Required**. product price|
| `stock` | `Number` | **Required**. Number of stocks |
| `image` | `string` | **Required**. product image url |
| `discountPercentValue` | `Number` | **Optional**. discount percent value |
 `categories` | `array` | **Format**. The whole categories object must be sent back but the subcategories contained in the array is optional,depending on whether the product meet its parameter or it could be empty | 


### Edit and update existing product

* req headers : Authorization - `Bearer ${LoginToken}`

```http
  PATCH /api/v1/products/editAndupdateProduct/${id}
```
* Query parameter : id - id of product to edit

|Request body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. product name |
| `price` | `Number` | **Required**. product price|
| `stock` | `Number` | **Required**. Number of stocks |
| `image` | `string` | **Required**. product image url |
| `discountPercentValue` | `Number` | **Optional**. discount percent value |
 `categories` | `array` | **Format**. The whole categories object must be sent back but the subcategories contained in the array is optional,depending on whether the product meet its parameter or it could be empty | 



### Delete a specific product

```http
  Delete /api/v1/products/deleteProduct/${id}
```
* req headers : Authorization - `Bearer ${LoginToken}`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to delete |



### Search Products

```http
  GET /api/v1/products/searchProducts
```

|Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. searched product |
| `pageNo` | `Number` | **Required**. current page number|
| `perPage` | `Number` | **Required**. Number of products per page |

### Get products in order of low stock products

```http
  GET /api/v1/products/sortByLowStockProducts
```

|Query Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pageNo` | `Number` | **Required**. current page number|
| `perPage` | `Number` | **Required**. Number of products per page |

## Authentication

### Login 

```http
  Post /api/v1/auth/login
```

* req headers : Content-Type - `multipart/form-data`,  Authorization - `Bearer ${LoginToken}`


| Resquest body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `email` | **Required**. Visitor's email |
| `eassword` | `password` | **Required**. Visitor's password |

### Register 

```http
  Post /api/v1/auth/register
```

* req headers : Content-Type - `multipart/form-data`,  Authorization - `Bearer ${LoginToken}`


| Resquest body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `username` | **Required**. Visitor's name |
| `email` | `email` | **Required**. Visitor's email |
| `password` | `password` | **Required**. Visitor's password |

### Delete user

```http
  Delete /api/v1/auth/deleteUser/${id}
```
* req headers : Authorization - `Bearer ${LoginToken}`
* Only admin can take action which will be deduced from token

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |

### On click of the link for email verification

```http
  Get /api/v1/auth/verifyGmail/:${task}
```
* Request headers : query param -token(This is present in the link sent), path param task(this tells the server what the clicked link is for "Email-verification")

### On click of the link for password reset

```http
  Get /api/v1/auth/resetPasswordLink/:${task}
```
* Request headers : query param -token(This is present in the link sent), path param task(this tells the server what the clicked link is for "password-reset")


### Resend email verification

```http
  Post /api/v1/auth/resendEmailVerificationLink 
  ```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `email`  |  **Required**. email of user  |


### Check if login token is still valid Middleware

```http
  Get /api/v1/auth/isTokenValid
  ```

  * req headers : Authorization - `Bearer ${LoginToken}`


### Forgot password Click to send password-reset link

```http
  Post /api/v1/auth/forgotPasswordClick
  ```

| Request body| Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `email` | **Required**. email of user  |
 

 ### Change password 

 ```http
  Post /api/v1/auth/changePassword
  ```

  * Request headers : req.headers.token=token(This is present in the link sent)

| Request body| Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `password`      | `password` | **Required**. new password of the user  |

## Admins

### checkIfUserIsAdmin middleware

* this runs  before every action admin takes to confirm their validity 
 * req headers : Authorization - `Bearer ${LoginToken}


### Add new admin

* Only admin rank 1 can take action which will be deduced from token.There are number 1 ranked and then the lower ranks.

```http
  Post /api/v1/auth/createNewAdmin
  ```

| Request body| Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `email` | **Required**. email of user to be made admin  |
| `adminRank`      | `Number` | **Required**. Rank to be awarded to the user  |

### Get all Admin datas

```http
  Get //api/v1/admin/getAdminDatas
  ```

### Remove Admin

```http
  Delete /api/v1/admin/removeAdmin
  ```
  | Request body| Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `email` | **Required**. email of user whose admin status is to be removed  |

## Orders

### Place order

```http
  POST /orders/placeOrders
```

|Request body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `email` | `Number` | **Required**. User email|
| `address` | `Number` | **Required**. User address |
| `country` | `string` | **Required**. User country |
| `postalCode` | `Number` | **Required**. User postal code 
| `shippingMethod` | `Number` | **Required**. User shipping method either 'standard','express' or 'free shipping' 
|`city` | `String` | **Required**. User postal code 
|`totalAmount` | `Number` | **Required**. Product total amount
| `quanity` | `Number` | **Required**.Product total quantity 
|`productId` | `id` | **Required**.Product id 
|`deliveryStatus` | `status` | **Required**. ["pending", "delivered", "cancelled"] 
|`paymentStatus` | `status` | **Required**.one of these  ["pending", "paid", "cancelled"] 
|
 



## License

This project is licensed under the [Apache License 2.0](LICENSE).

For more information about the terms of this license, please refer to the [LICENSE](LICENSE) file.







